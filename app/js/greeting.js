const greeting = document.querySelector(".greeting");
const nameUser = document.querySelector(".name");
// Массив строк в зависимости от времени суток
const timeofday = ["night", "morning", "day", "evening"];

export const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  const message = timeofday[parseInt(hours / 6)];
  greeting.textContent = `Good ${message}`;
};
getTimeOfDay();

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
