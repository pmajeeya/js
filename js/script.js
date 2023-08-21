/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

// selfshitcode^^

// function valid(prompt , type){
// 	if (prompt == '' || prompt == null || typeof(prompt) != type || prompt.lenght > 50 ){
// 		//continue valid;
// 		//:(((((
// 	}
// }

function start() {
	valid: numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms(){
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			  b = prompt('На сколько оцените его?', '');
		personalMovieDB.movies[a] = b;
		if (a != null && b !=null && a != '' && b != '' && a.length < 50){
			console.log('done!');
		} else {
			console.log('error!');
			i--;
		}	
	}
}

// rememberMyFilms();

function writeMyGenres(){
	for (let i = 1; i <= 3; i++){
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}:`, '');
	}
}

writeMyGenres();


function detectPersonalLevel(){
	if(personalMovieDB.count < 10){
		alert('Просмотрено довольно мало фильмов.');
	}	else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		alert('Вы классический зритель.');
	} else if(personalMovieDB.count >= 30){
		alert('Вы киноман.');
	} else {
		console.log('Произошла ошибка.');
	}
}

// detectPersonalLevel();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}	else {
		console.log('Access error!');
	}
}
showMyDB(personalMovieDB.private);

///////////////



function fib(arg){
	let result = '',
		fib = [0, 1],
		fibc = 1,
		fibcp = 0,
		i = 0;
	if(typeof(arg) === 'number'){
		while (i < arg){
			let fibn = fibc + fibcp;   
			fibcp = fibc;
			fibc = fibn;
			if(i != 0) {
				result += ` ${fibc}`;
				// console.log(`${fibc} + ${fibcp} + ${fibn} test`);
			} else{ 
				fibc = 0;
				result += `${fibc}`;
			}
			i++;
		}
		return result;
	} else return '';
}
console.log(fib(1));