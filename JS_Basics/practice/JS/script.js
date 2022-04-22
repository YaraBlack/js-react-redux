/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли
*/

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actros: {},
  genres: [],
  privat: false,
};
let i = 0;
let movies = {};
while (i < numberOfFilms) {
  let a = prompt("Name of the last seen film?", ""),
    b = prompt("Your score?", "");
  personalMovieDB.movies[a] = b;
  i++;
}

console.log(personalMovieDB);
