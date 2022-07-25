console.log("hey it's me, the javascript file here!");

var buttonCount = 0;
function printMessage(element){
    buttonCount++;
    // console.log("you clicked " + buttonCount + " times!");
    // console.log(element);
    element.innerText = "you clicked me " + buttonCount + " times!";
    // alert("you clicked the button!");
}

var otherCount = 0;
function otherButton(){
    otherCount++;
    var otherHeader = document.querySelector("#otherCount");
    otherHeader.innerText = "you clicked the other button" +  otherCount  + "times";
}

function mouseOverBox(){
    console.log("the mouse entered the box");
}

function mouseOutBox(){
    console.log("the mouse exited the box");
}

var count = 0;
function writeInBox(){
    count++;
    console.log("you typed " + count + " characters!");
}

function removeElement(element){
    element.remove();
}