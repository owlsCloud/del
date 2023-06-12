require("dotenv").config();

const { REST, Routes } = require("discord.js");
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

const commands = [{ name: "purge", description: "purges" }];

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
      { body: commands }
    );
  } catch (error) {}
})();
