import { statsCmdMsg } from "../View/StatsMsg.js";
import { players } from "../Model/players.js";
import { rankmsg } from "../View/rankmsg.js";

export function setResponse(client, message, command) {
  // const channel = client.channels.cache.get(process.env.CHANNEL_ID);

  const commandArr = command.split(" ");

  if (commandArr.length === 1) {
    switch (command) {
      case "decimo":
      case "x":
      case "idecimo":
        statsCmdMsg(players[0], message);
        break;
      case "lnserted":
      case "inserted":
      case "johnny":
        statsCmdMsg(players[1], message);
        break;
      case "ramses":
      case "sneakymanny":
        statsCmdMsg(players[2], message);
        break;
      case "soultakerriven":
      case "omar":
        statsCmdMsg(players[3], message);
        break;
      case "debtz ii":
      case "debtz":
      case "arturo":
        statsCmdMsg(players[4], message);
        break;
      case "curbzz":
      case "alex":
        statsCmdMsg(players[5], message);
        break;
      case "andysilva100":
      case "andy":
        statsCmdMsg(players[6], message);
        break;
      case "ezdubz":
      case "david":
        statsCmdMsg(players[7], message);
        break;
      case "marlon skilZ":
      case "marlon":
        statsCmdMsg(players[8], message);
        break;
      case "decimo ix":
      case "alt":
        statsCmdMsg(players[9], message);
        break;
      case "help":
        message.reply("Please enter ***%username*** to view last match");
      default:
        "Nothing was found";
        break;
    }
  }

  if (commandArr.length === 2) {
    switch (command) {
      case "decimo rank":
      case "x rank":
      case "idecimo rank":
        rankmsg(players[0], message);
        break;
      case "lnserted rank":
      case "inserted rank":
      case "johnny rank":
        rankmsg(players[1], message);
        break;
      case "ramses rank":
      case "sneakymanny rank":
        rankmsg(players[2], message);
        break;
      case "soultakerriven rank":
      case "omar rank":
        rankmsg(players[3], message);
        break;
      case "debtz ii rank":
      case "debtz rank":
      case "arturo rank":
        rankmsg(players[4], message);
        break;
      case "curbzz rank":
      case "alex rank":
        rankmsg(players[5], message);
        break;
      case "andysilva100 rank":
      case "andy rank":
        rankmsg(players[6], message);
        break;
      case "ezdubz rank":
      case "david rank":
        rankmsg(players[7], message);
        break;
      case "marlon skilZ rank":
      case "marlon rank":
        rankmsg(players[8], message);
        break;
      case "alt rank":
        rankmsg(players[9], message);
        break;
      case "help":
        message.reply("Please enter ***%username rank*** to view rank");
      default:
        "Nothing was found";
        break;
    }
  }
}
