const { SlashCommandBuilder } = require("@discordjs/builders");
const questionsMC = require("../services/questionsMC");
const initialise = require("../services/initialise");

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
            .setName("theme")
            .setDescription("Set trivia theme")
            .setRequired(true)
            .addChoice("Science", "science")
            .addChoice("Geography", "geography")
            .addChoice("History", "history")
            .addChoice("Random", "random")
        )
        .addStringOption((option) =>
          option
            .setName("difficulty")
            .setDescription("Set question difficulty")
            .setRequired(true)
            .addChoice("Easy", "easy")
            .addChoice("Medium", "medium")
            .addChoice("Hard", "hard")
            .addChoice("Random", "random")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("close").setDescription("Close your trivia game!")
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "create") {
      let theme = interaction.options.getString("theme");
      let difficulty = interaction.options.getString("difficulty");

      await initialise(interaction, theme, difficulty);
    } else if (interaction.options.getSubcommand() === "close") {
      await interaction.reply(
        `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

        // Need a function that resets the game
      );
    }
  },
};
