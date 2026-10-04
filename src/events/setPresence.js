const { ActivityType, PresenceUpdateStatus} = require("discord.js");

module.exports = {
	name: "clientReady",
	once: true,
	execute(client) {
		client.user.setPresence({
			activities: [
				{
					name: "Dungeons & Dragons",
					type: ActivityType.Playing,
				},
			],
			status: PresenceUpdateStatus.DoNotDisturb,
		});
	},
};