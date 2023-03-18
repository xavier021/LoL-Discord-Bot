import "dotenv/config";
// import fetch from "node-fetch";
import { players } from "../Model/players.js";
import axios from "axios";

export async function getRanks(player) {
  const rankLink = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${player.summonerId}?api_key=${process.env.KEY}`;
  const { data: rankData } = await axios.get(rankLink);

  
  const ranking = players.filter((ranks) => {
    if (ranks.name === player.name && rankData.length != 0) {
      ranks.rankObj = rankData[0];
      ranks.lp.change = ranks.rankObj.leaguePoints - ranks.lp.current;
      ranks.lp.current = ranks.rankObj.leaguePoints;
    }
    if(rankData.legnth === 0){
        return "N/A"
    }
  });
  Promise.all(ranking);
}

// 196iBFMYS_HO4DBbL3tZzq2XYZHqEtnVrgTo9OINE4f8LFI
