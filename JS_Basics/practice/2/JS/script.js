/*
Задание на урок:

1) Автоматизировать вопросы пользователя про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)

3) При помощи условий проврить personalMovieDB.count, и если он меньше 10 - вывести
сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если
больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл ещё дрвумя способами
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

while (i < numberOfFilms) {
  const a = prompt("Name of the last seen film?", ""),
    b = prompt("Your score?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    i++;
  } else {
    console.log("error");
    continue;
  }
}

// for (i; i < numberOfFilms; i++) {
//   const a = prompt("Name of the last seen film?", ""),
//     b = prompt("Your score?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// do {
//   if (numberOfFilms) {
//     const a = prompt("Name of the last seen film?", ""),
//       b = prompt("Your score?", "");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       i++;
//     } else {
//       console.log("error");
//       continue;
//     }
//   }
// } while (i < numberOfFilms);

console.log(personalMovieDB);

if (numberOfFilms < 10) {
  console.log("You've seen pretty few films");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  console.log("You're a classic viewer");
} else if (numberOfFilms >= 30) {
  console.log("You're a cinephile!");
} else {
  console.log("Error");
}
