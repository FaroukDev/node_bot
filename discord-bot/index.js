var Discord = require("discord.js");
require('dotenv').config();
//console.log(require('dotenv').config())
var config = require("./config.json");
// console.log("config",config)

var client = new Discord.Client();

client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});

// client.login(config.BOT_TOKEN);
client.login(process.env.BOT_TOKEN);
// console.log("processenv",process.env.BOT_TOKEN);
client.on("message", function (message) {
    if (message.content === "!test") {
        var channel01 = client.channels.cache.find((function (channel) { return channel.id === "821332759519690778"; }));
        channel01.send("hello les devclouds vous voulez faire du C dieze !");
    }
});
client.on("message", function (message) {
    if (message.content === "!hi") {
        var channel01 = client.channels.cache.find((function (channel) { return channel.id === "821390897895047178"; }));
        channel01.send("hello les devclouds vous voulez faire du C dieze !");
    }
});
client.on("ready", function () {
    console.log("Bot is on");
});
client.on('message', function (message) {
    var args = message.content.split(" ");
    if (args[0].toLowerCase() === "nick") { //command is 'changeNick <@usertag> <new nickname>'
        if (!message.mentions.users.first())
            return message.channel.send("You didn't specify a user!");
        var user = message.mentions.members.first();
        var newNickname = args.slice(2).join(" ");
        user.setNickname(newNickname);
    }
});
