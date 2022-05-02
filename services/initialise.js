const initialChannels = require("./initialChannels");
const playerSignUp = require("./playerSignUp");

module.exports = async function initialise(interaction) {
  // Create Category & Channels
  await initialChannels(interaction);

  // Player Sign-up Message
  await playerSignUp(interaction);
};
