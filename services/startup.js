const {MessageButton, MessageActionRow, MessageEmbed} = require('discord.js');
const MCQuestions = require('../services/questionsmc.js');
const Client = require('../commandHandler.js');
const singlePlayer = 'Solo';
const multiPlayer = 'Multi';

async function executeFile(file, args) {
    const fileName = require(file)
    if (!fileName) throw new Error("Invalid file")
    return fileName.execute(args);
}

module.exports = async function startUp(interaction) {

    // declare variable that holds the user selection
    let selectedGameMode = '';

    // New instance of command handler to load additional commands
    const client = Client();

    // Create buttons for user to select type of game
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(singlePlayer)
                .setLabel(`${singlePlayer} Player`)
                .setStyle('PRIMARY')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(multiPlayer)
                .setLabel(`${multiPlayer} Player`)
                .setStyle('PRIMARY')
        );

    // Create welcome message
    const startMessage = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome Players')
        .setDescription('Quizilla is a trivia game bot. We can play in single user mode or multiple user mode. Please select an option below.\n' +
            '(Multi Player will allow for 1 minute for players to join the game.)');

    // Send message and buttons to user channel to display
    await interaction.channel.send({
        embeds: [startMessage],
        components: [row],
    });

    // Set up collector to collect answer to embed
    const collector = interaction.channel.createMessageComponentCollector({
        max: 1,
        time: 1000 * 30
    });

    // Collect customId from button as user selection
    collector.on('collect', (ButtonInteraction) => {
        selectedGameMode = ButtonInteraction.customId;
        ButtonInteraction.reply({
                content: `You've selected ${selectedGameMode} Player mode.`,
            }
        )
    });

    collector.on('end', async collected => {
        console.log(`Collected: ${collected.size} items\nCollected type: ${selectedGameMode}`);
        if (selectedGameMode === 'Solo') {
            console.log('Single player selected.')

            // Code to call next command goes here.

        } else if (selectedGameMode === 'Multi') {
            console.log('Multi player selected.')

            // Code to call next command goes here.
        }
    });
}