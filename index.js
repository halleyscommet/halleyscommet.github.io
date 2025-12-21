const continueButton = document.getElementById("continue");

const intervalDelay = 100;
const rotateDegrees = 1.5;
const scaleAmount = 0.05;
const skewDegrees = 2;

let rotate;
let scale;
let skew1;
let skew2;

let intervalId;
continueButton.addEventListener("mouseenter", () => {
    intervalId = setInterval(adjust, intervalDelay);
});

continueButton.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    continueButton.style.transform = "rotate(0deg) scale(1) skew(0deg, 0deg)";
});

continueButton.addEventListener("click", () => {
    window.location.href = "landing.html";
})

function adjust() {
    rotate = randomDegree(-rotateDegrees, rotateDegrees);
    scale = 1 + randomDegree(-scaleAmount, scaleAmount);
    skew1 = randomDegree(-skewDegrees, skewDegrees);
    skew2 = randomDegree(-skewDegrees, skewDegrees);

    continueButton.style.transform =
        `rotate(${rotate}deg) scale(${scale}) skew(${skew1}deg, ${skew2}deg)`;
}

function randomDegree(min, max) {
    return Math.random() * (max - min) + min;
}