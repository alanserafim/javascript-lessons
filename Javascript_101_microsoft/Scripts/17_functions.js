// =====> Exemplo 1 - Função
/* 
function quadrado (numero){
    return numero * numero;
}
console.log(quadrado(6)); */


// =====> Exemplo 2 - Função

/* function valorProdutoDesconto(preco, desconto){
    let resultado = preco * desconto;
    console.log('Você economizou ....: R$ ' + resultado);
    return preco - desconto
}

console.log(valorProdutoDesconto(50, 0.2)) */


// =====> Exemplo 3 - Função (return)
function conversorCelsiusFahrenheit(celsius){
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(conversorCelsiusFahrenheit(40));