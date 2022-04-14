const {SlashCommandBuilder, channelMention} = require("@discordjs/builders");
const mcquestions = require("../services/mcquestions.js");

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
                        .setName('theme')
                        .setDescription('Set theme for questions')
                        .setRequired(true)
                        .addChoice('History', 'history')
                        .addChoice('Geography', 'geography')
                        .addChoice('Science', 'science')
                        .addChoice('Music', 'music')
                )
                .addStringOption((option) =>
                    option
                        .setName('difficulty')
                        .setDescription('Set game difficulty.')
                        .setRequired(true)
                        .addChoice('Easy', 'easy')
                        .addChoice('Medium', 'medium')
                        .addChoice('Hard', 'hard')
                )
                .addStringOption((option) =>
                    option
                        .setName('mode')
                        .setDescription('Set game mode.')
                        .setRequired(true)
                        .addChoice('Solo', 'solo')
                        .addChoice('Team', 'team')
                )
        )

        .addSubcommand((subcommand) =>
            subcommand
                .setName("close")
                .setDescription("Close your trivia game!")
        ),

    async execute(interaction) {
        if (interaction.options.getSubcommand() === "create") {
            let theme = interaction.options.getString('theme');
            let difficulty = interaction.options.getString('difficulty');
            let mode = interaction.options.getString('mode');
            await interaction.reply(
                `${interaction.user.username}, we are creating your trivia game with a ${theme} theme in ${difficulty} difficulty, as ${mode} player game!`,
            );
            await interaction.followUp(mcquestions(theme, difficulty));


        } else if (interaction.options.getSubcommand() === "close") {
            await interaction.reply(
                `${interaction.user.username}, we are closing your trivia game, hope you had a good time!`

                // Need a function that resets the game
            );
        }
    }
    ,
}
;
