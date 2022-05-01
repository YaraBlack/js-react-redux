/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ads = document.querySelectorAll(".promo__adv img");
  const removeAdd = (arr) => arr.forEach((item) => item.remove());
  removeAdd(ads);

  const promoGenre = document.querySelector(".promo__genre");
  promoGenre.textContent = "Драма";

  const bgImg = document.querySelector(".promo__bg");
  bgImg.style.background = 'url("img/bg.jpg")';

  const filmList = document.querySelector(".promo__interactive-list");
  movieDB.movies.sort();
  createList(movieDB.movies, filmList);

  // 1)
  const addForm = document.querySelector("form.add"),
    filmInput = addForm.querySelector(".adding__input"),
    checkInp = addForm.querySelector("input[type='checkbox']");
  // deleteBtns = document.querySelectorAll(".delete");

  function createList(data, elem) {
    elem.innerHTML = "";
    movieDB.movies.sort();
    data.forEach(
      (item, i) =>
        (elem.innerHTML += `<li class="promo__interactive-item">${
          i + 1
        }. ${item}
        <div class="delete"></div>
    </li>`)
    );
    // 3)
    document.querySelectorAll(".delete").forEach((item, i) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createList(movieDB.movies, filmList);
      });
    });
  }

  function addFilm() {
    if (filmInput.value != "") {
      // 4)
      if (checkInp.checked) {
        console.log("Adding the film to favourites");
      }
      // 2)
      if (filmInput.value.length < 21) {
        movieDB.movies.push(filmInput.value);
      } else {
        // movieDB.movies.push(filmInput.value.slice(0, 21) + "...");
        movieDB.movies.push(filmInput.value.substring(0, 21) + "...");
      }
      // 5)
      movieDB.movies.sort();
      createList(movieDB.movies, filmList);
    }
  }

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addFilm();
    event.target.reset();
  });
});
