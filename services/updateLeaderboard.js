const { MessageEmbed } = require("discord.js");

module.exports = async function updateLeaderboard(interaction, game) {
  const channel = await interaction.guild.channels.fetch(
    `${game.channels.questions}`
  );

  const message = await channel.messages.fetch(`${game.messages.leaderboard}`);

  const players = game.players
    .sort((a, b) => b.points - a.points)
    .map((player) => `<@${player.id}>`)
    .join("\n");

  const playerPoints = game.players
    .sort((a, b) => b.points - a.points)
    .map((player) => `${player.points}`)
    .join("\n");

  const updatedEmbed = new MessageEmbed()
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

  await message.edit({
    embeds: [updatedEmbed],
  });
};
