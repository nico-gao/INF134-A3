/**
 * @author Jingtong Gao
 */

import {MyToolkit} from './mytoolkit.js';

/**
 * Create a Button Object
 * @type {Button}
 */
var btn = new MyToolkit.Button;

/**
 * Use a custom move property to set the position of Button
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
btn.move(10,10);

/**
 * Use a custom label property to set the text that appears on the button
 * @function label
 * @param {string} - the text appears on the button
 */
btn.label("button");

/**
 * Bind an event handler that notifies consuming code when the button is clicked
 * @function onclick
 * @param {function} - an event handler
 */
btn.onclick(function(x){
	console.log('Button clicked:', x);
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
btn.state(function(x){
    console.log("Button state: " + x);
})

/**
 * Create a CheckBox Object
 * @type {Checkbox}
 */
var checkBox = new MyToolkit.CheckBox;

/**
 * Use a custom move property to set the position of CheckBox
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
checkBox.move(200,10);

/**
 * Use a custom label property to  set the text that appears to the right of the check box
 * @function label
 * @param {string} - the text appears to the right of the check box
 */
checkBox.label("checkbox");

/**
 * Bind an event handler that notifies consuming code when the checkbox is clicked
 * @function onclick
 * @param {function} - an event handler
 */
checkBox.onclick(function(x){
	console.log('Checkbox clicked:', x);
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
checkBox.state(function(x){
    console.log("Checkbox state: " + x);
})

/**
 * Create a RadioButton Object
 * @type {RadioButton}
 * @param {n} - number of radio buttons
 */
var radiobtn = new MyToolkit.RadioButton(3);

/**
 * Use a custom move property to set the position of RadioButton
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
radiobtn.move(400,10);

/**
 * Use a custom label property to  set the text that appears to the right of the radio buttons
 * @function label
 * @param {Array<string>} - the text appears to the right of the radio buttons
 */
radiobtn.label(["radio1", "radio2", "radio3"]);

/**
 * Bind an event handler that notifies consuming code when the checkbox is clicked
 * @function onclick
 * @param {function} - an event handler
 */
radiobtn.onclick(function(x){
	console.log('Radiobutton ' + x.target.id + " is selected");
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
radiobtn.state(function(x){
    console.log("Radiobutton state: " + x);
})

/**
 * Create a TextBox Object
 * @type {TextBox}
 */
var textbox = new MyToolkit.TextBox;

/**
 * Use a custom move property to set the position of TextBox
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
textbox.move(10, 200);

/**
 * Bind an event handler that notifies consuming code when the text has changed
 * @function ontyping
 * @param {function} - an event handler
 */
textbox.ontyping(function(x){
	console.log('textbox text changed:', x);
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
textbox.state(function(x){
    console.log("textbox state: " + x);
})

/**
 * Use a custom property to get the text entered by the user
 * @function getText
 * @returns {string} - text
 */
var text = textbox.getText();

console.log(text);

/**
 * Create a ScrollBar Object
 * @type {ScrollBar}
 */
var scrollbar = new MyToolkit.ScrollBar;

/**
 * Use a custom move property to set the position of ScrollBar
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
scrollbar.move(500, 200)

/**
 * Use a custom setHeight property to set the position of ScrollBar
 * @function setHeight
 * @param {x} - height
 */
scrollbar.setHeight(450)

console.log(scrollbar.getPosition())

/**
 * Bind an event handler that notifies consuming code when the scrollbar is clicked
 * @function onclick
 * @param {function} - an event handler
 */
scrollbar.onclick(function(x){
	console.log('Scrollbar clicked');
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
scrollbar.state(function(x){
    console.log("Scrollbar state: " + x);
})

/**
 * Create a ProgressBar Object
 * @type {ProgressBar}
 */
var progressbar = new MyToolkit.ProgressBar;

/**
 * Use a custom move property to set the position of ProgressBar
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
progressbar.move(10, 400);

/**
 * Use a custom setHeight property to set the width of ProgressBar
 * @function setWidth
 * @param {x} - height
 */
progressbar.setWidth(400);

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
progressbar.state(function(x){
    console.log("progressbar state: " + x);
})

/**
 * Use a custom increment property to set the value of ProgressBar
 * @function increment
 * @param {x} - increment value
 */
progressbar.increment(70);

/**
 * Create a ToggleButton Object
 * @type {ToggleButton}
 */
var togglebtn = new MyToolkit.ToggleButton;

/**
 * Use a custom move property to set the position of ToggleButton
 * @function move
 * @param {x} - x position
 * @param {y} - y position
 */
togglebtn.move(10, 450);

/**
 * Use a custom label property to set the text that appears on the toggle button
 * @function label
 * @param {string} - the text appears at the right of the toggle button
 */
togglebtn.label("toggle button");

/**
 * Bind an event handler that notifies consuming code when the toggle button is clicked
 * @function onclick
 * @param {function} - an event handler
 */
togglebtn.onclick(function(x){
	console.log('Toggle Button clicked:', x);
});

/**
 * Bind an event handler that notifies consuming code when the widget state has changed
 * @function state
 * @param {function} - an event handler
 */
togglebtn.state(function(x){
    console.log("Toggle Button state: " + x);
})
