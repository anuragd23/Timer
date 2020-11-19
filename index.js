const durationInput = document.querySelector('#duration');
const  startButton = document.querySelector('#start');
const  pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('The timer started');
    },
    onTick() {
        console.log('The timer is ticking down');
    },
    onComplete() {
        console.log('The timer has completed');
    }
});