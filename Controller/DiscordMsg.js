// import Discord from "discord.js";
import "dotenv/config";
import { getMatches } from "./leaguedata.js";
import { players } from "../Model/players.js";
import { statsMsg } from "../View/StatsMsg.js";
import { CronJob } from "cron";

export async function setStatMsg(client) {
  const message = client.channels.cache.get(process.env.LEAGUE_CHANNEL);

  await getMatches();
  
  console.log("outside");
  const cronJob = new CronJob("*/60 * * * * *", async () => {
    await getMatches();
    players.map((player) => {
      if (player.lastMatch.same === false) {
        statsMsg(player, message);
        console.log("request sent");
      }
    });
  });
  cronJob.start();
}


