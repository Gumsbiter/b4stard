const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () =>{
console.log('I am awake.');
});

client.on('message', msg=>{
if(msg.content ===  "Hello Felix"){
    msg.reply('Hello. What do you want?');
}
});

client.login(process.env.BOT_TOKEN);
