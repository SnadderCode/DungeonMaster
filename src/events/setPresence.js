const { ActivityType, PresenceUpdateStatus} = require("discord.js");

module.exports = {
	name: "clientReady",
	once: true,
	execute(client) {
		client.user.setPresence({
			activities: [
				{
					name: "D&D",
					type: ActivityType.Playing,
				},
			],
			status: PresenceUpdateStatus.DoNotDisturb,
		});
	},
};