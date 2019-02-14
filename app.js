if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
const Discord = require("discord.js");
const fetch =  require("isomorphic-fetch");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
const client = new Discord.Client();
const request = require('request');
const async = require('async');
const error = require("./error.js");
const $ = src="https://code.jquery.com/jquery-3.2.1.min.js";
var http = require('http');
var guild = require("./guild.js");
client.config = require("./config.js");
require("./util/functions.js")(client);
client.commands = new Enmap();
client.aliases = new Enmap();
client.queue = new Enmap();
client.fight = new Enmap();
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});
client.gpoints = new Enmap({provider: new EnmapLevel({name: "gpoints"})});
client.spoints = new Enmap({provider: new EnmapLevel({name: "spoints"})});
const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.log(`Loading a total of ${cmdFiles.length} commands`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });                       
  const evtFiles = await readdir("./events/");
  client.log(`Loading a total of ${evtFiles.length} events`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
}

client.login(`NTA2MjgyMDM3NDAyMTQwNjgz.Drf3qA.Ih_Bmtipq3j7EOPErXj7-D5xfbM`);

init();
var i = 0;
// setInterval(function() {
//   var url = `https://zseartcc.org/`
//  i++
//   request(`${url}`, function (error, response, body) {
    
//   })
//   console.log(i)
// }, 1)

  setInterval(function() {
    var url = `https://zdvartcc.com/api/events`
    request(`${url}`, function (error, response, body) {
      var obj = JSON.parse(body);
      console.log(body)
      var title = obj[0].title
      var banner = obj[0].banner_link
      var start = obj[0].event_start
      var end = obj[0].event_end
      var desc = obj[0].description
      var host = obj[0].host
      console.log(title)
      const embed = new Discord.RichEmbed()
            .setColor("#32bc14")
            .setThumbnail(`${banner}`)
            .setTitle(`${title}`,true)
            .addField("Event Start: ", `${start}`,true)
            .addField("Event End: ", `${end}`,true)
            .addField("Desription: ", `${desc.replace("<div><b>", "").replace("</b></div>","")}`,true)
            .addField("Host: ", `${host}`,true)
            .setFooter(`Automated Announcement`)
            client.channels.get('506284936613986304').send({embed});
          });
  }, 86400000*7)
  client.on('guildMemberAdd', member => {
    if (member.guild.id == '506272162735456256') {
      var role = member.guild.roles.find('name', 'not verified');
    member.addRole(role)
    client.channels.get(`506284972382879754`).send(`Welcome ${member} to the ZDV ARTCC`);
    }
      });

//Ignore this lmao
client.on("message", message  => {
  
  user = message.member;
  if (user != null){
  user = message.member;
  user = user.toString();
  if (user.includes("!")) {
      user = user.split("!")[1].split(">")[0];
  } else {
      user = user.split("@")[1].split(">")[0];
  }
  var username = client.users.get(user).username
  var tag = message.member.user.tag
  var username = client.users.get(user)
  var channelID = message.channel.id
  var serverID = message.guild.id
    var fs = require('fs');
    var author = message.author;
    var date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
    var channel =   message.guild.channels.get(`${channelID}`).toString();
    
    fs.appendFile(`serverlogs`, `\nServer: <${serverID}> `+` User ID & Name & Tag: ${username}`+`#`+`${tag} `+ ` Channel ID: ${channel} ` + ` Message: "${message}"` + ` <Date and Time> ` + `${date} MST` , function (err) {
      if (err) throw err;
      console.log(`Saved Log`);
    })
    console.log(`Server: <${serverID}> `+` User ID & Name & Tag: ${username}`+`#`+`${tag} `+ ` Channel ID: ${channel} ` + ` Message: ${message}` + ` <Date and Time> ` + `${date} MST`)
    

  }else{
    console.log(`Is Null`)
  }
})