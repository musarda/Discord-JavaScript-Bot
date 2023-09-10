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
  
if (message.content === 'owner') {
  message.reply('https://musarda.github.io');
}

});

client.login(token);
