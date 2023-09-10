const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'YOUR_BOT_TOKEN'; // Add your bot's token here

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
if (message.content === '!ping') {
  message.reply('Pong!');
}
});

client.login(token);
