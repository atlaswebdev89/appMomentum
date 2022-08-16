const en = document.querySelector('.en');
const ru = document.querySelector('.ru');
// Подключаю модуль для работы с localstorage
const storage = require("./localstorage");

// Функция перезагрузки страницы
const reload = () => {
    location.reload();
}

const startLang = () => {
    if (storage.getLocalStorage("language") === 'en') {
        en.classList.add('lang-active');
    }else if (storage.getLocalStorage("language") === 'ru') {
        ru.classList.add('lang-active');
    }else {
        en.classList.add('lang-active'); 
    }
}

en.addEventListener('click', () => {
        storage.setLocalStorage("language", en.textContent);
    reload();
})

ru.addEventListener('click', () => {
        storage.setLocalStorage("language", ru.textContent);
    reload();
})

startLang();

