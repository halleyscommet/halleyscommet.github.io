const cName = document.getElementById("name");
const fursonaModal = document.getElementById("fursona-modal");
const timeSpans = document.getElementsByClassName("time");
const aboutMe = document.getElementById("about-me");

let open = false;
let isAnimating = false;

const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}

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

    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    for (let i = 0; i < timeSpans.length; i++) {
        const span = timeSpans[i];
        span.innerText = formattedTime;
    }

    aboutMe.innerHTML = "";
    let iter = 0;
    Object.entries(info).forEach(([key, value]) => {
        aboutMe.innerHTML += `<p>${key.toUpperCase()}=${value}</p>`;
        iter++;
        if (iter % 2 == 0 && iter != 6) {
            aboutMe.innerHTML += "<br>";
        }
    });
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

function getAge(birthDate, currentDate = new Date()) {
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
        currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) age--;

    return age;
}