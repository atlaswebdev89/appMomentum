// Подключаем перевод
const langs = require("./languages.js");                                                                                                                                                                                                                                                            
// Подключаю модуль для работы с localstorage
const storage = require("./localstorage");
//Token api 
const api = '3c7cabd780790100e0ba88af57b3a871';

const errorElement = document.querySelector('.weather-error');
const city = document.querySelector('.city');
city.value = storage.getLocalStorage('city')?storage.getLocalStorage('city'):'Minsk';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

// Функция формирования uri для запроса погоды
const getUri = (api, cityName) => {
    const locale = (localStorage.getItem("language")) ? localStorage.getItem("language") : 'en';
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${locale}&appid=${api}&units=metric`;
}
// Функция добавления данных
const addData = (data) => {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${langs.getLang('Wind speed')}: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `${langs.getLang('Humidity')}: ${data.main.humidity} %`;
}
// Функция очистки данных в случае ошибки
const removeData = () => {
    weatherIcon.className = '';
    temperature.textContent = '';
    weatherDescription.textContent='';
    wind.textContent = '';
    humidity.textContent='';
}                                                                                                                                                       

async function getWeather() {
    errorElement.textContent = '';
    const cityName = (city.value) ? city.value : 'Minsk';
    removeData();
    const uri = getUri(api, cityName);
    const res = await fetch(uri);
    if (res.ok) {
        const data = await res.json();
        city.value = cityName;
        addData(data,cityName);
    } else {
        errorElement.textContent = `Error! Not found data for ${city.value}. Code ${res.status}`;
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('change', getWeather);

//перед перезагрузкой или закрытием страницы (событие beforeunload)
window.addEventListener("beforeunload", () => storage.setLocalStorage('city', city.value));
