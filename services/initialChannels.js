const game = require("./data/gameData");

module.exports = async function setupChannels(interaction) {
  interaction.guild.channels
    .create("Trivia Game", {
      type: "GUILD_CATEGORY",
    })
    .then((category) => {
      game.channels.triviaGame = category.id;
      console.log(game.channels.triviaGame);

      interaction.guild.channels
        .create("sign-up", {
          type: "GUILD_TEXT",
          parent: category,
        })
        .then((channel) => {
          game.channels.signUp = channel.id;
          console.log(game.channels.signUp);
        });
      interaction.guild.channels
        .create("Lounge - 1", {
          type: "GUILD_VOICE",
          parent: category,
        })
        .then((channel) => {
          game.channels.lounge = channel.id;
          console.log(game.channels.lounge);
        });
    });
};
