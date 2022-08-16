// Стили для приложения
import '../css/style.css';
// Подключаем файл с реализацией получения цитат
const quote = require("./animation-reload");
// Получаем цитату дня, благодаря экспортируемой функции
quote.getQuotes();
// Подключаем файл приветствия 
const greeting = require('./greeting');
// Подключаем файл для даты и времени
const datetime = require("./datetime");
// Подключаем файл для получения погоды 
const weather = require("./weather");
// Подключаем файл смены фона
const background = require('./background');
// Подключаем аудио плеер
const audio = require('./player');
// Подключаем файл для перевода
const langChanger = require('./langChanger');




   
