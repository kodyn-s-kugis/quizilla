const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Channel,
} = require("discord.js");
const questions = require("./data/questionsData.js");
const random = require("../utils/randomNum.js");

module.exports = function questionsMC() {
  let { question, answers, correct, askedBefore } =
    questions.themes[random(0, 0)].history[random(0, 1)];

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton().setCustomId("a").setLabel("A").setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton().setCustomId("b").setLabel("B").setStyle("SECONDARY")
    )
    .addComponents(
      new MessageButton().setCustomId("c").setLabel("C").setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton().setCustomId("d").setLabel("D").setStyle("DANGER")
    );

  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`${question}`).setDescription(`A: ${answers[0]}
    B: ${answers[1]}
    C: ${answers[2]}
    D: ${answers[3]}`);

  return {
    components: [row],
    embeds: [exampleEmbed],
  };
};
