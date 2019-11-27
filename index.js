const Discord = require('discord.js');
const client = new Discord.Client
var x;
const prefix = '!roth'

client.once('ready', () => {
    console.log('Hey');
});


client.on('message', message => {
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
        for (x = 0; x < 1; x++) {
            mention.sendMessage (mentionMessage);
        }
        message.channel.send("Just sent it");
    }

    if (message.content === prefix){
        for (x = 0; x < 5; x++) {
            author.sendMessage("Your Stupid")
        }
    }
})

client.login(process.env.BOT_TOKEN);