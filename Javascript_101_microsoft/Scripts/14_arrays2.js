// Criando um array com dados

let arr1 = ['Diego', 22, true]
// console.log(arr1);

// ===============> ARRAY LENGTH

// console.log(arr1.length);


// ================> ARRAY INDEX

// console.log(arr1[1]);
// console.log(Object.keys(arr1)); // acessa diretamente a chave do objeto
// console.log(Object.values(arr1)); // acessa diretamente o valor do objeto


// ===================> inserindo dados no array criado
/* let arrayLength = 2;
let arr2 = Array(arrayLength) // Definindo o tamnho 
arr2[0] = 55;
arr2[1] = true
console.log(arr2);


let arr3 = [] // sem definir o tamanho do array
arr3[0] = 55 
arr3[1] = true
arr3[2] = 'Alan Nunes'
console.log(arr3); */

// ==============> Inserindo dados no array criado já com dados
/* let arr4 = ["Mauro", 67, true];
arr4.push ('encanador', 'turismo');
console.log(arr4);
 */

// ==============> Inserindo dados no array criado já com dados - Spread Operator (ES6)
/* let arr5 = ['A', 'B']
let arr6 = [...arr5, 'C', 'D']
console.log(arr6); */

// ====> concatenando arrays

//Método 1
/* let numbers = [1, 2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers); */

//Método 2
let data = ['Alan', 30, true]
let moreData = ['Bozo', 66, false]
data.push(...moreData)
console.log(data)