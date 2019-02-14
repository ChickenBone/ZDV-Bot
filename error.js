module.exports = {
    generic(c,e,f) {
    const embed = new Discord.RichEmbed()
    .setColor(`#f20000`)
    .setThumbnail(user.avatarURL)
    .setTitle(`Generic Error Fallows`,true)
    .addField("Cause: ", `${c}`,true)
    .addField("Error: ", `${e}`,true)
    .setFooter(`Automatic Error from ${f}`)
    client.channels.get(`506284972382879754`).send({embed});
}
}
