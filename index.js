const display = document.getElementById('display')
function toggler(){
    let mode = true
    function power(){
        if(mode){
            display.textContent = 0
            document.forms['calc']['POWER'].value = 'OFF'
            mode = !mode
        }else{
            display.textContent = ''
            document.forms['calc']['POWER'].value = 'ON'
            mode = !mode
            expr = ''
        }
    }
    function isOn(){
        return !mode
    }
    return {power, isOn}
}
const {power, isOn} = toggler()

let expr = ""

function resset(){
    if(isOn()){
        expr = ""
        display.textContent = expr
    }
}
function one(){
    if(isOn()){
        expr += "1"
        display.textContent = expr
    }
}
function two(){
    if(isOn()){
        expr += "2"
        display.textContent = expr
    }
}
function three(){
    if(isOn()){
        expr += "3"
        display.textContent = expr
    }
}
function four(){
    if(isOn()){
        expr += "4"
        display.textContent = expr
    }
}
function five(){
    if(isOn()){
        expr += "5"
        display.textContent = expr
    }
}
function six(){
    if(isOn()){
        expr += "6"
        display.textContent = expr
    }
}
function seven(){
    if(isOn()){
        expr += "7"
        display.textContent = expr
    }
}
function eight(){
    if(isOn()){
        expr += "8"
        display.textContent = expr
    }
}
function nine(){
    if(isOn()){
        expr += "9"
        display.textContent = expr
    }
}
function zero(){
    if(isOn()){
        expr += "0"
        display.textContent = expr
    }
}

function add(){
    if(isOn()){
        expr += "+"
        display.textContent = expr
    }
}
function sub(){
    if(isOn()){
        expr += "-"
        display.textContent = expr
    }
}
function mul(){
    if(isOn()){
        expr += "*"
        display.textContent = expr
    }
}
function div(){
    if(isOn()){
        expr += "/"
        display.textContent = expr
    }
}

function evl(){
    if(isOn()){
        const result = eval(expr)
        display.textContent = result
        expr = ''
    }
}