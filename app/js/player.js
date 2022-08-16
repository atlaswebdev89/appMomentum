// Импортируем список треков
import { playList } from './playList';

const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');

// Флаг включено ли проигравание
let isPlay = false;
let playNum = 0;

// Создаем список треков и добавляем в html
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
});

const itemArray = document.querySelectorAll('.play-item');

itemArray.forEach((item) => {
    item.addEventListener('click', (event) => {
        const element = event.target.textContent;
        playNum = playList.findIndex((el) => {
            return el.title === element;
        });
        playAudio();
    });
})

// Создаем аудиоплеер
const audio = new Audio();

function pauseAudio() {
    audio.pause();
    isPlay = false;
    btnToggle();

}
// Функция смены иконки
const btnToggle = () => {
    (isPlay) ? playBtn.classList.add('play-pause') : playBtn.classList.remove('play-pause');
}
// Функция перелистывания вперед
const playNext = () => {
    playNum = (playNum >= playList.length - 1) ? 0 : ++playNum;
    playAudio();
}
// Функция перелистывания назад
const playPrev = () => {
    playNum = (playNum <= 0) ? (playList.length - 1) : --playNum;
    playAudio();
}
// Функция включени и отключения проигрования
const play = () => {
    (isPlay) ? pauseAudio() : playAudio();
}

//Функция выделения текущего трека
const itemActive = () => {
    itemArray.forEach(item => item.classList.remove('item-active'));
    itemArray[playNum].classList.add('item-active');
}

function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    btnToggle();
    itemActive();
    //Событие ended - конец аудиофайла
    audio.addEventListener('ended', () => {
        playNext(); 
    });
}

playBtn.addEventListener('click', play);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

