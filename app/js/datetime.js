const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

const showDate = () => {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    let locale = '';
    if (localStorage.getItem("language") === "en") {
         locale = 'en-US';
    }else {
         locale = 'ru-RU';
    }
    const currentDate = date.toLocaleDateString(locale, options);
    dateElement.textContent = currentDate;
}
const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeElement.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}
showTime();

