const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  var size;
  bot.guilds.forEach(g =>{
  size = g.memberCount
  })
var embed = new Discord.RichEmbed()
.addField("מספר האנשים בשרת הוא ",size)
  message.channel.send(embed);
}
module.exports.help = {
  name: "cu"
}
