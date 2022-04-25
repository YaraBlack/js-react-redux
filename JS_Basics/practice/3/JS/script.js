/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat.
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actros: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt("Name of the last seen film?", ""),
      b = prompt("Your score?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    console.log("You've seen pretty few films");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log("You're a classic viewer");
  } else if (numberOfFilms >= 30) {
    console.log("You're a cinephile!");
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Your favourite genre numbered ${i + 1}`
    );
  }
}

writeYourGenres();
