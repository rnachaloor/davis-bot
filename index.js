const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = '!roth'

for (const file of commandFiles) {
	const command = require(`./commands/${index.js}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Hey');
});


client.on('message', message => {
    
    //client.commands.get('mentionMessage').execute(message, args);

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

    if (message.content === prefix){
        for (x = 0; x < 5; x++) {
            message.author.send("Your Stupid")
        }
    }
})

client.login(process.env.BOT_TOKEN);