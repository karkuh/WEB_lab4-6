

let message = "Тема: Мова розмітки HTML\nПрізвище: Каркушевський\nІм'я: Владислав\nГрупа: ТР-12\nОцінка: 10/10";

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1858844290:AAG4xVcUFcD6nNnKqz1biKvcGrhwNCsOHMk';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const chatId = -519873227;

bot.sendMessage(chatId, message);




