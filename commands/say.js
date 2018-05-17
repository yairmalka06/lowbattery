const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  var text = args.join(" ");
  message.channel.sendMessage(text);

}
module.exports.help = {
  name: "say"
}
