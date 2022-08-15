//Функции работы с localstorage

//Функция добавления
const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  // Функция получения
  const getLocalStorage = (name) => {
      return localStorage.getItem(name);
  };

  module.exports = {setLocalStorage, getLocalStorage}