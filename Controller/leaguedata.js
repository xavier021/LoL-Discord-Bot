import "dotenv/config";
// import axios.get from "node-axios.get";
import { players } from "../Model/players.js";
import { getRanks } from "./ranks.js";
import axios from "axios";

export async function getMatches() {

  // var getData = "";

  try {
      var getData = players.map(async (playerObj) => {
      const matchesLink = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerObj.puuid}/ids?type=ranked&start=0&count=5&api_key=${process.env.KEY}`;
      const {data: matchesData} = await axios.get(matchesLink);
  
      if (playerObj.lastMatch.last != matchesData[0]) {
  
        playerObj.lastMatch.last = matchesData[0];
        playerObj.lastMatch.same = false;
  
        //Get rankings
        await getRanks(playerObj);
  
        console.log("requesting");
        //Get match details
        const matchLink = `https://americas.api.riotgames.com/lol/match/v5/matches/${playerObj.lastMatch.last}?api_key=${process.env.KEY}`;
        const {data} = await axios.get(matchLink);
  
        //Setting the time of the match
        const matchTime =
          data.info.gameEndTimestamp - data.info.gameStartTimestamp;
        var minutes = Math.floor(matchTime / 60000);
        var seconds = ((matchTime % 60000) / 1000).toFixed(0);
        playerObj.matchTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
        //Adding all participant data to the player Obj
        data.info.participants.filter((player) => {
          if (player.summonerName === playerObj.name) {
            playerObj.playerObj = player;
          }
        });        

      } else {
        return (playerObj.lastMatch.same = true);
      }

      
    });

    return Promise.all(getData); 
  } catch (error) {
    console.log("Unable to get data\n" + error)
  }
   
}
