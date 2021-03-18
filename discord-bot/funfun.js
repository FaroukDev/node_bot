const Discord = require("discord.js");
const {
    prefix,
    token
} = require("./config.json");


const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

// client.on('message', message => {
// 	console.log(message.content);
//     if (message.content === '!ping') {
//         // send back "Pong." to the channel the message was sent in
//         message.channel.send('Pong.');
//     }
// });

// client.on('message', message => {
// 	console.log(message.content);
//     if (message.content === `${prefix}ping`) {
//         message.channel.send('Pong.');
//     } else if (message.content === `${prefix}beep`) {
//         message.channel.send('Boop.');
//     }
//     else if (message.content === `${prefix}server`) {
//         message.channel.send(`This server's name is: ${message.guild.name}`);
//     }
//     else if (message.content === `${prefix}user-info`) {
//         message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
//     }
// });
client.on('message', message => {
    console.log(message.content);
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }



});

client.on('ready', function () {
    client.user.setActivity('oooorh click').catch(console.error)
})

client.login(token);