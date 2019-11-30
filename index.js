const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = '!roth'

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Hey');
});


client.on('message', message => {
    
    client.commands.get('mentionMessage').execute(message, args);

    if (message.content === prefix){
        for (x = 0; x < 5; x++) {
            message.author.send("Your Stupid")
        }
    }
})

client.login(process.env.BOT_TOKEN);