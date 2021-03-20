var Discord = require("discord.js");
import {Message} from "discord.js"
require('dotenv').config();
var config = require("./config.json");
var client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

export default function handle (msg: Message){
    return "ok"
}

export type Person = {
    message: string;
    args: string;
}

client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});

// client.login(config.BOT_TOKEN);


export function mymessage1(_message: string): Person{
    return client.on("message", message => {
        if (message.content === "!test") {
            const channel01 = client.channels.cache.find((channel => channel.id === "821332759519690778"));
            channel01.send("hello les devclouds vous voulez faire du C dieze !");
        }
    });}

mymessage1("hello hello les devclouds vous voulez faire du C dieze !")

export function mymessage2(_message: string): Person{
   return client.on("message", message => {
        if (message.content === "!hi") {
            const channel01 = client.channels.cache.find((channel => channel.id === "821390897895047178"));
            channel01.send("hello les devclouds vous voulez faire du C dieze !");
        }
    }); 
}

mymessage2("hello")

client.on("ready", ()=> {
    console.log("Bot is on");
})

export function nickname(_message: string): Person{
    return client.on('message', message => {
        let args = message.content.split(" ");
        if (args[0].toLowerCase() === "nick") { //command is 'changeNick <@usertag> <new nickname>'
            if (!message.mentions.users.first())
                return message.channel.send("You didn't specify a user!");
            const user = message.mentions.members.first();
            var newNickname = args.slice(2).join(" ");
            user.setNickname(newNickname);
        }
    });
}

nickname("hello")
  


