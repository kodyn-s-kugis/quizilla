const questionsData = require("./data/questionsData");
const questionFormatter = require("./questionFormatter");
const updateLeaderboard = require("./updateLeaderboard");

module.exports = async function questionHandler(
  interaction,
  gameData,
  themeData,
  difficultyData,
  rounds
) {
  let theme = themeData;
  let difficulty = difficultyData;
  let game = gameData;
  let questions = questionsData;
  let i = 0;

  const themes = ["geography", "history", "maf", "sport", "science"];
  const difficulties = ["easy", "medium", "hard", "random"];

  if (theme === "random") {
    theme = themes[Math.floor(Math.random() * themes.length)];
  }

  if (difficulty === "random") {
    difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  }

  const channel = await interaction.guild.channels.fetch(
    `${game.channels.questions}`
  );

  while (i < rounds) {
    const question = questionChooser(themes, theme, difficulty, questions);
    const message = await channel.send(questionFormatter(question));

    const collector = message.createMessageComponentCollector({
      componentType: "BUTTON",
      time: 1000 * 30,
    });

    const playerResponse = [...game.players];

    playerResponse.forEach((player) => {
      player.hasResponded = false;
    });

    collector.on("collect", async (i) => {
      let doesPlayerExists = game.players.findIndex(
        (player) => player.id === i.user.id
      );

      if (doesPlayerExists === -1) {
        i.reply({
          content: `You aren't registered to play.`,
          ephemeral: true,
        });
      } else if (
        playerResponse
          .filter((player) => player.id === i.user.id)
          .some((player) => player.hasResponded === true)
      ) {
        i.reply({
          content: `You have already submitted your answer.`,
          ephemeral: true,
        });
      } else if (game.players.some((player) => player.id === i.user.id)) {
        let playerIndex = playerResponse.findIndex(
          (player) => player.id === i.user.id
        );

        playerResponse[playerIndex].hasResponded = true;

        if (i.customId === question.correct) {
          game.players[
            game.players.findIndex((player) => player.id === i.user.id)
          ].points +=
            questions.theme[themes.indexOf(theme)][theme][difficulty].points;

          await updateLeaderboard(interaction, game);

          i.reply({
            content: `You've chosen the correct answer!`,
            ephemeral: true,
          });
        } else {
          i.reply({
            content: `Ohhh no, you've got it wrong! Maybe you should study harder.`,
            ephemeral: true,
          });
        }
      }
    });

    await new Promise((resolve) =>
      collector.on("end", (collector) => {
        i++;
        console.log(questions.theme[4]["science"]["easy"].questions);
        resolve(console.log(collector));
      })
    );
  }

  function questionChooser(themes, themeData, difficultyData, questionsData) {
    let question = questionsData.theme[themes.indexOf(themeData)][theme][
      difficultyData
    ].questions.filter((question) => question.askedBefore !== true);

    const random = Math.floor(Math.random() * question.length);

    question = question[random];

    let questionIndex = questions.theme[themes.indexOf(theme)][theme][
      difficultyData
    ].questions.findIndex((q) => q.question === question.question);

    questions.theme[themes.indexOf(theme)][theme][difficultyData].questions[
      questionIndex
    ].askedBefore = true;

    return question;
  }
};
