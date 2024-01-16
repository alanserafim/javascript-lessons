
/// => reduce

/// => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


let precos = [10, 20, 70]

let precoTotal = precos.reduce((acumulador, atual) => acumulador + atual)
console.log(precoTotal)

let maiorPreco = precos.reduce((acumulador, atual) => acumulador > atual ? acc : atual)
console.log(maiorPreco)