const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");
const mcquestions = require("../data/questions.js");
const questions2 = require('./data/questionsData.js');
const random = require("../utils/randomNum.js");

module.exports = function questionsMC(theme, difficulty) {

  let questionTheme = theme;
  let questionDifficulty = difficulty;

  //console.log(mcquestions.theme[0][questionTheme][questionDifficulty].questions[1], questionTheme, questionDifficulty);
  console.log(mcquestions.theme[0]['history']);
  console.log(mcquestions.theme[0]['geography']);
  console.log(mcquestions.theme[0]['science']);

  let { question, answers, correct, askedBefore } = mcquestions.theme[0][questionTheme][questionDifficulty].questions[random(0,1)];

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
          .setCustomId("a")
          .setLabel("A")
          .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
          .setCustomId("b")
          .setLabel("B")
          .setStyle("SECONDARY")
    )
    .addComponents(
      new MessageButton()
          .setCustomId("c")
          .setLabel("C")
          .setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton()
          .setCustomId("d")
          .setLabel("D")
          .setStyle("DANGER")
    );

  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`${question}`)
      .setDescription(`A: ${answers[0]}
                       B: ${answers[1]}
                       C: ${answers[2]}
                       D: ${answers[3]}`);


  return {
    components: [row],
    embeds: [exampleEmbed],
  };
};
