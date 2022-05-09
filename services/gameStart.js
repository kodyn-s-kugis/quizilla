const { MessageEmbed } = require("discord.js");
const questionHandler = require("./questionHandler");

module.exports = async function gameStart(
  interaction,
  gameData,
  theme,
  difficulty
) {
  let game = gameData;

  // Clean up sign-up channel
  await cleanUpSignUp(interaction, game);

  // Create question channel
  game.channels.questions = await createQuestionsChannel(interaction, game);

  // Create & send leaderboard
  game.messages.leaderboard = await createLeaderboard(interaction, game);

  // Send questions to channel
  await questionHandler(interaction, game, theme, difficulty);
};

async function cleanUpSignUp(interaction, game) {
  const signUpChannel = await interaction.guild.channels.fetch(
    `${game.channels.signUp}`
  );

  await signUpChannel.delete();
}

async function createQuestionsChannel(interaction, game) {
  const categoryChannel = await interaction.guild.channels.fetch(
    `${game.channels.category}`
  );

  const questions = await interaction.guild.channels.create("questions", {
    type: "GUILD_TEXT",
    parent: categoryChannel,
  });

  return questions.id;
}

async function createLeaderboard(interaction, game) {
  const channel = await interaction.guild.channels.fetch(
    `${game.channels.questions}`
  );

  const players = game.players.map((player) => `<@${player.id}>`).join("\n");

  const playerPoints = game.players
    .map((player) => `${player.points}`)
    .join("\n");

  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Leaderboard`)
    .setDescription(`Started by ${interaction.user.tag}`)
    .addFields(
      { name: `Players`, value: `${players}`, inline: true },
      {
        name: "Points",
        value: `${playerPoints}`,
        inline: true,
      }
    );

  const message = await channel.send({
    embeds: [embed],
  });

  message.pin();

  return message.id;
}
