/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


// selfshitcode^^

// function valid(prompt , type){
// 	if (prompt == '' || prompt == null || typeof(prompt) != type || prompt.lenght > 50 ){
// 		//continue valid;
// 		//:(((((
// 	}
// }




const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: true,
	start: function(obj = this) {
		obj.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while (obj.count == '' || obj.count == null || isNaN(obj.count)){
			obj.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function(obj = this){
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
				  b = +prompt('На сколько оцените его?', '').trim();
			obj.movies[a] = b;
			if (a != null && b != null && a != '' && b != '' && a.length < 50 && isNaN(b) == false){
				console.log('done!');
			} else {
				console.log('error!');
				i--;
			}	
		}
	},
	writeMyGenres: function(obj = this){
		for (let i = 1; i <= 3; i++){
			obj.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}:`, '').trim();
			if(obj.genres[i - 1] == null || obj.genres[i - 1] == ''){
				i--;
				console.log('invalid genre.');
			}
		};
		obj.genres.forEach((m) => console.log(`Любимый жанр #${obj.genres.indexOf(m) + 1} - это ${m}`));
	},
	detectPersonalLevel: function(obj = this){
		if(obj.count < 10){
			alert('Просмотрено довольно мало фильмов.');
		}	else if (obj.count >= 10 && obj.count < 30){
			alert('Вы классический зритель.');
		} else if(obj.count >= 30){
			alert('Вы киноман.');
		} else {
			console.log('Произошла ошибка.');
		}
	},
	showMyDB: function(obj = this){
		if (!obj.private){
			console.log('access proven.');
			console.log(personalMovieDB);
		}	else {
			console.log('Access denied!');
		}
	},
	toggleVisibleMyDB: function(obj = this){
		if(obj.private){
			obj.private = false;
		} else obj.private = true;
	}
};
// console.log(personalMovieDB);

personalMovieDB.start();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeMyGenres();


///////////////