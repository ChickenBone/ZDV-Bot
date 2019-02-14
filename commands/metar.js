var fs = require('fs');
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    var request = require('request');
    var airport = args[0].toUpperCase();
    if(airport !== "!metar"){

      
    var url = `https://avwx.rest/api/metar/${airport}`
    request(`${url}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var body1 = body.replace(/-/g, '');
         
           
          
          const content = body1;
          fs.open(`metar/cache/${airport}.json`, 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          });
          fs.writeFile(`metar/cache/${airport}.json`, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
            
          });          
          fs.open(`metar/cache/${airport}.json`, 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          });
          fs.writeFile(`metar/cache/${airport}.json`, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
            
          });
          fs.readFile(`metar/cache/${airport}.json`, "utf8", function(err, data) {
          console.log(data)
          var obj = JSON.parse(data)
          var alt = obj.Altimeter
          console.log(alt)
          var timestamp = obj.Meta.Timestamp
          var raw = obj.RawReport
          var remarks = obj.Remarks
          var temp = obj.Temperature
          var vis = obj.Visibility
          var winddir = obj.WindDirection
          var windgust = obj.WindGust
          var windspeed = obj.WindSpeed
          var fr = obj.FlightRules
          const embed = new Discord.RichEmbed()
          .setColor(`${fr != 'VFR' ? "#1454bc" : "#32bc14" }`)
          .setThumbnail(user.avatarURL)
          .setTitle(`${airport} METAR`,true)
          .addField("INFO FOR: ", `${airport}`,true)
          .addField("Flight Rules: ", `${fr}`,true)
          .addField("Altimeter: ",`${alt}Hg`,true)
          .addField("Temp(°C): ",`${temp}`,true)
          .addField("Visibility: ",`${vis}sm`,true)
          .addField("Wind Dir: ",`${winddir  != '000' ? winddir + '°' : 'N/A'}`,true)
          .addField("Wind Speed: ",`${windspeed > '003' ? windspeed + 'kts' : 'Calm'}  ${windgust ? 'Wind Gust: ' + windgust : ''}`,true)
          .addField("URL: ",`${url}`,true)
          .addField("RAW: ",`${raw}`,true)
          .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
          message.channel.send({embed});
  }
       
    )
}
  }
)

}
}
exports.cmdConfig = {
    name: "metar",
    aliases: ['m'],
    description: "Gets current metar info",
    usage: "!metar",
    type: "zdv"
  };