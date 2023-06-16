# Canvas Painting

This simple application lets the user "paint" on a blank canvas, with the brush size and color shifting between a minimum and maximum value to generate varying brush strokes. This functionality is accomplished by incrementing the hue and line width values until a set endpoint is hit, and then resetting the hue back to the minimum value (being 0) and decrementing the line width to reverse the size. The painting effect will only take place if the user is holding their mouse button down and moving the cursor simultaneously, and will stop if the mouse button is let up. To clear the canvas for a fresh start, the user only needs to refresh the page.

This project was facinating because of the way code and art come together to make an application that operates as simply as it does. With this I gained valuable practice with ```ctx``` methods and adjusting page coordinates to track cursor input.

### Credits

This project was created with help from Wes Bos, whose website can be found [here](https://wesbos.com/).