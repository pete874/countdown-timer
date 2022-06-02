

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countdownDate = '30 May 2025'

function countdown() {
    const newCountdownDate = new Date(countdownDate);
    const currentDate = new Date();

    const totalSeconds = (newCountdownDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


    console.log(days, hours, minutes, seconds)
}

// call 1000ms = 1second refresh
countdown();

setInterval(countdown, 1000);