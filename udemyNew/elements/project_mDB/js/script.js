/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelector('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      list = document.querySelector('.promo__interactive-list')

ads.remove()
genre.textContent = 'Драма'
bg.style.backgroundImage = 'url("img/bg.jpg")'



list.innerHTML = ''
movieDB.movies.sort()

movieDB.movies.forEach((film, num) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${num + 1} ${film}
        <div class="delete"></div>
    </li>
    `
})
