# Scrolling with Click-and-Drag

This simple application demonstrates one way to accomplish click-and-drag scrolling, a modern feature that is somewhat tricky to implement. In the end the action is handled by several event listeners that take in coordinate information from the page to set where the beginning and end points of the scrolling event takes place.

What I took away from this project was how to apply logic to seemingly obvious aspects of a feature. Specifically, knowing that a click-and-drag event would require ```mousedown```, ```mouseup```, ```mouseleave,```, and ```mouseout```, but combining those listeners with page coordinates in such a fashion that it takes their functionality to a level I hadn't experienced in my previous projects.

### Credits

This project was created with help from Wes Bos, whose website can be found [here](https://wesbos.com/).