var questions = require('../data/questions');

function getRandomNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

module.exports = {
    category: 'Questions',
    description: 'Multiple Choice Questions',
    slash: true,
    testOnly: true,

    callback: ({interaction}) => {
        // Define array to hold answers
        let answer = [];

        // Variable that holds the question's answer letters
        const letters = ['A: ', 'B: ', 'C: ', 'D: '];

        // Declare variable to hold random number for questions
        let randomIndex = getRandomNumber(1, 3);

        // Create question object
        let {question, answers, correct} = questions.theme[0].history[randomIndex];

        for (let i = 0; i < answers.length; i++) {
            answer[i] = letters[i] + answers[i];
        }
        interaction.reply({
            content: `${question}\n 
            ${answer[0]}\n 
            ${answer[1]}\n 
            ${answer[2]}\n 
            ${answer[3]}`
        });
    }
}