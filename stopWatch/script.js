const timer = document.querySelector(".time"),
    startT = document.querySelector(".start"),
    pauseT = document.querySelector(".pause"),
    resetT = document.querySelector(".reset");
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0],
    t = null;

startT.addEventListener("click", startTimer);
pauseT.addEventListener("click", pauseTimer);
resetT.addEventListener("click", resetTimer);

function startTimer() {
    if(t !== null) {
        clearInterval(t);
    }
    t = setInterval(displayTime, 10);
};

function pauseTimer() {
    clearInterval(t);

}

function resetTimer() {
    clearInterval(t);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
    timer.innerHTML = "00 : 00: 00 : 000";
}

// Display Time
function displayTime() {
    milliseconds += 10;

    if(milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
            if(minute === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
        m = minutes < 10 ? "0" + minutes : minutes;
        s = seconds < 10 ? "0" + seconds : seconds;
        ms = milliseconds < 10 ? "00" + milliseconds : milliseconds< 100 ? "0" + milliseconds : milliseconds;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
};