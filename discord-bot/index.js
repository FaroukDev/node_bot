console.log("Beep !!! Beep !!!");

require('dotenv').config();

const Discord = require("discord.js");
// const config = require("./config.json");

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);