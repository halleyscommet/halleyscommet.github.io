const cName = document.getElementById("name");
const fursonaModal = document.getElementById("fursona-modal");
// const timeSpans1 = document.getElementsByClassName("time1");
// const timeSpans2 = document.getElementsByClassName("time2");
const aboutMe = document.getElementById("about-me");
const close = document.getElementById("close");

let open = false;
let isAnimating = false;

// const options = {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false
// }

const birthday = new Date(2009, 5, 24);
const age = getAge(birthday);

const info = {
    user: "haley",
    age: age,
    work: "mentor@tcsPlymouth",
    learning: "gamedev,C",
    theme: "dark",
    editor: "nvim"
}

cName.addEventListener("click", (event) => {
    event.stopPropagation();
    if (open || isAnimating) return;
    fursonaModal.classList.add("is-open");
    open = true;

    moveBackground();

    aboutMe.innerHTML = "";
    let iter = 0;
    Object.entries(info).forEach(([key, value]) => {
        aboutMe.innerHTML += `<p><span class="keyword">${key.toUpperCase()}</span>=${value}</p>`;
        iter++;
        if (iter % 2 == 0 && iter != 6) {
            aboutMe.innerHTML += "<br>";
        }
    });
});

fursonaModal.addEventListener("click", (event) => {
    event.stopPropagation();
});

close.addEventListener("click", () => {
    if (!open || isAnimating) return;
    isAnimating = true;
    fursonaModal.classList.remove("is-open");
    fursonaModal.classList.add("is-closing");
})

window.addEventListener("click", () => {
    if (!open || isAnimating) return;
    isAnimating = true;
    fursonaModal.classList.remove("is-open");
    fursonaModal.classList.add("is-closing");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();

        if (!open || isAnimating) return;
        isAnimating = true;
        fursonaModal.classList.remove("is-open");
        fursonaModal.classList.add("is-closing");
    }
});

fursonaModal.addEventListener("animationend", (event) => {
    if (event.animationName !== "popout") return;
    fursonaModal.classList.remove("is-closing");
    open = false;
    isAnimating = false;
});

// ai generated function please dont judge me
function getAge(birthDate, currentDate = new Date()) {
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
        currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) age--;

    return age;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveBackground() {
    fursonaModal.style.backgroundPosition = `${getRandomInt(1, 100)}% ${getRandomInt(1, 100)}%`
}