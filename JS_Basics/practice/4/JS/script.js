/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что 
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архетектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если
оно false - он переключает его в true, если true - переключат в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - вовзращать его к этому же вопросу. После того, как все жанры введены - 
при помощи forEach вывести в консоль сообщения в таком виде6
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)" */

const personalMovieDB = {
  count: 0,
  movies: {},
  actros: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("How many films have you watched?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films have you watched?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < personalMovieDB.count; i++) {
      const a = prompt("Name of the last seen film?", ""),
        b = prompt("Your score?", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log("Movie databsae is private!");
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("You've seen pretty few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You're a classic viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("You're a cinephile!");
    } else {
      console.log("Error");
    }
  },
  writeYourGenres: () => {
    // for (let i = 0; i < 3; i++) {
    //   let temp = prompt(`Your favourite genre numbered ${i + 1}`);
    //   if (temp != null || temp != "") {
    //     personalMovieDB.genres[i] = temp;
    //   } else {
    //     console.log("error");
    //     i--;
    //   }

    for (let i = 0; i < 1; i++) {
      let temp = prompt(`Write your favourite genres separated by the comma`);
      if (temp != null && temp != "") {
        personalMovieDB.genres = temp.split(", ");
      } else {
        console.log("error");
        i--;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favourite genre #${i + 1} - is ${item}`);
    });
  },
};
