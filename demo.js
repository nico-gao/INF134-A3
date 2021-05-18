import {MyToolkit} from './mytoolkit.js';

var btn = new MyToolkit.Button;

btn.move(10,10);

btn.label("button");

btn.onclick(function(x){
	console.log('Button clicked:', x);
});

btn.state(function(x){
    console.log("Button state:", x);
})

var checkBox = new MyToolkit.CheckBox;

checkBox.move(200,10);

checkBox.label("checkbox");

checkBox.onclick(function(x){
	console.log('Checkbox clicked:', x);
});

checkBox.state(function(x){
    console.log("Checkbox state:", x);
})

var radiobtn = new MyToolkit.RadioButton(7);

radiobtn.move(400,10);

radiobtn.label(["radio1", "radio2", "radio3", "radio4", "radio5"]);

radiobtn.onclick(function(x){
	console.log('Radiobutton clicked:', x);
});

radiobtn.state(function(x){
    console.log("Radiobutton state:", x);
})
