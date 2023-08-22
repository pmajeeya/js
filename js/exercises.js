//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const k = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i < k; i++){
	for (let j = 0; j < k - i; j++){
		result += ' ';
	}
	for(let j = 0; j < 2 * i + 1; j++){
		result += '*';
	}
	result += '\n';
} 
console.log(result);

////////////////////////////////////////




function sayHello(name) {
	return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));
// Место для второй задачи
function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(4));
// Место для третьей задачи
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20
function getMathResult(one, two) {
	let result = one;
	for(let i = 0, m = 2; i < two - 1; i++){
		if(two <= 0 || typeof(two) != 'number'){
			return one;
		}
		result +='---' + one * m;
		m++;
	}
	return result;
}



/////////////////////////////////////////




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

/////////////////////////////////////


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
///////////////////


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







//////////////////////

//ES9

// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%',
// 		},
// 		exp: '1 month'
// 	},
// 	showAgeAndLangs: function(plan){
// 		const {
// 			skills: {
// 				languages: [...langs]
// 			}
// 		} = plan;
// 		let result = '';
// 		for(let key of langs){
// 			result += `${key} `;
// 		}
// 		console.log(`Мне ${plan.age} лет и я владею языками: ${(result.toUpperCase()).trim()}`);
// 	}
// };
// // personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
// 	let {
// 		skills: {
// 			exp,
// 			programmingLangs: {
// 				...langs
// 			}
// 		}} = plan;
// 	console.log(exp);
// }

// // showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
// 	const {
// 		skills: {
// 			programmingLangs: {
// 				...langs
// 			} 
// 		}
// 	} = plan;
// 	let result = '';
// 	for(let key in langs){
// 		result += `Язык ${key} изучен на ${langs[key]} \n`;
// 	}
// 	console.log(result);
// }

// showProgrammingLangs(personalPlanPeter);

//ES6, stolen solution


const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(obj = this){
		const {age, skills:{languages}} = obj;
		let result = '';
		for(let key of languages){
			result += `${key} `;
		}
		return `Мне ${age} лет и я владею языками: ${(result.toUpperCase()).trim()}`;
	}
};
console.log(personalPlanPeter.showAgeAndLangs());

function showExperience(plan) {
	let {skills: {exp}} = plan;
	return exp;
}

function showProgrammingLangs(plan) {
	let {skills: {programmingLangs}} = plan;
	let result = '';
	for(let key in programmingLangs){
		result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return result;
}
console.log(showProgrammingLangs(personalPlanPeter));