document.addEventListener("DOMContentLoaded", function(){
    const display = document.querySelector("#display")
    display.innerHTML = 0
    var value = ""

    function one(){
        value += 1
        display.innerHTML = value
        console.log(value);
    }
    function two(){
        value += 1
        display.innerHTML = value
    }
    function three(){
        value += 1
        display.innerHTML = value
    }
    function four(){
        value += 1
        display.innerHTML = value
    }
    function five(){
        value += 1
        display.innerHTML = value
    }
    function six(){
        value += 1
        display.innerHTML = value
    }
    function seven(){
        value += 1
        display.innerHTML = value
    }
    function eight(){
        value += 1
        display.innerHTML = value
    }
    function nine(){
        value += 1
        display.innerHTML = value
    }
    function zero(){
        if(value != ""){
            value += 0
        }else{
            value = ""
        }
        display.innerHTML = value
    }
})