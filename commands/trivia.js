const {SlashCommandBuilder} = require("@discordjs/builders");
const MCQuestions = require('../services/mcquestions.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName("trivia")
      .setDescription("Manage your trivia games")
      .addSubcommand((subcommand) =>
          subcommand.setName("create").setDescription("Create a trivia game!")
      )
      .addSubcommand((subcommand) =>
          subcommand.setName("close").setDescription("Close your trivia game!")
      ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "create") {

      // Here goes all functionality, all the commands

      await interaction.reply(
          //`${interaction.user.username}, we are creating your trivia game now!`,
          await MCQuestions(interaction),
      );


    } else if (interaction.options.getSubcommand() === "close") {
      await interaction.reply(
          `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

          // Need a function that resets the game

      );
    }
  },
};