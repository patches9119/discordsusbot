const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);


const answers = [
    ' literally killed green in front of me.',
    ' probably faked upload.',
    ' probably vented.',
    ' took a little too long on trash.',
    ' is sus.',
    ' hasn\'t been on cams all round.',
    ' did medscan.',
]



client.on('message', message => {
    if (message.content.includes('!sus')) {
        var response = message.content.slice(4);
        var tag = answers[Math.floor(Math.random() * 8)];
        message.channel.send(response + tag);
        
    }
});
