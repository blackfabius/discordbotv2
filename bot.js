

const Discord = require('discord.js');
const client = new Discord.Client();
 
 client.on('ready', () => {
     console.log('I am ready!');
 });
 
 client.on('message', message => {
     if (message.content === 'process.env.BOT_MESSAGE') {
     	message.reply('process.env.BOT_MESSAGEANWSER');
   	}
 });
 
 // THIS  MUST  BE  THIS  WAY
 client.login(process.env.BOT_TOKEN);

