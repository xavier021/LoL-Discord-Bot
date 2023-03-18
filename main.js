import Discord from "discord.js";
import "dotenv/config";
import { setStatMsg } from "./Controller/DiscordMsg.js";
import { setResponse } from "./Controller/RequestMsg.js";

const main = async () => {
  const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
  });

  client.once("ready", () => {
    console.log("Toxic bot is online");
  });

  client.on("ready", async () => {
    await setStatMsg(client);
  });

  const prefix = "%";

  client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length);
    console.log(command);

    setResponse(client, message, command);
  });

  client.login(process.env.TOKEN);
};

main().catch((err) =>{
  console.log(err)
})
