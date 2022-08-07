// Стили для приложения
import '../css/style.css';
// Подключаем файл с реализацией получения цитат
const quote = require("./animation-reload");
// Получаем цитату дня, благодаря экспортируемой функции
quote.getQuotes();
// Подключаем файл приветствия 
const greeting = require('./greeting.js');
// Подключаем файл для даты и времени
const datetime = require("./datetime.js");




   
