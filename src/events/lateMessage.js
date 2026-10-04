const {lateKeywords, lateReplyMessages} = require("../words/words.js");

async function personIsLate(lowerCaseContent) {
	return lateKeywords.some((keyword) => lowerCaseContent.includes(keyword));
}

async function handleLateMessage(message) {
	if (message.author.bot) return;

	const lowerCaseContent = message.content.toLowerCase();

	if (!(await personIsLate(lowerCaseContent))) return;

  console.log(`Detected a late message from ${message.author.tag}: "${message.content}"`);

	const replyMessage = lateReplyMessages[Math.floor(Math.random() * lateReplyMessages.length)];

	await message.reply(replyMessage);
}

module.exports = {
	name: "messageCreate",
	async execute(message) {
		handleLateMessage(message);
	},
};
