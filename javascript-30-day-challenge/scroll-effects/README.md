# Practice with Scrolling Effects

This simple exercise exhibits the effect of images fading into view as the user scrolls past certain points on the page. This functionality is achieved by finding the page coordinates of the images and setting the beginning and end points of focus-fading to the tops and bottoms of them. A ```debounce()``` method is utilized here as well to ensure that the page's performance isn't hindered by scrolling up and down so quickly that images are rapidly fading in and out before the proper areas are moved through.

With this project I was able to appreciate the usage of ```window``` and ```document``` coordinates to create a visual effect that certainly enhances UX.

### Credits

This project was created with help from Wes Bos, whose website can be found [here](https://wesbos.com/).