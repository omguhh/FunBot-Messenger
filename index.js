const Bottr = require('bottr');
const BottrApp = require('bottr-app');
const bot = new Bottr.Bot();
bot.use(new BottrApp());

bot.on('message_received', function(message, session) {
    session.send('Hello Worffld')
});

bot.listen();