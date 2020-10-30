require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {
   polling: true
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hi, what do you want to eat and drink you can ask me. I will help you to give the detaild of nutrition.');
  });