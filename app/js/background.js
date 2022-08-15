// Экспортируем функцию для получения текущего времени суток
import { getTimeOfDay } from './greeting';

const body = document.querySelector('body');
const next = document.querySelector('.slider-next');
const prev = document.querySelector('.slider-prev');

// Функция получения рандомного числа от 1 до 20
const RandomImg = () => {
    return Math.floor(Math.random() * (20)) + 1;
}
// Случайное число 
let randomNum = RandomImg();

// Функция получения url img
const getUriImg = () => {
    const random = ('0' + randomNum).slice(-2);
    return `https://raw.githubusercontent.com/doroshuk89/stage1-tasks/assets/images/${getTimeOfDay()}/${random}.jpg`;
}

//Функция формирования изображения для фона 
const setBg = () => {
    const img = new Image();
    img.src = getUriImg();
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('${img.src}')`;
    })
}
setBg();

//Увеличивает число на 1 
const getSlideNext = () => {
    randomNum = (randomNum > 19)?1:++randomNum;
    setBg();
}

// Уменьшает число на 1 
const getSlidePrev = () => {
    randomNum = (randomNum < 2)?20:--randomNum;
    setBg();
}

next.addEventListener('click', getSlideNext);
prev.addEventListener('click', getSlidePrev);
