const greeting = document.querySelector(".greeting");
const nameUser = document.querySelector(".name");
// Подключаем перевод
const langs = require("./languages.js");     


export const getTimeOfDay = () => {
  // Массив строк в зависимости от времени суток
  const timeofday = ["night", "morning", "day", "evening"];
  const date = new Date();
  const hours = date.getHours();
  return timeofday[parseInt(hours / 6)];
};
// Получаем текущее время суток
const message = getTimeOfDay();
greeting.textContent = langs.getLang(`Good ${message}`);

// Обновление приветствия при изменение времени суток
const timer = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours % 6 === 0 && date.getMinutes === 0) {
    getTimeOfDay();
  }
};
setInterval(timer, 1000);

//Функции работы с localstorage
//Функция добавления
const setLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};
// Функция получения
const getLocalStorage = (name, element) => {
  if (localStorage.getItem(name)) {
    element.value = localStorage.getItem(name);
  }
};

//перед перезагрузкой или закрытием страницы (событие beforeunload)
window.addEventListener("beforeunload", () => setLocalStorage('name', nameUser.value));

//перед загрузкой страницы (событие load)
window.addEventListener("load", () => getLocalStorage('name', nameUser));
