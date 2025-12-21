const cName = document.getElementById("name");
const fursonaModal = document.getElementById("fursona-modal");
const timeSpan = document.getElementById("time");

let open = false;
let isAnimating = false;


const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}

cName.addEventListener("click", (event) => {
    event.stopPropagation();
    if (open || isAnimating) return;
    fursonaModal.classList.add("is-open");
    open = true;

    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    timeSpan.innerText = formattedTime;
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