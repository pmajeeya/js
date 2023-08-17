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
