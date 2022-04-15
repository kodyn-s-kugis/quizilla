module.exports = async function buttonInteraction() {

    await reply({
        content: `${question}\n
              A: ${answers[0]}\n
              B: ${answers[1]}\n
              C: ${answers[2]}\n
              D: ${answers[3]}\n
              Choose your answer:\n`,
        components: [row],
    });


    const filter = (btnInt) => {
        return interaction.user.id === btnInt.user.id;
    };

    const collector = interaction.channel.createMessageComponentCollector({
        filter,
        max: 1,
        time: 1000 * 30,
    });

    collector.on('collect', (ButtonInteraction) => {
        ButtonInteraction.reply({
            content: `You've chosen ${ButtonInteraction.customId}`,
        })
    });

    collector.on('end', (collection) => {
        collection.forEach((click) => {
            let userID = click.user.id;
            chosenAnswer = click.customId;
            console.log(chosenAnswer, correct);
        })
    });
};