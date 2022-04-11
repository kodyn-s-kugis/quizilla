const {SlashCommandBuilder, channelMention} = require("@discordjs/builders");
const gameStartUp = require("../services/startup.js");

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
            subcommand
                .setName("close")
                .setDescription("Close your trivia game!")
        ),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === "create") {
            let difficulty = interaction.options.getString('difficulty');
            await interaction.reply(
                `${interaction.user.username}, we are creating your trivia game in ${difficulty} difficulty!`,
            ).then(
                interaction.followUp(gameStartUp())
            );


        } else if (interaction.options.getSubcommand() === "close") {
            await interaction.reply(
                `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

                // Need a function that resets the game
            );
        }
    },
};
