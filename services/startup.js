const {MessageButton, MessageActionRow, MessageEmbed, Guild} = require('discord.js');
const MCQuestions = require('../services/questionsmc.js');
const singlePlayer = 'Solo';
const multiPlayer = 'Multi';

module.exports = async function startUp(interaction) {

    // declare variable that holds the user selection
    let selectedGameMode = '';

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
        .setDescription('Quizilla let\'s you play in solo or multi player mode. Please select an option below.\n' +
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
            await interaction.followUp(MCQuestions());

        } else if (selectedGameMode === 'Multi') {
            console.log('Multi player selected.')

            // Code to call next command goes here.
            await interaction.followUp(MCQuestions());
        }
    });
}