// Место для первой задачи

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

console.log(getMathResult(10, 3));


console.log(typeof('2'));

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20