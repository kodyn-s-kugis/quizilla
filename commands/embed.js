const DiscordJS = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
    category: 'Embed',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],

    callback: ({message, text}) => {
        const embed = new MessageEmbed()
            .setColor('#5cd3bf')
            .setTitle('Welcome to Quizilla')
            .setDescription("Hello World!")
            .addFields([
                {name: 'Available commands', value: '/ping', inline: true},
                {name: 'Add two numbers', value: '/add', inline: true}
            ])
        return embed;
    }
}