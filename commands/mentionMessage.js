module.exports = {
    name: 'mentionMessage',
    description: 'Annoys mentioned user with repeated messages.',
    execute(message, args) {
        var mention = message.mentions.users.first();

        if (message.content.startsWith (prefix)) {
            if (mention == null) { return; }
            message.delete();
            if (mention.username == 'Evan') {
                mentionMessage = message.content.slice (5);
                for (x = 0; x < 1; x++) {
                    mention.sendMessage ("IU SUCKS");
                    mention.sendMessage (mentionMessage);
                }
            }
            mentionMessage = message.content.slice (5);
            for (x = 0; x < 5; x++) {
                mention.sendMessage (mentionMessage);
            }
            message.channel.send("Just sent it");
        }
    }
}