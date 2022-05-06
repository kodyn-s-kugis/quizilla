const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = async function questionHandler(
  interaction,
  gameData,
  theme,
  difficulty
) {};

function questionChooser(theme, difficulty, index) {}

function questionSender() {
  const components = new MessageActionRow()
    .addComponents(
      new MessageButton().setCustomId("queue").setLabel("A").setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton()
        .setCustomId("unqueue")
        .setLabel("B")
        .setStyle("DANGER")
    )
    .addComponents(
      new MessageButton().setCustomId("queue").setLabel("C").setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId("unqueue")
        .setLabel("D")
        .setStyle("SECONDARY")
    );

  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Trivia Game`)
    .setDescription(`Created by ${interaction.user.tag}`)
    .addFields(
      { name: `Queued Players`, value: `Empty` },
      {
        name: "Tips & Tricks",
        value:
          "```When the game is about to begin, keep an eye out for the Questions channel!```",
      }
    );
}
