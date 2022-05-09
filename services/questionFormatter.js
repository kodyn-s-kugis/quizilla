const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js");

module.exports = function questionFormatter({
  question,
  answers: [optA, optB, optC, optD],
}) {
  const components = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId(`${optA}`)
        .setLabel("A")
        .setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`${optB}`)
        .setLabel("B")
        .setStyle("DANGER")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`${optC}`)
        .setLabel("C")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`${optD}`)
        .setLabel("D")
        .setStyle("SECONDARY")
    );

  const embed = new MessageEmbed().setColor("#0099ff").setTitle(`${question}`)
    .setDescription(`A: ${optA}
    B: ${optB}
    C: ${optC}
    D: ${optD}`);

  return {
    components: [components],
    embeds: [embed],
  };
};
