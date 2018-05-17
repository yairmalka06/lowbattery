const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 message.channel.sendMessage("הנה קישור לעמוד היוטיוב שלנו : https://www.youtube.com/channel/UCepLBJXHcH7QDXiVMak0WaA");
}
module.exports.help = {
  name: "youtube"
}
