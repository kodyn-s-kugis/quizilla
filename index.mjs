import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("The bot is ready");

  const guildID = "950334962635243590";
  const guild = client.guilds.cache.get(guildID);
  // let commands;

  // if (guild) {
  //   commands = guild.commands;
  // } else {
  //   commands = client.application?.commands;
  // }

  // commands?.create({
  //   name: "ping",
  //   description: "Replies with pong.",
  // });
});

// client.on("messageCreate", (message) => {
//   if (message.content === "ping") {
//     message.reply({
//       content: "pong",
//     });
//   }
// });

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isCommand()) {
//     return;
//   }

//   const { commandName, options } = interaction;

//   if (commandName === "ping") {
//     interaction.reply({
//       content: "pong",
//       ephemeral: true,
//     });
//   }
// });

client.login(process.env.TOKEN);
