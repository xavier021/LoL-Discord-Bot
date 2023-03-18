import { MessageAttachment, MessageEmbed } from "discord.js";

export function rankmsg(player, message) {
  if (Object.keys(player.rankObj).length != 0) {
    const tierPic = new MessageAttachment(
      `./View/images/ranked-emblems/Emblem_${player.rankObj.tier}.png`
    );
    const icon = new MessageAttachment(`./View/images/champs/LeagueIcon.png`);

    const playerName = player.name;
    const wins = player.rankObj.wins;
    const losses = player.rankObj.losses;
    const totalGames = wins + losses;
    const wRatio = Math.floor((wins * 100) / (wins + losses));

    const rankMsgEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setAuthor({
        name: "League Stats Bot",
        iconURL: "attachment://LeagueIcon.png",
      })
      .setTitle(`${player.name}'s Rank`)
      .setURL(
        `https://na.op.gg/summoner/userName=${playerName.replace(/\s+/g, "")}`
      )
      .setThumbnail(`attachment://Emblem_${player.rankObj.tier}.png`)
      .setFields(
        {
          name: "Rank",
          value: `${player.rankObj.tier} ${player.rankObj.rank}`,
          inline: true,
        },
        {
          name: "LP",
          value: `${player.rankObj.leaguePoints} Points`,
          inline: true,
        },
        {
          name: "_____",
          value: `**Games**: ${totalGames}(W: ${wins} L: ${losses})   **Win Ratio**: ${wRatio}%`,
          inline: false,
        }
      );

    message.reply({ embeds: [rankMsgEmbed], files: [icon, tierPic] });
  }else{
    const icon = new MessageAttachment(`./View/images/champs/LeagueIcon.png`);

    const playerName = player.name;
    const wins = player.rankObj.wins;
    const losses = player.rankObj.losses;
    const totalGames = wins + losses;
    const wRatio = Math.floor((wins * 100) / (wins + losses));

    const rankMsgEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setAuthor({
        name: "League Stats Bot",
        iconURL: "attachment://LeagueIcon.png",
      })
      .setTitle(`${player.name}'s Rank`)
      .setURL(
        `https://na.op.gg/summoner/userName=${playerName.replace(/\s+/g, "")}`
      )
      .setFields(
        {
          name: "Rank",
          value: `${player.rankObj.tier} ${player.rankObj.rank}`,
          inline: true,
        },
        {
          name: "LP",
          value: `${player.rankObj.leaguePoints} Points`,
          inline: true,
        },
        {
          name: "_____",
          value: `**Games**: ${totalGames}(W: ${wins} L: ${losses})   **Win Ratio**: ${wRatio}%`,
          inline: false,
        }
      );

    message.reply({ embeds: [rankMsgEmbed], files: [icon] });
  }
}
