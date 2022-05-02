const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = async function playerSignUp(interaction, game) {
  console.log(`Sign-up Channel ${game.channels.signUp}`);

  const channel = await interaction.guild.channels.fetch(
    `${game.channels.signUp}`
  );

  // Send sign up embed to sign up channel
  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Trivia Game`)
    .setDescription(`Created by ${interaction.user.tag}`)
    .addFields({ name: `Queued Players`, value: `Empty` });

  const signUpComponents = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId("queue")
        .setLabel("Queue")
        .setStyle("SUCCESS")
    )
    .addComponents(
      new MessageButton()
        .setCustomId("unqueue")
        .setLabel("Unqueue")
        .setStyle("DANGER")
    );

  await channel.send({
    components: [signUpComponents],
    embeds: [embed],
  });
};
