// * bot to delete messages from specific channel

require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const isLink = (msg) => {
  try {
    return Boolean(new URL(msg));
  } catch (error) {
    return false;
  }
};
// * intents are permissions
// * guild = server

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("messageCreate", (msg) => {
  if (msg.channel.name === "games-to-try" && !isLink(msg.content)) {
    msg.delete();
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand) return;
  console.log(interaction.channel.messages);
  var name = interaction.commandName;
});

client.login(process.env.TOKEN);
