const {MessageEmbed} = require("discord.js");

module.exports = {
    category: 'Help',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    slash: true,

    callback: ({channel}) => {
        const help = new MessageEmbed()
            .setColor('#5cd3bf')
            .setTitle('Welcome to Quizilla')
            .setDescription("User Guide")
            .addFields([
                {name: 'Create trivia', value: '/trivia create'},
                {name: 'Close trivia', value: '/trivia close'}
            ])

        channel.send({embeds: [help]});
    }
}