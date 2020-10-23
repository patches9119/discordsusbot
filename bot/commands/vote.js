module.exports = {
	name: 'vote',
	description: 'returns random option out of user inputs',
	execute(message, args) {
		var base = args.slice(4).trim();
		var options = base.split(',');
		var num = Math.floor(Math.random() * options.length)
		var choice = options[num].trim();
		message.channel.send("Vote " + choice);
	},
};