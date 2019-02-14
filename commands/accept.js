const Discord = require('discord.js');
var fs = require('fs');

exports.run = (client, message, args) => {
    function     generic(c,e,f) {
        const embed = new Discord.RichEmbed()
        .setColor(`#f20000`)
        .setThumbnail("https://www.materialui.co/materialIcons/alert/error_red_192x192.png")
        .setTitle(`Generic Error Fallows`,true)
        .addField("Cause: ", `${c}`,true)
        .addField("Error: ", `${e}`,true)
        .setFooter(`Automatic Error from ${f}`)
        client.channels.get(`506284972382879754`).send({embed});

  }

    
      id = message.author.id;
    if(message.channel.id === '506300450392375296')  return message.author.send(`Hey there, ${message.author.username}! For all preceding questions please answer in one word responces to make this process go by smoothly! \n \n **FIRST QUESTION, What is your first name?**`)
  .then((newmsg) => { 
    setTimeout(function (){ 
    newmsg.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 20000,
      errors: ['time'],
    })
 
    

    .then((collected) => {
        
        name = collected.first().content
      
      newmsg.channel.send(`Alright ${name} \n **SECOND QUESTION, What is your last name?**`)
      
    .then((newmsg) => { 
        setTimeout(function (){
        newmsg.channel.awaitMessages(response => response.content, {
          max: 1,
          time: 20000,
          errors: ['time'],
        })
    
        .then((collected) => {
            last = collected.first().content
          newmsg.channel.send(`Alright ${name}  \n **THIRD QUESTION, What is your current rating on the VATSIM network (if unsure respond with N/A)**`)
          .then((newmsg) => { 
            setTimeout(function (){
            newmsg.channel.awaitMessages(response => response.content, {
              max: 1,
              time: 20000,
              errors: ['time'],
            })
        
            .then((collected) => {
                rating = collected.first().content
              newmsg.channel.send(`Alright ${name}  \n **FORTH QUESTION, Are you a visiting controller, a home controller, or just a guest?**`)
              .then((newmsg) => { 
                newmsg.channel.awaitMessages(response => response.content, {
                  max: 1,
                  time: 20000,
                  errors: ['time'],
                }).then((collected) => {
                    stance = collected.first().content
stancef = ""                  
if(stance == "home" || stance == "home controller" ? "" : "home")return stancef = "home";
if(stance == "visit" || stance == "visting" || stance == "visiting controller") return stancef = "visit";
if(stance == "guest") return stancef = "guest";

newmsg.channel.send(`Alrighty ${name} the current info I have is that your name is ${name} ${last} | ${rating} and you are a ${stance} ${final = stance == "home" || stance == "visit" ? "controller" : ""} \n Welcome to the DEN ARTCC! Enjoy Your Stay And Your All Set!\n We will contact you as soon as we can just in case you have any questions, once again thank you ${name}!`)

const content = `${name} ${last} ${rating} ${stance} Discord Info "${message.author.username}#${message.author.discriminator}"`;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
const embed = new Discord.RichEmbed()
.setColor(`#2cf400`)
.setThumbnail("http://www.myiconfinder.com/uploads/iconsets/256-256-c0829a49b2acd49adeab380f70eb680a-accept.png")
.setTitle(`Generic Welcome Message`,true)
.addField("User: ", `${name} ${last} Discord Info ${message.author.username}#${message.author.discriminator}`,true)
.addField("Time: ", `    ${dateTime}`,true)
.setFooter(`Automated Welcome Message`)
client.channels.get(`506284972382879754`).send({embed});
fs.open(`data/user/${id}.data`, 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
fs.writeFile(`data/user/${id}.data`, content, function (err) {
  if (err) throw err;
  console.log('Saved!');
  
}); 
client.guilds.get("506272162735456256").members.get(id).setNickname(`${name} ${last} | ${rating} (${stance})`);

console.log("done")


 

    }).catch((e) => {
generic(`inintial setup error from ${message.author.username}#${message.author.discriminator}`, e , `./commands/accept.js`)
      
});
    
});
})
}, 1000)
})
})
}, 1000)
})
})
}, 1000)
}
)};

exports.cmdConfig = {
    name: "accept",
    aliases: ['accept','a'],
    description: "",
    usage: "!accept",
    type: "zdv"
  };
