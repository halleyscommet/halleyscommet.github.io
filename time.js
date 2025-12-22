const cNameTime = document.getElementById("name");
const timeSpans1 = document.getElementsByClassName("time1");
const timeSpans2 = document.getElementsByClassName("time2");

const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}

window.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    for (let i = 0; i < timeSpans1.length; i++) {
        const span = timeSpans1[i];
        span.innerText = formattedTime;
    }
});

cNameTime.addEventListener("click", () => {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    for (let i = 0; i < timeSpans2.length; i++) {
        const span = timeSpans2[i];
        span.innerText = formattedTime;
    }
});