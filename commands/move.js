const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
        const moment = require("moment");
        if (message.member.roles.find("name", "VM")) return message.channel.send(':negative_squared_cross_mark: You do not have permission. You need \`VM\` in order to move members!');
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.channel.send(':negative_squared_cross_mark: You must mention someone to move them');
         var auth = message.author;
          const member = message.guild.member(user);
          member.setVoiceChannel('506286739262799872');
          message.channel.bulkDelete(1)
          
          message.member.send('You have been moved by an admin please message ' + auth + ' to have more details otherwise have a great day! \n \n ~ Your vZDV Robot')
        

}

exports.cmdConfig = {
    name: "move",
    aliases: ['m','move'],
    description: "Moves a person out of a discord voice channel",
    usage: "!move <user>",
    type: "mod"
  };
  