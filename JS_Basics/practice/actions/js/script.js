/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

//1)
const ads = document.querySelectorAll(".promo__adv img");
console.log(ads);
ads.forEach((item) => item.remove());

//2)
const promo_genre = document.querySelector(".promo__genre");
promo_genre.textContent = "Драма";

//3)
const bg_img = document.querySelector(".promo__bg");
bg_img.style.background = 'url("img/bg.jpg")';

//4, 5)
const film_list = document.querySelector(".promo__interactive-list");
console.log(film_list);
movieDB.movies.sort();
film_list.innerHTML = "";
movieDB.movies.forEach(
  (item, i) =>
    (film_list.innerHTML += `<li class="promo__interactive-item">${
      i + 1
    }. ${item}
    <div class="delete"></div>
</li>`)
);
