import { MessageAttachment, MessageEmbed } from "discord.js";

export function statsMsg(player, channel) {
  var outcome = "";

  if (player.playerObj.win === true) {
    outcome = "Victory";
  } else {
    outcome = "Defeat";
  }

  try {
    const tierPic = new MessageAttachment(
      `./View/images/ranked-emblems/Emblem_${player.rankObj.tier}.png`
    );
  } catch (e) {
    const tierPic = null;
  }

  const outcomePic = new MessageAttachment(
    `./View/images/champs/${outcome}.png`
  );
  const icon = new MessageAttachment(`./View/images/champs/LeagueIcon.png`);

  const playerName = player.name;

  const statsMsgEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setAuthor({
      name: "League Stats Bot",
      iconURL: "attachment://LeagueIcon.png",
    })
    .setTitle(`${player.name}'s Last Match`)
    .setURL(
      `https://na.op.gg/summoner/userName=${playerName.replace(/\s+/g, "")}`
    )
    .addField("\u200B", "\u200B")
    .setDescription("Game Summary")
    .addField(`***${outcome}***`, "...")
    .setThumbnail(`attachment://${outcome}.png`)
    .addFields({
      name: "____",
      value: `\n
        **Champion**: ${player.playerObj.championName}
        **Position**: ${player.playerObj.lane}
        **Kills**: ${player.playerObj.kills}
        **Deaths**: ${player.playerObj.deaths}
        **Assists**: ${player.playerObj.assists}
        **Largest Multi**: ${player.playerObj.largestMultiKill}
        **Total Damage Dealt**: ${player.playerObj.totalDamageDealtToChampions}
        **Total Gold Earned**: ${player.playerObj.goldEarned}
        **CS Score**: ${
          player.playerObj.totalMinionsKilled +
          player.playerObj.neutralMinionsKilled
        }
        **Game Duration**: ${player.matchTime}
        **Rank**: ${player.rankObj.tier + " " + player.rankObj.rank}
        **LP Gained**: ${player.lp.change}
        `,
    })
    .setImage(
      `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${player.playerObj.championName}.png`
    )
    .setTimestamp();

  channel.send({ embeds: [statsMsgEmbed], files: [icon, outcomePic] });
}

export function statsCmdMsg(player, message) {
  var outcome = "";

  if (player.playerObj.win === true) {
    outcome = "Victory";
  } else {
    outcome = "Defeat";
  }

  //Pictures in embeded msg
  try {
    const tierPic = new MessageAttachment(
      `./View/images/ranked-emblems/Emblem_${player.rankObj.tier}.png`
    );
  } catch (e) {
    const tierPic = null;
  }
  const outcomePic = new MessageAttachment(
    `./View/images/champs/${outcome}.png`
  );
  const icon = new MessageAttachment(`./View/images/champs/LeagueIcon.png`);

  const playerName = player.name;

  //Creating embeded msg
  const statsMsgEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setAuthor({
      name: "League Stats Bot",
      iconURL: "attachment://LeagueIcon.png",
    })
    .setTitle(`${player.name}'s Last Match`)
    .setURL(
      `https://na.op.gg/summoner/userName=${playerName.replace(/\s+/g, "")}`
    )
    .addField("\u200B", "\u200B")
    .setDescription("Game Summary")
    .setImage(
      `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${player.playerObj.championName}.png`
    )
    .addField(`***${outcome}***`, "...")
    .setThumbnail(`attachment://${outcome}.png`)
    .addFields({
      name: "____",
      value: `\n
        **Champion**: ${player.playerObj.championName}
        **Position**: ${player.playerObj.lane}
        **Kills**: ${player.playerObj.kills}
        **Deaths**: ${player.playerObj.deaths}
        **Assists**: ${player.playerObj.assists}
        **Largest Multi**: ${player.playerObj.largestMultiKill}
        **Total Damage Dealt**: ${player.playerObj.totalDamageDealtToChampions}
        **Total Gold Earned**: ${player.playerObj.goldEarned}
        **CS Score**: ${
          player.playerObj.totalMinionsKilled +
          player.playerObj.neutralMinionsKilled
        }
        **Game Duration**: ${player.matchTime}
        **Rank**: ${player.rankObj.tier + " " + player.rankObj.rank}
        **LP Gained**: ${player.lp.change}
        `,
    })
    .setTimestamp();

  message.reply({ embeds: [statsMsgEmbed], files: [icon, outcomePic] });
}
