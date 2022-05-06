module.exports = async function channelCleanUp(interaction, gameData) {
  const game = gameData;

  const categoryChannel = await interaction.guild.channels.fetch(
    `${game.channels.category}`
  );
  const signUpChannel = await interaction.guild.channels.fetch(
    `${game.channels.signUp}`
  );
  const loungeChannel = await interaction.guild.channels.fetch(
    `${game.channels.lounge}`
  );

  categoryChannel.delete();
  signUpChannel.delete();
  loungeChannel.delete();
};
