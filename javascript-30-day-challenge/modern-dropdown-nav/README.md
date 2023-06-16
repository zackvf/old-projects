# Modern Dropdown Navigation

This project exhibits the functionality of a "stripe follow-along" navigation style, where the user can hover over the buttons on the page to display a dropdown navigation item list in a way that is more attractive to the eye than a simpler, less involved version. This is accomplished by acquiring the coordinates of the item lists and offsetting a plain background to display directly behind the lists themselves, with event listeners for the user's mouse entering and leaving the dropdown navigation fields.

This was a particularly interesting project because of the way the concept improves on a common practice but in such a fashion that is infrequently seen these days. At first the idea seemed complicated but once broken down into manageable pieces, the inner workings became much clearer. One piece of functionality that was particularly rewarding to implement was a ```setTimeout()``` method to handle the concern of switching between the dropdown navigation items so fast that the CSS properties aren't added/removed accordingly, leaving overlapped/misaligned lists and a poorer UX.

### Credits

This project was created with help from Wes Bos, whose website can be found [here](https://wesbos.com/).