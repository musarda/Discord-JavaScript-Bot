# Discord Bot with JavaScript

This is a simple Discord bot created using JavaScript and the Discord.js library.

> [!NOTE]  
> This Bot is for Example Purposes Only.

## Features

- Responds to the "!ping" command with "Pong!"
- Easily customizable and extendable

## Usage

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already: [Node.js Download](https://nodejs.org/).
3. Install the required dependencies using `npm install`.
4. Create a bot on the Discord Developers Portal and obtain a bot token.
5. Add your bot token to the `config.json` file.
6. Run the bot using `node bot.js`.

> [!IMPORTANT]  
> You Need Code Editor to Run the Code.

### Get Your Bot Token
After successfully creating your bot, you will need to get the bot's token. This token is used to authenticate your bot. You can get your token with the following steps:
1. Go to the "Bot" tab on the left.
2. Click the "Copy" button in the "Token" section to copy the token to the clipboard.

> [!WARNING]  
> Do Not Share Discord Bot Tokens with Others. Otherwise, your bot may be stolen.

## Create Discord Bot
First you need to create a bot on the Discord Developers Portal:
1. Go to the [Discord Developers Portal](https://discord.com/developers/applications)
2. Create a new application and give it a name. This will be the name of your bot.
3. Go to the "Bot" tab on the left and click the "Add Bot" button.
4. You can customize your bot, but you can skip this step and use the default settings.

## Commands

- `!ping`: Replies with "Pong!"
- Add more custom commands in the `bot.js` file.

## Code

<details>
  <summary>Full Code</summary>
  
  ```js
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

  ```
</details>

This JavaScript code represents a basic Discord bot that responds to the `!ping` command with `Pong!` when invoked. Here's an explanation of the code:

```js
const Discord = require('discord.js'); // Import the discord.js library.
const client = new Discord.Client();    // Create a new Discord client instance.
const token = 'YOUR_BOT_TOKEN';         // Replace 'YOUR_BOT_TOKEN' with your actual bot's token.

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
```
1. We start by importing the `discord.js` library, which allows us to interact with the Discord API. This library simplifies the process of creating Discord bots in JavaScript.
2. Next, we create a new instance of the Discord `client` and assign it to the client variable. This `client` object will be responsible for managing our bot's interactions with the Discord server.
3. We store the bot's `token` in the token variable. You should replace `YOUR_BOT_TOKEN` with the actual token you obtain when creating your Discord bot through the Discord Developer Portal.
4. The `client.on('ready', () => { ... })` block is an event listener. It listens for the 'ready' event, which occurs when the bot successfully logs in to the Discord server. When this event is triggered, the code inside the arrow function is executed, and it logs a message to the console, displaying the bot's username and tag.

```js
client.on('message', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});
```
1. The `client.on('message', (message) => { ... })` block is another event listener. It listens for the 'message' event, which is triggered every time a message is sent in any channel that the bot has access to.
2. Inside the 'message' event handler, we check if the content of the message is equal to "!ping" using `if (message.content === '!ping') { ... }`. If the message content matches "!ping," the following code block is executed:
   - `message.reply('Pong!');` sends a reply to the message with the text "Pong!" This is how the bot responds to the "!ping" command with "Pong!" in the same channel where the command was issued.

```js
client.login(token); // Log in to Discord using the bot's token.
```
1. Finally, we log in to the Discord server using `client.login(token)`. This is where the bot's token is used for authentication, allowing the bot to connect to the server and respond to events.

## Clone
```git
gh repo clone musarda/Discord-JavaScript-Bot
```

## License

This project is licensed under the [MIT License](LICENSE).

