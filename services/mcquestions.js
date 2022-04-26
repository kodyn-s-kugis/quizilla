/*
The mcquestions.js file receives the theme and difficulty value from trivia.js and utilises
those to pick the corresponding sections from the questions object located in questions.js.

It then creates the four answer buttons and the embed to display the question along with the
four possible answers to the user.

After that, it utilises a collector to receive the pressed button value from the user and can
store this value or continue working with it.
*/

const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");
const questions = require("../data/questions.js");
const random = require("../utils/randomNum");
let timer = require('./timer');

module.exports = async function mcquestions(interaction, theme, difficulty) {


    console.log('MCQuestions have started.');

    // Set value for time limit.
    let timeLimit = 30;

    // Assign values from questions object to local variables
    let {question, answers, correct, points} = questions.theme[0][theme][difficulty].questions[random(0, 1)];

    // Create buttons with A, B, C, D answer options
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(answers[0])
                .setLabel('A')
                .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[1])
                .setLabel('B')
                .setStyle('DANGER')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[2])
                .setLabel('C')
                .setStyle('PRIMARY')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[3])
                .setLabel('D')
                .setStyle('SECONDARY')
        )
    console.log('Buttons created.');

    // Create embed with question and answers display
    const questionDisplay = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`${question}`)
        .setDescription(`A: ${answers[0]}
                         B: ${answers[1]}
                         C: ${answers[2]}
                         D: ${answers[3]}`);
    console.log('Embed created.');


    // Display the embed and buttons to user
    await interaction.channel.send({
        embeds: [questionDisplay],
        components: [row],
    })


    const filter = (btnInt) => {
        return interaction.user.id === btnInt.user.id;
    };

    // Create collector to collect button input with only one attempt and 30 sec wait.
    const collector = interaction.channel.createMessageComponentCollector({
        filter,
        max: 1,
        time: 1000 * 30,
    });

    console.log('Collector created.');
    collector.on('collect', (ButtonInteraction) => {
            ButtonInteraction.reply({
                content: `You've chosen ${ButtonInteraction.customId}`,
            })
        }
    )
    ;

    collector.on('end', (collection) => {
        collection.forEach((click) => {
            let userID = click.user.id;
            let chosenAnswer = click.customId;
            console.log(`Chosen: ${chosenAnswer}, Correct: ${correct}`);
            timeLimit = -5;
        })
    });

    // Call timer function
    await timerFunction();

    // Definition of the timer function that displays the remaining time for answering the question to the user.
    async function timerFunction() {

        // Sending the initial time remaining to the channel the function is called from. Then, a setInterval function
        // is called and updates the remaining time as needed.
        await interaction.channel.send(`Time remaining: ${timeLimit} seconds.`).then(timer => {
                let countDown = setInterval(async function () {

                    // At time intervals 20, 15, 10 seconds, the message will be updated. The last 5 seconds will be
                    // count down in 1 second intervals.
                    if (timeLimit === 20 ||
                        timeLimit === 10 ||
                        timeLimit === 5 ||
                        timeLimit === 4 ||
                        timeLimit === 3 ||
                        timeLimit === 2 ||
                        timeLimit === 1) {
                        timer.edit(`Time remaining: ${timeLimit} seconds.`);
                    }
                    // If timer reaches 0s, the function stops and the user is notified of time being up.
                    if (timeLimit === 0) {
                        timer.edit('Sorry, your time is up!');
                        clearInterval(countDown);
                        console.log('Time limit reached.');
                    }

                    // So that there is a difference between time running out and ending the timer when the user chooses
                    // an answer, the button collector will set the value for timeLimit to -5, which will be checked here.
                    // In this case, the user does not get any message as the question has been answered.
                    if (timeLimit === -5) {
                        timer.edit('You\'ve answered the question.');
                        clearInterval(countDown);
                        console.log('Question answered.');
                    }

                    // Here, the timerLimit variable is decreased by one every round the setInterval function runs.
                    timeLimit -= 1;
                    console.log(timeLimit);
                }, 1000);
            }
        );


    };

    // At time points 20s, 15s, 10s, 5s time will be displayed as well.


};