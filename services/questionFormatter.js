const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js");

module.exports = function questionFormatter(
  difficulty,
  qNum,
  { question, answers: [optA, optB, optC, optD] }
) {
  let setEmbedColour, setPoints;

  switch (difficulty) {
    case "easy":
      setPoints = 10;
      setEmbedColour = "#06D6A0";
      break;
    case "medium":
      setPoints = 20;
      setEmbedColour = "#E5A93F";
      break;
    case "hard":
      setPoints = 30;
      setEmbedColour = "#E2436F";
      break;
  }

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

  const embed = new MessageEmbed()
    .setColor(`${setEmbedColour}`)
    .setTitle(`${qNum + 1}. ${question}`)
    .setDescription(
      `A: ${optA}
    B: ${optB}
    C: ${optC}
    D: ${optD}`
    )
    .addFields(
      {
        name: `Difficulty`,
        value: `${difficulty}`,
        inline: true,
      },
      {
        name: `Points`,
        value: `${setPoints}`,
        inline: true,
      },
      {
        name: `Timer`,
        value: "**30** seconds remaining...",
        inline: true,
      }
    );

  return {
    components: [components],
    embeds: [embed],
  };
};
