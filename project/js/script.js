/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папкеurl "img.
Реализовать "только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...'
	]
};

const adv = document.querySelectorAll('.promo__adv img'),
      affiche = document.querySelector('.promo__bg'),
      genre = affiche.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
   item.remove(); 
});

genre.textContent = 'ДРАМА';

affiche.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';
movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${++i}: ${item}
                                <div class="delete"></div>
                            </li>`;
});




/////////////
// const adSection = document.querySelectorAll('.promo__adv');
// adSection[0].remove();

//   promoSection = document.querySelectorAll('.promo__content'),
//   promoBg = document.querySelector('.promo__bg'),
//   promoGenre = document.querySelector('.promo__genre'),
//   promoGenreTwo = document.createElement('div.promo__genre');

// promoGenreTwo.innerText('ДРАМА');
// promoSection.replaceChild(promoGenre, promoGenreTwo);
