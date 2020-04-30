  
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'testf') {
    	message.reply('success');
  	}
});

client.on('message', msg=>{
if(msg.content ===  "Hello Felix"){
    msg.reply('Hello. What do you want?');
}
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
