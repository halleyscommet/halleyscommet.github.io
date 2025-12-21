// const cName = document.getElementById("name");

// let intervalId;
// let lastDegree;
// let degree;

// let textRotate = 10;

// cName.addEventListener("mouseenter", () => {
//     const intervalDelay = 150;
//     intervalId = setInterval(rotateName, intervalDelay);
// });

// cName.addEventListener("mouseleave", () => {
//     clearInterval(intervalId);
//     cName.style.transform = "rotate(0deg)";
// });

// function rotateName() {
//     lastDegree = degree;
//     degree = randomDegree(-textRotate, textRotate);
//     let val = Math.abs(degree - lastDegree);
//     if (val < textRotate) {
//         rotateName();
//     } else {
//         cName.style.transform = `rotate(${degree}deg)`;
//     }
// }

// function randomDegree(min, max) {
//     return Math.floor(Math.random() * ((max + 1) - min) + min);
// }

const cName = document.getElementById("name");
const fursonaModal = document.getElementById("fursona-modal");

let open = false;
let isAnimating = false;

cName.addEventListener("click", (event) => {
    event.stopPropagation();
    if (open || isAnimating) return;
    fursonaModal.classList.add("is-open");
    open = true;
});

fursonaModal.addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", () => {
    if (!open || isAnimating) return;
    isAnimating = true;
    fursonaModal.classList.remove("is-open");
    fursonaModal.classList.add("is-closing");
});

fursonaModal.addEventListener("animationend", (event) => {
    if (event.animationName !== "popout") return;
    fursonaModal.classList.remove("is-closing");
    open = false;
    isAnimating = false;
});