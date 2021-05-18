import {MyToolkit} from './mytoolkit.js';

var btn = new MyToolkit.Button;

btn.move(10,10);

btn.label("button");

btn.onclick(function(x){
	console.log('Button clicked:', x);
});

btn.state(function(x){
    console.log("Button state: " + x);
})

var checkBox = new MyToolkit.CheckBox;

checkBox.move(200,10);

checkBox.label("checkbox");

checkBox.onclick(function(x){
	console.log('Checkbox clicked:', x);
});

checkBox.state(function(x){
    console.log("Checkbox state: " + x);
})

var radiobtn = new MyToolkit.RadioButton(3);

radiobtn.move(400,10);

radiobtn.label(["radio1", "radio2", "radio3"]);

radiobtn.onclick(function(x){
	console.log('Radiobutton ' + x.target.id + " is selected");
});

radiobtn.state(function(x){
    console.log("Radiobutton state: " + x);
})

var textbox = new MyToolkit.TextBox;

textbox.move(10, 200);

textbox.ontyping(function(x){
	console.log('textbox text changed:', x);
});

textbox.state(function(x){
    console.log("textbox state: " + x);
})

var text = textbox.getText();

console.log(text);

var progressbar = new MyToolkit.ProgressBar;

progressbar.move(10, 400);

progressbar.setWidth(400);

progressbar.state(function(x){
    console.log("progressbar state: " + x);
})

progressbar.increment(70);

var togglebtn = new MyToolkit.ToggleButton;

togglebtn.move(10, 450);

togglebtn.label("toggle button");

togglebtn.onclick(function(x){
	console.log('Toggle Button clicked:', x);
});

togglebtn.state(function(x){
    console.log("Toggle Button state: " + x);
})
