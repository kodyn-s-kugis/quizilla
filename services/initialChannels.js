const game = require("./data/gameData");

module.exports = async function setupChannels(interaction) {
  const category = await interaction.guild.channels.create("Trivia Game", {
    type: "GUILD_CATEGORY",
  });

  const signUp = await interaction.guild.channels.create("sign-up", {
    type: "GUILD_TEXT",
    parent: category,
  });

  const lounge = await interaction.guild.channels.create("Lounge - 1", {
    type: "GUILD_VOICE",
    parent: category,
  });

  game.channels.category = category.id;
  game.channels.signUp = signUp.id;
  game.channels.lounge = lounge.id;

  return game;
};
