// 1. Get elements 

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isChanging = false;

// 2. Build functions 

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = this.paused ? '►' : '❚❚'; // Can use 'this' here as it is within the scope of 'video'
	// console.log(icon);
	toggle.textContent = icon; // Can also use icon's value here instead of separate variable
}

function skip() {
	// console.log(this.dataset);
	// console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(e) {
	if (!isChanging) return;
	video[this.name] = this.value;
	// console.log(this.name, this.value);
}

// I want this function to run every so often, but I don't want 
// an interval/timeout so I have to set an event listener to when the 
// video emits a 'time update' event
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// 3. Hook up event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('click', (e) => isChanging = true));
ranges.forEach(range => range.addEventListener('mousedown', (e) => isChanging = true));
ranges.forEach(range => range.addEventListener('mouseup', () => isChanging = false));
ranges.forEach(range => range.addEventListener('mouseout', () => isChanging = false));

let isMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false);