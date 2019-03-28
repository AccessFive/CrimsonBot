const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js')

client.on('ready', () => {
  console.log(`Bot has started`);
});

client.login(`${config.token}`);