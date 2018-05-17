const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 message.channel.send("הדג רקק האחרון שיצא...", {files: ["https://www.pitria.com/wp-content/uploads/2017/06/%D7%93%D7%92%D7%99-%D7%A8%D7%A7%D7%A7.jpg"]});
}
module.exports.help = {
  name: "דגרקק"
}
