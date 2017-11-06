

const Discord = require('discord.js');
const client = new Discord.Client();
 
 client.on('message', message => {
     if (message.content === process.env.q1) {
     	message.reply(process.env.a1);

client.on('message', message => {
     if (message.content === process.env.q2) {
     	message.reply(process.env.a2);

client.on('message', message => {
     if (message.content === process.env.q3) 
     	message.reply(process.env.a3);
   	}
 });
 
 client.login(process.env.BOT_TOKEN);

