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

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        input = form.querySelector('.adding__input'),
        checkbox = form.querySelector('[type="checkbox"]');
// const   deleteBtn = movieList.querySelectorAll('.delete');
        

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = input.value;
    const fav = checkbox.checked;
    
    if(newFilm){
        // validOrCut(newFilm);
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm);

        if(fav){
            console.log(`Добавляем любимый фильм: ${newFilm}`);
        }

        movieListGen(movieDB, movieList);
        sortArr(movieDB.movies);
        event.target.reset();
    }
});


// deleteBtn[li].forEach(function (li = this) {
//     li.on('click', (order) => {
//         order = indexOf(li);
//         console.log(order);
//     })
// })

const deleteAdv = (spam) => {
    spam.forEach(item => {
        item.remove(); 
    });
    },
        makeChanges = () => {
    genre.textContent = 'ДРАМА';
    
    affiche.style.backgroundImage = 'url("img/bg.jpg")';
    },
        sortArr = (arr) => {
        arr.sort();
    // },
    //     validOrCut = (string) => {
    //     if (string.length > 21) {
    //         string = `${string.substring(0, 22)}...`;
    //     }
    };

deleteAdv(adv);
makeChanges();

function movieListGen(db, parent){
    parent.innerHTML = '';
    sortArr(db.movies);
    db.movies.forEach((item, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${++i}: ${item}
            <div class="delete"></div>
        </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            movieListGen(db, parent);
        })
    });
}

movieListGen(movieDB, movieList);

})



/////////////
// const adSection = document.querySelectorAll('.promo__adv');
// adSection[0].remove();

//   promoSection = document.querySelectorAll('.promo__content'),
//   promoBg = document.querySelector('.promo__bg'),
//   promoGenre = document.querySelector('.promo__genre'),
//   promoGenreTwo = document.createElement('div.promo__genre');

// promoGenreTwo.innerText('ДРАМА');
// promoSection.replaceChild(promoGenre, promoGenreTwo);