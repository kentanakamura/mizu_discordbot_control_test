const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login('MTIwMDgwMTc5NTQ5MzA2ODkwMA.Gto84s.epCTcwOYifz40BHwGwk0KSz5uzu7WFz4Y5yMEE');
