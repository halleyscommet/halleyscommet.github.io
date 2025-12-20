const cName = document.getElementById("name");

let intervalId;
let lastDegree;
let degree;

cName.addEventListener("mouseenter", () => {
    const intervalDelay = 150;
    intervalId = setInterval(rotateName, intervalDelay);
});

cName.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    cName.style.transform = "rotate(0deg)";
});

function rotateName() {
    lastDegree = degree;
    degree = randomDegree(-7, 7);
    let val = Math.abs(degree - lastDegree);
    if (val < 7) {
        rotateName();
    } else {
        cName.style.transform = `rotate(${degree}deg)`;
    }
}

function randomDegree(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}