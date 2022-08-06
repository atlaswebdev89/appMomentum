// Функция получения цитат
const reload = document.querySelector(".change-quote");

reload.addEventListener("click", (event) => {
  AnimationReloadButton(event.target);
});

// Функция добавления аминации при клике на кнопку. Амимация заканчивается когда обновиться цитата
const AnimationReloadButton = (target) => {
  target.classList.toggle("reload-animation");
};

module.exports = {reload, AnimationReloadButton};
