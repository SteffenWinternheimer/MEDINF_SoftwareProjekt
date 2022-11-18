let isBreathing = 0;
let maximumIterations = 3;
let currentIteration = 0;

function toggleBreathingExercise(){
    let movingCircle = document.getElementById("movingCircle");
    if(isBreathing == 0){
        console.log("Start breathing");
        movingCircle.classList.add("movingCircle");
        isBreathing = 1;
        breathIn();
    }
    else if(isBreathing == 1){
        reset();
    }
}

function breathIn() {
    if(isBreathing == 1){
        currentIteration++;
        let breathingText = document.getElementById("breathingText");
        let breathingCircle = document.getElementById("breathingCircle");
        breathingText.textContent = "Breath In";
        window.setInterval(breathOut, 6000);
    }
}
function breathOut() {
    if(currentIteration < maximumIterations && isBreathing == 1){
        let breathingText = document.getElementById("breathingText");
        breathingText.textContent = "Breath Out";
        window.setInterval(breathIn, 6000);
    }
    else{
        reset();
    }
}

function reset(){
    movingCircle.classList.remove("movingCircle");
    let breathingText = document.getElementById("breathingText");
    breathingText.textContent = "Start Exercise";
    isBreathing = 0; 
}