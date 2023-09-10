> [!IMPORTANT]  
> You Need Code Editor to Run the Code.

* We import the `discord.js` library, which facilitates interactions with the Discord API.
* A new instance of the Discord client is created, allowing us to manage the bot's interactions with the Discord server.
* The `token` variable stores the bot's authentication token. Replace `YOUR_BOT_TOKEN` with your actual bot token obtained from the Discord Developer Portal.
* An event listener is set up for the 'ready' event, which triggers when the bot successfully logs in. When this event occurs, the bot's username and tag are logged to the console.
* Another event listener is set up for incoming messages. It checks if the message content is "!ping."
* If the message content matches "!ping," the bot replies with "Pong!" in the same channel where the command was issued.
* Finally, the bot logs in to the Discord server using `client.login(token)`, authenticating itself and allowing it to respond to events on the server.

**Code:**
```js
// Import the 'discord.js' library which allows interaction with the Discord API.
const Discord = require('discord.js');

// Create a new instance of the Discord client.
const client = new Discord.Client();

// Replace 'YOUR_BOT_TOKEN' with the actual token obtained from the Discord Developer Portal.
const token = 'YOUR_BOT_TOKEN';

// Set up an event listener for when the bot is ready and logged in.
client.on('ready', () => {
  // When the bot is ready, log a message displaying the bot's username and tag.
  console.log(`Logged in as ${client.user.tag}`);
});

// Set up an event listener for incoming messages.
client.on('message', (message) => {
  // Check if the message content is equal to '!ping'.
  if (message.content === '!ping') {
    // If the message content is '!ping', reply with 'Pong!'
    message.reply('Pong!');
  }
});

// Log in to the Discord server using the bot's token.
client.login(token);

```
