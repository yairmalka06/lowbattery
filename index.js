const Discord = require("discord.js");

const fs = require("fs");

const bot = new Discord.Client();

const PREFIX = "!";

bot.commands = new Discord.Collection();

let coins = require("./coins.json");

let xp = require("./xp.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot .on("guildMemberAdd",function(member)
{
      member.guild.channels.find("name","🙌welcome_bye🙌").sendMessage("היי"+" "+member.toString()+" "+"מבינים שאין לך בטריה");
       var Lowrole = member.guild.roles.find("name", "🔋Low Batterys🔋");
       member.addRole(Lowrole);
});
bot .on("guildMemberRemove",function(member)
{
  member.guild.channels.find("name","🙌welcome_bye🙌").sendMessage("יצא מהשרת"+" "+member.toString()+" "+"האחרון שיצא 😉");
});
bot.on("ready", function(){
    console.log("Ready");
    var size;
    bot.guilds.forEach(g =>{
    size = g.memberCount
    })
    bot.user.setGame(size +" "+"דגי רקק בשרת");
});

bot.on("message", function(message)
{
  if(message.author.equals(bot.user)) return;
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} מטבעות נוספו !`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
  xp[message.author.id] = {
  xp: 0,
  level: 1
  };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + 1;
  let lvlup = new Discord.RichEmbed()
  .setTitle("עלית רמה !")
  .setColor("#0c57d1")
  .addField("הרמה שלך עכשיו היא :", curlvl + 1);

  message.channel.send(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
  });
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let arg = args.slice(PREFIX.length);

  let commandfile = bot.commands.get(cmd.slice(PREFIX.length));
  if(commandfile) commandfile.run(bot,message,args);



});



bot.login(process.env.TOKEN);
