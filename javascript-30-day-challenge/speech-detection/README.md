# Speech Detection Application

This application lets the user speak normally into their microphone, whether an auxiliary device or the one typically built into laptops, and the text registered from their speech will be laid out inside of paragraph elements, appending new paragraphs each time the user pauses between speaking. To allow speech recording, the user has to ensure their browser has access to the microphone, which can be ascertained through either a pop-up message or basic settings.

This application was truly interesting to put together as I had previously never worked with a technology such as speech recognition, nor was I aware that web browsers have that functionality built into them in the first place. It quickly became clear as to how the words spoken by the user actually appear in the browser once I checked the console and saw all of the associated information was logged in an array, where accessing just the text itself was as simple as returning the value's position in that array.

### Credits

This project was created with help from Wes Bos, whose website can be found [here](https://wesbos.com/).