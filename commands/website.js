const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 message.channel.sendMessage("הנה קישור לאתר הפודקאסט שלנו : http://lowbattery.co/");
}
module.exports.help = {
  name: "website"
}
