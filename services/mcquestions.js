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
const {time} = require("@discordjs/builders");

async function askQuestion(interaction, theme, difficulty) {

    return new Promise(async (resolve, reject) => {


        /*
        * When questions are finished, the following error occurs:
        * DiscordAPIError: Unknown interaction
          in trivia.js 58:13
        */

        console.log('MCQuestions have started.');

        // Define two arrays that hold all theme and difficulty values for random selection
        let themes = ['history', 'geography', 'science', 'maf', 'sport'];
        let difficulties = ['easy', 'medium', 'hard'];
        let randomIndex1;
        let randomIndex2;

        // If the module receives either random for theme or random for difficulty, or both, theme and difficulty will
        // be picked randomly from the above arrays. Otherwise, the passed in values are used.
        if (theme === 'random') {
            randomIndex1 = random(0, 5);
            theme = themes[randomIndex1];
        } else if (difficulty === 'random') {
            randomIndex2 = random(0, 3);
            difficulty = difficulties[randomIndex2];
        }

        // Declaring all necessary variables
        let timeLimit = 30;
        let timerResult;
        let chosenAnswer;
        let randomIndex = random(0, 15);
        let newQuestion;
        let newAnswers = [];
        let newCorrect;
        let points = questions.array.theme[0][theme][difficulty].points;
        let pointsCollected;
        let pointsCollector = {};


        // Assign values from questions object to local variables
        let {
            question,
            answers,
            correct,
            askedBefore
        } = questions.array.theme[0][theme][difficulty].questions[randomIndex];


        // Each question has an askedBefore attribute to avoid double questions. Here, the program checks if this attribute
        // has been set to true. If this is the case, a new question will be selected via the random index.
        if (askedBefore === true) {
            randomIndex = random(0, 15);
            let {
                question,
                answers,
                correct
            } = questions.array.theme[0][theme][difficulty].questions[randomIndex];
            newQuestion = question;
            newAnswers = answers;
            newCorrect = correct;
        } else {
            newQuestion = question;
            newAnswers = answers;
            newCorrect = correct;
        }


        // Create buttons with A, B, C, D answer options and assign the values from the newAnswers array to each button's
        // custom ID attribute. This way, it is possible to check if the chosen answer was correct.
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(newAnswers[0])
                    .setLabel('A')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(newAnswers[1])
                    .setLabel('B')
                    .setStyle('DANGER')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(newAnswers[2])
                    .setLabel('C')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(newAnswers[3])
                    .setLabel('D')
                    .setStyle('SECONDARY')
            )

        // Create embed with question and answers display
        const questionDisplay = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${newQuestion}`)
            .setDescription(`A: ${newAnswers[0]}
                         B: ${newAnswers[1]}
                         C: ${newAnswers[2]}
                         D: ${newAnswers[3]}`);
        console.log('Embed created.');


        // Display the embed and buttons to user
        await interaction.channel.send({
            embeds: [questionDisplay],
            components: [row],
        })

        // End display part -------------------------------------------------------------------------------------------

        const filter = (btnInt) => {
            return interaction.user.id === btnInt.user.id;
        };

        // Create collector to collect button input with only one attempt and 30 sec wait.
        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000 * 30,
        });

        collector.on('collect', (ButtonInteraction) => {
                if (ButtonInteraction.customId === newCorrect) {
                    ButtonInteraction.reply({
                        content: `You've chosen ${ButtonInteraction.customId}, that is correct, ${points} points to you!`,
                    })
                } else {
                    ButtonInteraction.reply({
                        content: `You've chosen ${ButtonInteraction.customId}, sorry, you're wrong, no points!\nThe correct answer is ${newCorrect}`,
                    })
                }
            }
        );

        collector.on('end', (collection) => {

            collection.forEach((click) => {
                let userID = click.user.id;
                chosenAnswer = click.customId;


                pointsCollected += points;
                pointsCollector.userid = userID;
                pointsCollector.pointsQuantity = pointsCollected;
                //pointsPerUser.push(pointsCollector);

                console.log(`Chosen: ${chosenAnswer}, Correct: ${newCorrect}, by user: ${userID}`);
                timeLimit = -2;
            })

        });

        // Call timer function
        timerResult = timerFunction();

        // Definition of the timer function that displays the remaining time for answering the question to the user.
        async function timerFunction() {
            let timerFinished = false;
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
                            timerFinished = true;
                            await checkTimerFinished(timerFinished);
                            console.log('Time limit reached.');
                        }

                        // So that there is a difference between time running out and ending the timer when the user chooses
                        // an answer, the button collector will set the value for timeLimit to -5, which will be checked here.
                        // In this case, the user does not get any message as the question has been answered.
                        if (timeLimit === -5) {
                            timer.edit('You\'ve answered the question.');
                            clearInterval(countDown);
                            timerFinished = true;
                            await checkTimerFinished(timerFinished);
                            console.log('Question answered.');
                        }

                        // Here, the timerLimit variable is decreased by one every round the setInterval function runs.
                        timeLimit -= 1;
                        console.log(timeLimit);

                    }, 1000);
                }
            );
        }


        // Checking for timer to be finished to return either resolved or reject for Promise.
        async function checkTimerFinished(timerResult) {

            // When the timer finishes by either an answered question, or because the time is up, the timerResult will
            // be true and a promise resolve is returned from the timer function. Otherwise, a promise reject will be
            // returned. This promise result is then used to either carry on with the questions, or catch an error.
            if (timerResult === true) {
                resolve('The question has been either answered or the time ran out.')
            } else if (timerResult === false) {
                reject('Something did not go to plan');
            }
        }

        for (let key in pointsCollector) {
            console.log(key + " => " + pointsCollector[key]);
        }


        console.log(askedBefore);
        questions.modifyAskedBefore(true, theme, difficulty, randomIndex);
        let answeredBefore = questions.array.theme[0][theme][difficulty].questions[randomIndex].askedBefore;
        console.log(answeredBefore);
        //console.log(questions.array.theme[0][theme][difficulty].questions.valueOf());
    });
}

module.exports = async function mcQuestions(interaction, theme, difficulty) {


    await askQuestion(interaction, theme, difficulty).then(async () => {
        console.log('First question asked.');
        await askQuestion(interaction, theme, difficulty)
    })/*.then(async () => {
        console.log('Second question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Third question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Fourth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Fifth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Sixth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Seventh question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Eighth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Ninth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Tenth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Eleventh question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Twelfth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Thirteenth question asked.');
        await askQuestion(interaction, theme, difficulty);
    }).then(async () => {
        console.log('Fourteenth question asked.');
        await askQuestion(interaction, theme, difficulty);
    })*/.then(async () => {
        console.log('End of game.');
        await interaction.channel.send('That\'s it! 15 questions asked.');
    }).catch(async (message) => {
        await interaction.channel.send(message);
        console.log(message);
    });

    return interaction;
};