const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);



const answers = [
    ' is reaching critical sus. Immediete vote recomended.',
    ' is extremely sus.',
    ' probably vented.',
    ' took a little too long on trash.',
    ' is sus',
    ' has not been in range of cams for me to see.',
    ' isn\'t very sus.',
    ' did medscan.'
]

client.on('message', message => {
	console.log(message.content);
    if (message.content.includes('!sus')) {
        // send back "Pong." to the channel the message was sent in
        var response = message.content.slice(4);
        var tag = answers[Math.floor(Math.random() * 9)];
        message.channel.send(response + tag);
    }
});
