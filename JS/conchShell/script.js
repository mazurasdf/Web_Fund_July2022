var question = document.querySelector("#question");
var conchImg = document.querySelector("#conchImg");

function startQuestion(){
    var has_numbers = false;
    for(var i = 0; i < question.value.length; i++){
        if(question.value[i] >= "0" && question.value[i] <= "9"){
            has_numbers = true;
        }
    }
    if(question.value.length <= 5 || has_numbers){
        alert("You must write something in the input! And no numbers!!");
    }
    else{
        conchImg.src = "img/conchAnimated.gif";
        setTimeout(finishQuestion,4000);
    }
}

function finishQuestion(){
    // console.log("button clicked!");
    var answers = [
        "no",
        "yes",
        "go to hell",
        "maybe",
        "good luck",
        "yikes",
        "as if",
        "try again"
    ];
    var fortune = document.querySelector("#fortune");
    var index = Math.floor(Math.random() * answers.length);
    fortune.innerText = answers[index];

    //clear the input
    question.value = "";
    question.focus();

    conchImg.src = "img/conchStill.png";
}