module.exports = {
	name: 'help',
	description: 'displays commands',
	execute(message) {
		message.channel.send("Commands availible in version 0.2.0:");
		message.channel.send("\`\'!susbot sus [target]\' - Generates a basic statement towards the target.\`");
		message.channel.send("\`\'!susbot task\' - Generates a random excuse.\`");
		message.channel.send("\`\'!susbot vote [option1],[option2],[option3],...\' - Will return a random option given the choices. All choices must be seperated by commas.\`");
		message.channel.send("\`\'!susbot help\' - Gives list of availible commands.\`");
	},
};