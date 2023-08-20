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





/////

// V=a^3
// A=6a^2



function calculateVolumeAndArea(edge){
	cubeArea = 6 * (edge * edge);
	cubeVolume = edge * edge * edge;
	if (edge <= 0 || isNaN(edge) === true || edge %1 !== 0){
		return 'При вычислении произошла ошибка';
	}
	return `volume of cube ${cubeVolume}, area - ${cubeArea}`;
	`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

console.log(calculateVolumeAndArea(12.8986433395));


function getCoupeNumber(ticket) {
	if(ticket === 0 || ticket > 36){
		return 'Таких мест в вагоне не существует';
	} else if(isNaN(ticket) || ticket %1 !== 0 || ticket < 0){
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else {
		return Math.ceil(ticket / 4);
	}
}
console.log(getCoupeNumber('hello'));

/*
  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
*/