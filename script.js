const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const lapList = document.getElementById("lapList");

let milliseconds = 0;
let timer = null;
let lapCount = 0;

// Start Button
startBtn.addEventListener("click", function () {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        milliseconds++;

        let hrs = Math.floor(milliseconds / 360000);
        let mins = Math.floor((milliseconds % 360000) / 6000);
        let secs = Math.floor((milliseconds % 6000) / 100);
        let ms = milliseconds % 100;

        display.textContent =
            String(hrs).padStart(2, "0") + ":" +
            String(mins).padStart(2, "0") + ":" +
            String(secs).padStart(2, "0") + ":" +
            String(ms).padStart(2, "0");

    }, 10);

});

// Pause Button
pauseBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});

// Reset Button
resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    lapCount = 0;

    display.textContent = "00:00:00:00";

    lapList.innerHTML = "";

});

// Lap Button
lapBtn.addEventListener("click", function () {

    if (milliseconds === 0) {
        return;
    }

    lapCount++;

    const lapItem = document.createElement("li");

    lapItem.textContent =
        "Lap " + lapCount + " - " + display.textContent;

    lapList.appendChild(lapItem);

});