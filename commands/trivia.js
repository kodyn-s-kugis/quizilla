const { SlashCommandBuilder } = require("@discordjs/builders");
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
            .addChoice("Geography", "geography")
            .addChoice("History", "history")
            .addChoice("Music, Arts and Film", "maf")
            .addChoice("Sport", "sport")
            .addChoice("Science", "science")
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
        .addIntegerOption((option) =>
          option
            .setName("rounds")
            .setDescription("Set the amount of rounds")
            .setRequired(true)
            .addChoice("5", 5)
            .addChoice("10", 10)
            .addChoice("15", 15)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("close").setDescription("Close your trivia game!")
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "create") {
      const theme = interaction.options.getString("theme");
      const difficulty = interaction.options.getString("difficulty");
      const rounds = interaction.options.getInteger("rounds");

      await initialise(interaction, theme, difficulty, rounds);
    } else if (interaction.options.getSubcommand() === "close") {
      await interaction.reply(
        `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

        // Need a function that resets the game
      );
    }
  },
};
