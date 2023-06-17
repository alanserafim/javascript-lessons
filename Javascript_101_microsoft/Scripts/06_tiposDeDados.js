// ==> Tipos de Dados em JavaScript

//number
let idade = 33;
console.log(idade);
console.log(typeof(idade));
console.log("");

//float
let precoMouse = 19.99;
console.log(precoMouse);
console.log(typeof(precoMouse));
console.log("");

//string
let nome = "Alan";
console.log(nome);
console.log(typeof(nome)); 
console.log("");

//Boolean
let nomeVerdadeiro = true;
console.log(nomeVerdadeiro);
console.log(typeof(nomeVerdadeiro));
console.log("");

let nomeFalso = false;
console.log(nomeFalso);
console.log(typeof(nomeFalso));
console.log("");

//date
let dataHoje = new Date();
console.log(dataHoje);
console.log(typeof(dataHoje))
console.log("");

//function
let resultado = adicionarNumeros(5,2)
function adicionarNumeros (num1, num2) {
    return num1 + num2;
}
console.log(resultado);
console.log(typeof(adicionarNumeros));
console.log("");

//array
let frutas = ['Banana', 'Morango', 'Goiaba'];
console.log(frutas);
console.log(typeof(frutas));
console.log("");

//Object
const pessoa = {
    nome: "Alan",
    sobrenome: "Nunes",
    idade: 30
};

console.log(pessoa);
console.log(typeof(pessoa));
console.log("");

//Tipos de Dados Especiais em JavaScript
// NaN (é number)

let num = NaN;
console.log(typeof num); // "number"
console.log(num == NaN); // falso
console.log(num === NaN); // falso
console.log("");

// Null
let variavelQualquer = null;
console.log(variavelQualquer);
console.log("");

// Undefined
let carro = undefined;
console.log(carro);
console.log("");

//type of
console.log(typeof 1);
console.log(typeof 'Alan');
console.log("");

// istanceof
class Carro {};
let sedan = new Carro();
console.log(sedan instanceof Carro);
console.log("");

// igualdade estrita
// comparar valor e tipo
console.log(20 === 20); // comparando valor e tipo por isso ===
console.log('20' === 20);
console.log("");

// igualdade solta 
// compara valores
console.log(20 == 20);
console.log('1' == 1);
console.log("");















