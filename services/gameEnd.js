const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const blankGameData = require("./data/gameData");

module.exports = async function gameEnd(interaction, gameData) {
  let game = gameData;

  const categoryChannel = await interaction.guild.channels.fetch(
    `${game.channels.category}`
  );
  const questionsChannel = await interaction.guild.channels.fetch(
    `${game.channels.questions}`
  );
  const loungeChannel = await interaction.guild.channels.fetch(
    `${game.channels.lounge}`
  );

  const message = await questionsChannel.send(gameEndMessage(game));

  const collector = message.createMessageComponentCollector({
    componentType: "BUTTON",
    time: 1000 * 30,
  });

  collector.on("collect", async (i) => {
    i.reply(`Ending game...`);

    collector.stop();

    game = blankGameData;
  });

  collector.on("end", async () => {
    categoryChannel.delete();
    questionsChannel.delete();
    loungeChannel.delete();

    game = blankGameData;
  });

  function gameEndMessage(game) {
    const player = game.players.sort((a, b) => b.points - a.points);

    const components = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId(`gameEndMessage`)
        .setLabel("End")
        .setStyle("DANGER")
    );

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`The game has finished, thanks for playing!`)
      .setDescription(
        `The winner of trivia is <@${player[0].id}> with a total of ${player[0].points} points.`
      )
      .addFields({
        name: `Tips & Tricks`,
        value:
          "```Feel free to finish the game by clicking End, otherwise it will close automatically in 5 minutes.```",
      });

    return {
      components: [components],
      embeds: [embed],
    };
  }
};
