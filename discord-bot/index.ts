const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
client.login(config.BOT_TOKEN);


export const readyDiscord = () =>{
    console.log("hello");
}

export const message1 = () => {
    client.on("message", function(message: { content: string; }){
    if(message.content === "!test"){
        const channel01 = client.channels.cache.find((channel: { id: string; }) => channel.id === "821332759519690778")
        channel01.send("hello les devclouds vous voulez faire du C dieze !")
    }  
})}

client.on("message", (message: { content: string; }) => {
        if (message.content === "!hi") {
            const channel01 = client.channels.cache.find((channel: { id: string; }) => channel.id === "821390897895047178");
            channel01.send("hello les devclouds vous voulez faire du C dieze !");
        }
    })

client.on("ready", ()=> {
    console.log("Bot is on");
})


export const nickName = () => {
    client.on('message', (message: { content: string; mentions: { users: { first: () => any; }; members: { first: () => any; }; }; channel: { send: (arg0: string) => any; }; }) => {

    let args = message.content.split(" ");

    if(args[0].toLowerCase() === "nick"){ //command is 'changeNick <@usertag> <new nickname>'
        if(!message.mentions.users.first()) return message.channel.send("You didn't specify a user!");
         const user = message.mentions.members.first();
         var newNickname = args.slice(2).join(" ");
         user.setNickname(newNickname);
    }
})};
  


