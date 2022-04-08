const { SlashCommandBuilder } = require("@discordjs/builders");
const questionsMC = require("../services/questionsMC");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("trivia")
    .setDescription("Manage your trivia games")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a trivia game!")
        .addStringOption((option) =>
          option
            .setName("difficulty")
            .setDescription("Set question difficulty")
            .setRequired(true)
            .addChoice("Easy", "easy")
            .addChoice("Medium", "medium")
            .addChoice("Hard", "hard")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("close").setDescription("Close your trivia game!")
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "create") {
      let difficulty = interaction.options.getString("difficulty");
      // Here goes all functionality, all the commands
      await interaction.reply(
        `${interaction.user.username}, we are creating your trivia game in ${difficulty} difficulty!`
      );
      await interaction.followUp(await questionsMC());
    } else if (interaction.options.getSubcommand() === "close") {
      await interaction.reply(
        `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

        // Need a function that resets the game
      );
    }
  },
};
