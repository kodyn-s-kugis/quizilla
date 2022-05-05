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
    time: 1000 * 120,
  });

  collector.on("collect", (i) => {
    if (i.customId === "queue") {
      // if no user has queued
      if (game.players.length < 1) {
        queueButtonHandler(i.user.id);

        i.reply({ content: `You've queued to play Trivia`, ephemeral: true });
      } else if (game.players.find((player) => player?.id !== i.user.id)) {
        queueButtonHandler(i.user.id);

        i.reply({ content: `You've queued to play Trivia`, ephemeral: true });
      } else {
        i.reply({
          content: `You've already queued to play Trivia`,
          ephemeral: true,
        });
      }
    }
    if (i.customId === "unqueue") {
      // if user hasn't queued, but tries to unqueue
      i.reply({ content: `You've unqueued from Trivia`, ephemeral: true });
    }
  });

  collector.on("end", (collected) =>
    console.log(`Collected ${collected.size} items`)
  );

  async function queueButtonHandler(userID) {
    game.players.push({ id: userID, points: 0 });
    console.log(game.players);

    await updateSignUpEmbed();
  }

  function unqueueButtonHandler(userID) {}

  async function updateSignUpEmbed() {
    const queuedPlayers = game.players
      .map((player) => `<@${player.id}>`)
      .join("\n");
    console.log(queuedPlayers);

    const upatedEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`Trivia Game`)
      .setDescription(`Created by ${interaction.user.tag}`)
      .addFields({ name: `Queued Players`, value: `${queuedPlayers}` });

    await message.edit({
      embeds: [upatedEmbed],
    });
  }
};
