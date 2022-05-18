const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const blankGameData = require("./data/gameData");
const channelCleanUp = require("./channelCleanUp");
const gameStart = require("./gameStart");

module.exports = async function playerSignUp(
  interaction,
  gameData,
  theme,
  difficulty,
  rounds
) {
  let game = gameData;

  const channel = await interaction.guild.channels.fetch(
    `${game.channels.signUp}`
  );

  // Send sign up embed to sign up channel
  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Trivia Game`)
    .setDescription(
      `The game is setup with a **${theme}** theme and question difficulty of **${difficulty}**. Just to keep in mind you will be committing to **${rounds}** rounds of trivia.`
    )
    .addFields(
      { name: `Queued Players`, value: `Empty` },
      {
        name: "Tips & Tricks",
        value:
          "```When the game is about to begin, keep an eye out for the Questions channel!```",
      }
    );

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
    time: 1000 * 15,
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
      if (game.players.length < 1) {
        i.reply({ content: `You haven't queued for Trivia`, ephemeral: true });
      } else if (!game.players.find((player) => player?.id !== i.user.i)) {
        i.reply({ content: `You haven't queued for Trivia`, ephemeral: true });

        // if user has queued, but tries to unqueue
      } else {
        unqueueButtonHandler(i.user.id);
        i.reply({ content: `You've unqueued from Trivia`, ephemeral: true });
      }
    }
  });

  collector.on("end", () => {
    // if no one queues for the game
    if (game.players.length < 1) {
      channelCleanUp(interaction, game);

      interaction.followUp({
        content: `No one has queued for Trivia! Closing the game...`,
        ephemeral: true,
      });

      game = blankGameData;
      console.log(`---Final Game Object Here---`);
      console.log(game);
      console.log(`---Final Game Object Here---`);

      return game;
    }
    // if at least one player has queued for the game
    else {
      console.log(`---Final Game Object Here---`);
      console.log(game);
      console.log(`---Final Game Object Here---`);

      gameStart(interaction, game, theme, difficulty, rounds);
    }
  });

  async function queueButtonHandler(userID) {
    game.players.push({ id: userID, points: 0 });
    console.log(game.players);

    await updateSignUpEmbed();
  }

  async function unqueueButtonHandler(userID) {
    game.players = game.players.filter((player) => player.id !== userID);
    console.log(game.players);

    await updateSignUpEmbed();
  }

  async function updateSignUpEmbed() {
    const queuedPlayers = game.players
      .map((player) => `<@${player.id}>`)
      .join("\n");
    console.log(queuedPlayers);

    const upatedEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`Trivia Game`)
      .setDescription(
        `The game is setup with a **${theme}** theme and question difficulty of **${difficulty}**. Just to keep in mind you will be committing to **${rounds}** rounds of trivia.`
      )
      .addFields(
        {
          name: `Queued Players`,
          value: `${game.players.length < 1 ? "empty" : queuedPlayers}`,
        },
        {
          name: "Tips & Tricks",
          value:
            "```When the game is about to begin, keep an eye out for the Questions channel!```",
        }
      );

    await message.edit({
      embeds: [upatedEmbed],
    });
  }
};
