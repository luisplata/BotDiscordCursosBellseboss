const test = require("./Controllers/Test.js");
const { Client, Intents } = require('discord.js');
const config = require('./env.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const cron = require('node-cron');
const Scheduled = require("./Controllers/Scheduled");
const sheldure = new Scheduled();
cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  //sheldure.RunAllSchedules();
});

sheldure.RunAllSchedules();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var generalChanel = client.channels.cache.get('968218569072582758');
  //generalChanel.send('I am online!');
});

client.on('message', async message => {
  if (message.content.includes('!bellseboss')) {
    var testController = new test();
    var listOfText = message.content.split(' ');
    //console.log(testController.UserCase(listOfText[1], listOfText[2]), "response");
    testController.UserCase(listOfText[1], listOfText[2]).Run(listOfText[2],(response) => {
      message.channel.send(response);
    }, (response) => {
      message.channel.send(response);
    });
    message.reply();

    //message.reply('pong');
  }else{
    return;
  }
});

client.login(config.DISCORD_TOKEN);