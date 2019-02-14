const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let manageMessages = message.member.hasPermission("MANAGE_MESSAGES");
  if (manageMessages === false) return message.channel.send(':negative_squared_cross_mark: You do not have permission. You need \`MANAGE_MESSAGES\`');
    if (isNaN(args[0])) return message.channel.send('**Please provide a valid amount of messages to purge.**');
    if (args[0] > 100) return message.channel.send('**Please supply a number less than 100.**');
     message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages in ${message.channel}**`).then(msg => msg.delete({
      timeout: 1000000
    }))) 
}

exports.cmdConfig = {
  name: "purge",
  aliases: ['p'],
  description: "Purges X amount of messages from a given channel. If no given amount of messages to delete, it will delete 20. Permission needed: MANAGE_MESSAGES.",
  usage: "purge [number]",
  type: "zdv"
};