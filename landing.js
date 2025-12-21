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