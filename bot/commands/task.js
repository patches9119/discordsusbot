module.exports = {
	name: 'task',
	description: 'Gives random excuse',
	execute(message) {
		const tasks = [
            'I was uploading in admin.',
            'I was fixing wires in electrical.',
            'I was shooting asteroids in weapons',
            'I was doing garbage in storage',
            'I was downloading in admin',
            'I was refueling in reactor',
            'I was downloading in comms',
            'I was charting course in nav.',
        ];
        message.channel.send(tasks[Math.floor(Math.random() * 8)]);
	},
};