const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
	.then(localMediaStream => {
		// console.log(localMediaStream);
		video.src = window.URL.createObjectURL(localMediaStream);
		video.play();
	})
	.catch(err => {
		console.error('err', err);
	});
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;
	// console.log(width, height);
	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height); // Take pixels out in order to change them
		// console.log(pixels); // Millions of pixels are present - debugger helps to stop the constant logging of them in order to inspect the object props
		// debugger;
		// pixels = redEffect(pixels); // Change the pixels as desired
		// pixels = rgbSplit(pixels);
		// ctx.globalAlpha = 0.1; // "Ghosting effect" - continuously stacking image on itself at 10% transparency
		pixels = greenScreen(pixels);
		ctx.putImageData(pixels, 0, 0); // Set the changed pixels back in place
	}, 16);
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();
	const data = canvas.toDataURL('image/jpeg');
	// console.log(data);
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	// link.textContent = 'Download image';
	link.innerHTML = `<img src="${data}" alt="Picture of you" />`;
	strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i] = pixels.data[i] - 100; // Red value
		pixels[i + 1] = pixels.data[i + 1] - 50; // Green value
		pixels[i + 2] = pixels.data[i + 2] * 0.5; // Blue value
	}
	return pixels;
}

function rgbSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		// These values shift the placement of the newly colored pixels backwards and forwards
		pixels.data[i - 150] = pixels.data[i]; // Red value
		pixels.data[i + 500] = pixels.data[i + 1]; // Green value
		pixels.data[i - 550] = pixels.data[i + 2]; // Blue value
	}
	return pixels;
}

function greenScreen(pixels) {
	const levels = {};

	document.querySelectorAll('.rgb input').forEach((input) => {
		levels[input.name] = input.value;
	});

	// console.log(levels);

	for (i = 0; i < pixels.data.length; i += 4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3]; // Alpha value also known as the "transparency pixel"

		if (red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
			&& green <= levels.gmax
			&& blue <= levels.bmax) {
			pixels.data[i + 3] = 0; // If the selected value is between the minimum and maximum rgb values, set the transparency to 0% to hide the selected value
		}
	}
	return pixels;
}


getVideo();
// paintToCanvas(); // Cannot load video feed on page load this way because video has to be playing first in order to properly call the drawImage method

// Correct way to load video feed on page load - listening for the associated variables/methods to be made available to use
video.addEventListener('canplay', paintToCanvas);