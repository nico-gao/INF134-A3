// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var cyan = "#89f0e5";
    var darkCyan = "#9cd9d3"
    var lightCyan = "#d3f0ed"
    var strongCyan = "#579690"
    var draw = SVG().addTo('body').size('100%','100%');
    
    var Button = function(){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var clickEvent = null
        var widgetState = "idle"
        var stateEvent = null
       
        var button = draw.group();
        var rect = button.rect(80,50).fill(lightCyan)
        rect.radius(10)
        var label = button.text("")
        label.move(10,8)
        
        button.mouseover(function(){
            rect.fill({ color: darkCyan})
            widgetState = "hover"
            rect.attr('cursor', 'pointer')
            changeState()
        })
        button.mouseout(function(){
            rect.fill({ color: lightCyan})
            widgetState = "idle"
            changeState()
        })
        button.mousedown(function(){
            rect.fill({ color: strongCyan})
            widgetState = "pressed"
            changeState()
        })
        button.mouseup(function(event){
            rect.fill({ color: lightCyan})
            if (widgetState == "pressed"){
                widgetState = "idle"
                changeState()
                if (clickEvent != null){
                    clickEvent(event)
                }
            } 
        })
        
        return {
            move: function(x, y) {
                button.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            label: function(x){
                label.text(x)
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            }
        }
    }

    var CheckBox = function(){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var clickEvent = null
        var widgetState = "idle"
        var stateEvent = null
        var checked = false
       
        var checkbox = draw.group();
        var rect = checkbox.rect(25,25).fill(lightCyan).stroke(darkCyan)
        rect.attr("stroke-width", 3)
        var label = checkbox.text("")
        var checkmark = checkbox.text("")
        label.move(35,-5)
        checkmark.move(7,-3)
        
        checkbox.mouseover(function(){
            widgetState = "hover"
            rect.attr('cursor', 'pointer')
            changeState()
        })
        checkbox.mouseout(function(){
            widgetState = "idle"
            changeState()
        })
        checkbox.click(function(event){
            if (!checked){
                checked = true;
                widgetState = "checked"
                checkmark.text("\u2713")
            }
            else{
                checked = false;
                widgetState = "unchecked"
                checkmark.text("")
            }
            changeState()
            if(clickEvent != null){
                clickEvent(event)
            }
        })
        
        return {
            move: function(x, y) {
                checkbox.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            label: function(x){
                label.text(x)
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            }
        }
    }

    var RadioButton = function(n){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var btnArray = Array(n).fill(0)

        var clickEvent = null
        var widgetState = "idle";
        var stateEvent = null;
        var btnNumber = null;

        var radiobtn = draw.group();

        for (let i = 0; i < n; i++){
            var circle = radiobtn.circle(25).fill(lightCyan).stroke(darkCyan)
            circle.attr("stroke-width", 3)
            var label = radiobtn.text("")
            label.move(35,-5 + i*40)
            circle.move(0, i*40)
            circle.attr("id", i+1)
        }

        radiobtn.click(function(event){
            if (event.target.tagName == "circle"){
                radiobtn.each(function(i, child){
                    if (this.type == "circle"){
                        let x = Math.floor(i/2)
                        if (this.node.cy == event.target.cy){
                            btnArray[x] = 1
                            this.fill({color: strongCyan})
                            btnNumber = x + 1
                            widgetState = "button selected"
                            changeState()
                            if (clickEvent != null){
                                clickEvent(event)
                            }
                        }
                        else {
                            btnArray[x] = 0
                        }
                        if (btnArray[x] == 0){
                            this.fill({color: lightCyan})
                        }
                    }
                })
            }
        })
        
        return {
            move: function(x, y) {
                radiobtn.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            label: function(x){
                radiobtn.each(function(i, child){
                    let k = Math.floor(i/2)
                    if (this.type == "text" && k < x.length){
                        this.text(x[k])
                    }
                })
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            }
        }
    }

    var TextBox = function(){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var typeEvent = null
        var widgetState = "idle"
        var stateEvent = null
        var hovered = false;

        var textbox = draw.group();
        textbox.rect(400,120).stroke(strongCyan).fill(lightCyan)
        var text = textbox.text("").move(40,42)
        var caret = textbox.rect(2,15).move(50,50)
        var runner = null;
      

        textbox.mouseover(function(){
            widgetState = "hover"
            hovered = true;
            changeState()
            runner = caret.animate().width(0)
            runner.loop(1000,1,0)
        })
        textbox.mouseout(function(){
            widgetState = "idle"
            hovered = false;
            changeState()
            runner.finish()
        })

        SVG.on(window, 'keyup', (event) => {
            if (hovered){
                
                if (text.length() < 325){
                    if (event.key == " "){
                        text.text(text.text() + " ")
                        caret.x(text.length()+5 + 50)
                    }
                    else if (event.key == "Backspace"){
                        text.text(text.text().slice(0,-1))
                        caret.x(text.length() + 50)
                    }
                    else if ((event.which <= 90 && event.which >= 48)){
                        text.text(text.text() + event.key)
                        caret.x(text.length() + 50)
                    }
                }
                widgetState = "typing"
                changeState()
                if (typeEvent != null){
                    typeEvent(text.text())
                }
            }
            
        })
        
        return {
            move: function(x, y) {
                textbox.move(x, y);
            },
            ontyping: function(eventHandler){
                typeEvent = eventHandler
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            },
            getText: function(){
                return text.text()
            }
        }
    }

    var ProgressBar = function(){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var typeEvent = null
        var widgetState = "idle"
        var stateEvent = null

        var width = 300

        var bar = draw.group()
        var progressbar = bar.rect(width,15).stroke(strongCyan).fill(lightCyan)
        var progress = bar.rect(0,15).fill(darkCyan).move(0,1)

        var increment = 10

        bar.mouseover(function(){
            widgetState = "hover"
            changeState()
        })
        bar.mouseout(function(){
            widgetState = "idle"
            changeState()
        })
        
        return {
            move: function(x, y) {
                bar.move(x, y);
            },
            ontyping: function(eventHandler){
                typeEvent = eventHandler
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            },
            setWidth: function(x){
                width = x
                progressbar.width(width)
                
            },
            setIncrement: function(x){
                let k = Math.floor(x / 100 * width)
                increment = k
            },
            getIncrement: function(){
                return increment
            },
            increment: function(x){
                let k = Math.floor(x / 100 * width)
                if (k > width){
                    progress.width(width)
                }
                else{
                    progress.width(k)
                }
                widgetState = "incremented"
                changeState()
            }
        }
    }

    var ToggleButton = function(){
        var changeState = function(){
            if (stateEvent != null){
                stateEvent(widgetState)
            }
        }

        var clickEvent = null
        var widgetState = "idle"
        var stateEvent = null

        var position = "left";
        var x_pos = 0;
       
        var togglebtn = draw.group();
        var rect = togglebtn.rect(60,30).fill(lightCyan)
        rect.radius(15)
        var circle = togglebtn.circle(30).fill(darkCyan)

        var label = togglebtn.text("")
        label.move(70,0)
        
        togglebtn.mouseover(function(){
            widgetState = "hover"
            rect.attr('cursor', 'pointer')
            changeState()
        })
        togglebtn.mouseout(function(){
            widgetState = "idle"
            changeState()
        })
        togglebtn.mousedown(function(){
            widgetState = "pressed"
            changeState()
        })
        togglebtn.mouseup(function(event){
            if (widgetState == "pressed"){
                if (position == "left"){
                    rect.fill({color: strongCyan})
                    circle.x(x_pos+30)
                    position = "right"
                }
                else{
                    rect.fill({color: lightCyan})
                    circle.x(x_pos)
                    position = "left"
                }
                widgetState = "idle"
                changeState()
                if(clickEvent != null){
                    clickEvent(event)
                }
            } 
        })
        
        return {
            move: function(x, y) {
                togglebtn.move(x, y);
                x_pos = x
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            label: function(x){
                label.text(x)
            },
            state: function(eventHandler){
                stateEvent = eventHandler;
            }
        }
    }

return {Button, CheckBox, RadioButton, TextBox, ProgressBar, ToggleButton}
}());

export{MyToolkit}