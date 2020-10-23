const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);
const prefix = '!susbot';


const susanswers = [
	' literally killed green in front of me.',
	' probably faked upload.',
	' probably vented.',
	' took a little too long on trash.',
	' is sus.',
	' hasn\'t been on cams all round.',
	' did medscan.',
]

const tasks = [
	'I was uploading in admin.',
	'I was fixing wires in electrical.',
	'I was shooting asteroids in weapons',
	'I was doing garbage in storage',
	'I was downloading in admin',
	'I was refueling in reactor',
	'I was downloading in comms',
	'I was charting course in nav.',
]



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(7).trim();


	//sus command
	if (args.startsWith("sus ")) {
		// console.log("running!");
		var user = args.slice(4).trim();
		console.log(user);
		if (user === "<@!764232186852409374>") {
			message.channel.send(tasks[Math.floor(Math.random() * 9)]);
		} else {
			var tag = susanswers[Math.floor(Math.random() * 7)];
			message.channel.send(user + tag);
		}
	} else if (args.startsWith("task")) {
		message.channel.send(tasks[Math.floor(Math.random() * 8)]);
	} else if (args.startsWith("help")) {
		message.channel.send("Commands availible in version 0.2.0:");
		message.channel.send("\`\'!susbot sus [target]\' - Generates a basic statement towards the target.\`");
		message.channel.send("\`\'!susbot task\' - Generates a random excuse.\`");
		message.channel.send("\`\'!susbot vote [option1],[option2],[option3],...\' - Will return a random option given the choices. All choices must be seperated by commas.\`");
		message.channel.send("\`\'!susbot help\' - Gives list of availible commands.\`");
	} else if( args.startsWith("vote")) {
		var base = args.slice(4).trim();
		var options = base.split(',');
		// console.log(options);
		var num = Math.floor(Math.random() * options.length)
		var choice = options[num].trim();
		// console.log(choice);
		message.channel.send("Vote " + choice);
	}
});