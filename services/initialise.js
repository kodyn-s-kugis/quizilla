const gameData = require("./data/gameData");
const initialChannels = require("./initialChannels");
const playerSignUp = require("./playerSignUp");

module.exports = async function initialise(
  interaction,
  theme,
  difficulty,
  rounds
) {
  let game = gameData;
  console.log(game);

  // Create Category & Sign-up Channel
  game = await initialChannels(interaction, game);

  // Message Trivia Game Creator
  interaction.reply({
    content: `Creating your Trivia game with the theme of ${theme} and difficulty set to ${difficulty}. Head on over to <#${game.channels.signUp}>.`,
    ephemeral: true,
  });

  // Player Sign-up Message
  game = await playerSignUp(interaction, game, theme, difficulty, rounds);
};
