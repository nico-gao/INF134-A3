// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var cyan = "#aef2eb";
    var darkCyan = "#9cd9d3"
    var lightCyan = "#d3f0ed"
    var strongCyan = "#89f0e5"
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
        var rect = button.rect(100,60).fill(cyan)
        var label = button.text("")
        label.move(10,10)
        
        button.mouseover(function(){
            rect.fill({ color: darkCyan})
            widgetState = "mouseover"
            changeState()
        })
        button.mouseout(function(){
            rect.fill({ color: cyan})
            widgetState = "mouseout"
            changeState()
        })
        button.mousedown(function(){
            rect.fill({ color: strongCyan})
            widgetState = "mousedown"
            changeState()
        })
        button.mouseup(function(event){
            rect.fill({ color: cyan})
            widgetState = "mouseup"
            changeState()
            if (clickEvent != null){
                clickEvent(event)
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
            widgetState = "mouseover"
            rect.attr('cursor', 'pointer')
            changeState()
        })
        checkbox.mouseout(function(){
            widgetState = "mouseout"
            changeState()
        })
        checkbox.mousedown(function(){
            widgetState = "mousedown"
            changeState()
        })
        checkbox.mouseup(function(event){
            if (!checked){
                rect.fill({ color: strongCyan})
                checked = true;
                widgetState = "mouseup-checked"
                checkmark.text("\u2713")
            }
            else{
                rect.fill({ color: lightCyan})
                checked = false;
                widgetState = "mouseup-unchecked"
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
                stateEvent(widgetState, btnNumber)
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
        }
        
        radiobtn.click(function(event){
            console.log(event)
            if (event.target.tagName == "circle"){
                radiobtn.each(function(i, child){
                    if (this.type == "circle"){
                        let x = Math.floor(i/2)
                        if (this.node.cy == event.target.cy){
                            btnArray[x] = 1
                            this.fill({color: strongCyan})
                            btnNumber = x + 1
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

return {Button, CheckBox, RadioButton}
}());

export{MyToolkit}