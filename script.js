var allBoxes = document.querySelectorAll(".colorBox");
var target = document.querySelector("#target");
var tooltip = document.querySelector(".tooltip")
var resetBtn = document.querySelector("#reset")
var diffBtn = document.querySelector("#diff")
var difficulty = document.querySelector("#difficulty");
var diff = 6;

start();

resetBtn.addEventListener("click", function(){
    start();
});

diffBtn.addEventListener("click", function(){
    if(diff === 6){
        diff = 3;
        difficulty.textContent = "EASY";
        start();
    } else {
        diff = 6;
        difficulty.textContent = "HARD";
        start();
    }
});

function start(){
    rgbColors = generateColors();
    targetColor = rgbColors[Math.floor(Math.random() * diff)];
    newGame();
}

function newGame(){
    tooltip.classList.add("hidden");
    target.textContent = targetColor;
    for(var i = 0; i < allBoxes.length; i++){
        allBoxes[i].classList.add("hidden");
    }
    for(var i = 0; i < diff; i++){
        allBoxes[i].classList.remove("hidden");
        allBoxes[i].style.background = rgbColors[i];
        allBoxes[i].addEventListener("click", function(){
            tooltip.classList.remove("hidden");
            if(this.style.background === targetColor){
                tooltip.textContent = "Correct!";
                for(var i = 0; i < diff; i++){
                    allBoxes[i].style.background = targetColor;
                    allBoxes[i].classList.remove("hidden");
                }
            } else {
                this.classList.add("hidden");
                tooltip.textContent = "Try again!";
            }
        });
    }
}

function generateColors(){
    var colors = [];
    for(var i = 0; i < diff; i++){
        var r = Math.floor(Math.random() * 255 + 1);
        var g = Math.floor(Math.random() * 255 + 1);
        var b = Math.floor(Math.random() * 255 + 1);
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colors;
}