const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = async function playerSignUp(interaction, gameData) {
  const game = gameData;

  const channel = await interaction.guild.channels.fetch(
    `${game.channels.signUp}`
  );

  // Send sign up embed to sign up channel
  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Trivia Game`)
    .setDescription(`Created by ${interaction.user.tag}`)
    .addFields({ name: `Queued Players`, value: `Empty` });

  const signUpComponents = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId("queue")
        .setLabel("Queue")
        .setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton()
        .setCustomId("unqueue")
        .setLabel("Unqueue")
        .setStyle("DANGER")
    );

  const message = await channel.send({
    components: [signUpComponents],
    embeds: [embed],
  });

  const collector = message.createMessageComponentCollector({
    componentType: "BUTTON",
    time: 1000 * 60,
  });

  collector.on("collect", (i) => {
    if (i.customId === "queue") {
      console.log("queue");
    }
    if (i.customId === "unqueue") {
      console.log("unqueue");
    }
  });

  collector.on("end", (collected) =>
    console.log(`Collected ${collected.size} items`)
  );

  async function queueButtonHandler() {}

  async function unqueueButtonHandler() {}
};
