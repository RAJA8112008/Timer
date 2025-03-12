let timerInterval;
let totalSeconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function formatTime(seconds){
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateTimerDisplay(){


    timerDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            totalSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    totalSeconds = 0;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
