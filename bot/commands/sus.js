module.exports = {
	name: 'sus',
	description: 'gives random sus answer',
	execute(message, args) {
		const susanswers = [
			' literally killed green in front of me.',
			' probably faked upload.',
			' probably vented.',
			' took a little too long on trash.',
			' is sus.',
			' hasn\'t been on cams all round.',
			' did medscan.',
		];
		var user = args.slice(4).trim();
		console.log(user);
		if (user === "<@!764232186852409374>") {
			message.channel.send(tasks[Math.floor(Math.random() * 9)]);
		} else {
			var tag = susanswers[Math.floor(Math.random() * 7)];
			message.channel.send(user + tag);
		}
	},
};