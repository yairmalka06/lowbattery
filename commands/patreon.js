const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 message.channel.sendMessage("הנה קישור לתמוך בנו בפטריאון : https://www.patreon.com/lowbattery");
}
module.exports.help = {
  name: "patreon"
}
