const { MessageEmbed } = require("discord.js");
const questionsData = require("./data/questionsData");
const blankQuestionsData = require("./data/questionsData");
const questionFormatter = require("./questionFormatter");
const updateLeaderboard = require("./updateLeaderboard");
const gameEnd = require("./gameEnd");

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

  const isThemeRandom = themeData;
  const isDifficultyRandom = difficultyData;
  const themes = ["geography", "history", "maf", "sport", "science"];
  const difficulties = ["easy", "medium", "hard"];

  const channel = await interaction.guild.channels.fetch(
    `${game.channels.questions}`
  );

  while (i < rounds) {
    console.log(isThemeRandom);
    console.log(isDifficultyRandom);

    if (isThemeRandom === "random") {
      theme = themes[Math.floor(Math.random() * themes.length)];
    }

    console.log(theme);

    if (isDifficultyRandom === "random") {
      difficulty =
        difficulties[Math.floor(Math.random() * difficulties.length)];
    }

    console.log(difficulty);
    const question = questionChooser(themes, theme, difficulty, questions);
    const message = await channel.send(
      questionFormatter(difficulty, i, question)
    );
    countDown(difficulty, i, 30, message, question);

    const collector = message.createMessageComponentCollector({
      componentType: "BUTTON",
      time: 1000 * 35,
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
            content: `The answer you have chosen is ${i.customId} - it's correct!`,
            ephemeral: true,
          });
        } else {
          i.reply({
            content: `The answer you have chosen is ${i.customId} - unfortunately it's incorrect.`,
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

  // Game End Clean-up State
  i = 0;
  questions = blankQuestionsData;
  game = await gameEnd(interaction, game);
  return game;

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

  async function questionEmbedUpdater(
    difficulty,
    qNum,
    message,
    time,
    { question, answers: [optA, optB, optC, optD] }
  ) {
    let timeMessage, setPoints, setEmbedColour;

    if (time >= 5) {
      timeMessage = `**${time}** seconds remaining...`;
    } else {
      timeMessage = `Times up...!`;
    }

    switch (difficulty) {
      case "easy":
        setPoints = 10;
        setEmbedColour = "#06D6A0";
        break;
      case "medium":
        setPoints = 20;
        setEmbedColour = "#E5A93F";
        break;
      case "hard":
        setPoints = 30;
        setEmbedColour = "#E2436F";
        break;
    }

    const updatedEmbed = new MessageEmbed()
      .setColor(`${setEmbedColour}`)
      .setTitle(`${qNum + 1}. ${question}`)
      .setDescription(
        `A: ${optA}
      B: ${optB}
      C: ${optC}
      D: ${optD}`
      )
      .addFields(
        {
          name: `Difficulty`,
          value: `${difficulty}`,
          inline: true,
        },
        {
          name: `Points`,
          value: `${setPoints}`,
          inline: true,
        },
        {
          name: `Timer`,
          value: `${timeMessage}`,
          inline: true,
        }
      );

    await message.edit({
      embeds: [updatedEmbed],
    });
  }

  function countDown(difficulty, qNum, i, message, question) {
    let interval = 5;
    let timer = setInterval(() => {
      questionEmbedUpdater(difficulty, qNum, message, i, question);
      if (i > 0) {
        i -= interval;
      } else {
        clearInterval(timer);
      }
    }, 1000 * interval);
  }
};
