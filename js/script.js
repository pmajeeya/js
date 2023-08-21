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



function getTimeFromMinutes(minc){
	let hr = Math.trunc(minc / 60),
		min = (minc % 60),
		hrDecl;
	if(hr === 1){
		hrDecl = 'час';
	} else if(hr > 1 && hr <= 4){
		hrDecl = 'часа';
	} else {
		hrDecl = 'часов';
	}
	if(isNaN(minc) === true || minc < 0 || minc %1 !== 0/*|| minc > 600*/){
		return 'Ошибка, проверьте данные';
	} else {
		return `Это ${hr} ${hrDecl} и ${min} минут`;
	}
}

// Место для второй задачи

function findMaxNumber(one, two, three, four) {
	let result = Math.max(one, two, three, four),
		valid;
	for(let i = 0; i < 4; i++){
		if (typeof(arguments[i]) === 'number'){
			valid = true;
		} else {
			valid = false;
			return 0;
		}
		// console.log(arguments[i] + ' is ' + valid);
	}
	return result;
}