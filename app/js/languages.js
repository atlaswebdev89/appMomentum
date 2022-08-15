const locale = (localStorage.getItem("language")) ? localStorage.getItem("language") : 'en';

const lang = {
    'ru': {
        "Wind speed": "Скорость ветра:",
        "Humidity": "Влажность",
        "Good night": "Доброй ночи", 
        "Good morning": "Доброе утро", 
        "Good day": "Добрый день", 
        "Good evening":"Добрый вечер",
    }
}

export function getLang (text) {
    return (lang[locale])?lang[locale][text]:text;
}

