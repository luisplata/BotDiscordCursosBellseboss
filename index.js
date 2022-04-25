const { Client, Intents } = require('discord.js');
const config = require('./env.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var generalChanel = client.channels.cache.get('788190516520812586');
  generalChanel.send('I am online!');
});

client.login(config.DISCORD_TOKEN);