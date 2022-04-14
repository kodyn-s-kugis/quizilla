//var questions = require('../data/questions.js');
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");
const questions = require("../data/questions.js");
const random = require("../utils/randomNum");

function getRandomNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}


module.exports = function mcquestions(theme, difficulty) {
    console.log('MCQuestions have started.');

    let questionTheme = theme;
    let questionDifficulty = difficulty;

    let chosenAnswer = '';
    let totalPoints = 0;

    // Create question object
    let {
        question,
        answers,
        correct,
        points
    } = questions.theme[0][questionTheme][questionDifficulty].questions[random(0, 1)];

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

    const questionDisplay = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`${question}`)
        .setDescription(`A: ${answers[0]}
                         B: ${answers[1]}
                         C: ${answers[2]}
                         D: ${answers[3]}`);

    /* await interaction.reply({
         content: `${question}\n
              A: ${answers[0]}\n
              B: ${answers[1]}\n
              C: ${answers[2]}\n
              D: ${answers[3]}\n
              Choose your answer:\n`,
         components: [row],
     });

     const filter = (btnInt) => {
         return interaction.user.id === btnInt.user.id;
     };

     const collector = interaction.channel.createMessageComponentCollector({
         filter,
         max: 1,
         time: 1000 * 30,
     });

     collector.on('collect', (ButtonInteraction) => {
         ButtonInteraction.reply({
             content: `You've chosen ${ButtonInteraction.customId}`,
         })
     });

     collector.on('end', (collection) => {
         collection.forEach((click) => {
             let userID = click.user.id;
             chosenAnswer = click.customId;
             console.log(chosenAnswer, correct);
         })
     });*/

    console.log('Incorrect answer, no points awarded.');

    return {
        components: [row],
        embeds: [questionDisplay],
    };
};