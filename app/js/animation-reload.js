// Функция получения цитат
const reload = document.querySelector(".change-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// Добавляем обрабочик при клике
reload.addEventListener("click", () => {
  getQuotes();
});

// Функция добавления анимации при клике на кнопку. Анимация заканчивается когда обновиться цитата
const AnimationReloadButton = () => {
  reload.classList.toggle("reload-animation");
};

async function getQuotes() {
  // Запускаем анимацию
  AnimationReloadButton();
  // Запрос к файлу с цитатами
  const quotes = "assets/quote/data.json";
  const res = await fetch(quotes);

  // Проверяем результат запроса к файлу
  if (res.ok) {
    const data = await res.json();
    // Получаем рандомное число для получения случайной цитаты
    const RandomItem = Math.round(Math.random() * (data.length-1));
    const locale = (localStorage.getItem("language")) ? localStorage.getItem("language") : 'en';
      quote.textContent = data[RandomItem][locale].quoteText;
      author.textContent = data[RandomItem][locale].quoteAuthor;
    // Иначе выводим ошибку
  } else {
    quote.textContent = "Error! Not found data";
    author.textContent = res.status;
  }
  // Останавливаем анимацию
  setTimeout(AnimationReloadButton, 1000);
  
}
// Экспортируем функции и переменные
module.exports = { reload, getQuotes };
