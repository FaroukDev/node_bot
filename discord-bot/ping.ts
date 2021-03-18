const Discord = require('discord.js');
const client = new Discord.Client();
const { type } = require('node:os');
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    console.log("1 >>>>",message.member.hasPermission)
});



client.login(config.BOT_TOKEN);
