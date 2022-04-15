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
const timer = require('./timer');

module.exports = async function mcquestions(interaction, theme, difficulty) {
    console.log('MCQuestions have started.');

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

        /*let remainingTime = timeLimit;
        let timeLimit = 5000;
        let timerFunction = setInterval(function () {
            timeLimit -= 1000;
            remainingTime = timeLimit;
            console.log(timeLimit);

            if (timeLimit === 0) {
                clearInterval(timerFunction);
                remainingTime = 0;
            }
        }, 1000);*/


        /* while (timeRemaining >= 0) {
             let msg = await interaction.channel.send(timeRemaining);
             msg.edit(timeRemaining);
             const timeLeftDisplay = new MessageEmbed()
                 .setColor('RED')
                 .setTitle(`$(timeRemaining)seconds left.`)

             await interaction.channel.send({
                 embeds: [timeLeftDisplay],
             })
         }*/


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
        });

        collector.on('end', (collection) => {
            collection.forEach((click) => {
                var userID = click.user.id;
                var chosenAnswer = click.customId;
                console.log(`Chosen: ${chosenAnswer}, Correct: ${correct}`);
            })
        });
};