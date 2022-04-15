/*

Countdown Timer for user input during trivia questions display

 */

module.exports = function countDownTimer(timerLimit) {
    let timeLimit = timerLimit;
    let timerFunction = setInterval(function () {
        timeLimit -= 1000;

        console.log(timeLimit);

        if (timeLimit == 0) {
            clearInterval(timerFunction);
        }
    }, 1000);
}