const initialChannels = require("./initialChannels");
const playerSignUp = require("./playerSignUp");

module.exports = async function initialise(interaction) {
  // Create Category & Channels
  const game = await initialChannels(interaction);

  // Player Sign-up Message
  await playerSignUp(interaction, game);
};
