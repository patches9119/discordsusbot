const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);





client.on('message', message => {
	console.log(message.content);
    if (message.content.includes('!sus')) {
        var response = message.content.slice(4);
        var answers = [
            response + ' literally killed green in front of me.',
            response + ' probably faked upload.',
            response + ' probably vented.',
            response + ' took a little too long on trash.',
            response + ' is sus.',
            response + ' hasn\'t been on cams all round.',
            response + ' did medscan.'
        ]
        var tag = answers[Math.floor(Math.random() * 8)];
        message.channel.send(tag);
    }
});
