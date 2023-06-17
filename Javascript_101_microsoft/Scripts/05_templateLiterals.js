let str1 = 'JavaScript';
let str2 = "Legal";

// ====> sem template literals
console.log("Estou escrevendo códigos em", str1);
console.log('Estou escrevendo códigos em ' + str1);

// ====> com template literals
console.log(`Estou escrevendo códigos em ${str1}`);

// ====> Concatenação de variáveis

// ====> com template literals
console.log(`Formatando strings em ${str1} é ${str2}!`);

// ====> Quebra de linhas
console.log("Podemos pular linhas com o uso de \/n \n\n\nDessa forma");

// ====> Quebra de linha com template literals
console.log(`Podemos pular linhas 

Dessa forma`);

// ====> expressões com template literals 
let bool1 = true;

const getValue = (num) => {
    return num + num 
}

// negando um boleano
console.log(`O oposto de true é ${!bool1}`);

// cálculos
console.log(`1 + 1 é ${1+1}`);

//chamada de funções
console.log(`Resultado: ${getValue(10)}`);




