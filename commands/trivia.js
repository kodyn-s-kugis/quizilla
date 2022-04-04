const { SlashCommandBuilder } = require("@discordjs/builders");
const questionsMC = require("../services/questionsMC");

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
      await interaction.reply(
        `${interaction.user.username}, we are creating your trivia game now!`
      );
      await interaction.followUp(await questionsMC());
    } else if (interaction.options.getSubcommand() === "close") {
      await interaction.reply(
        `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`
      );
    }
  },
};
