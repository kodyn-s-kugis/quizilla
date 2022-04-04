const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");

module.exports = () => {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.commands = new Collection();

  const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

  console.log(commandFiles);

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(file);
    console.log(commandFiles);
    console.log(command);

    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
  }

  return client;
};
