// ======> SORT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let listaPrecos = [29, 11, 101, 1, 110]
let precosOrdenados = listaPrecos.sort(function(a,b){
    return a + b
})

console.log(precosOrdenados);

let precos = [12, 14, 1, 20, 110];

//let precosOrdenadosUnicode = precos.sort();
//let precosOrdenadosASC = precos.sort(function(a, b) { return a - b });
let precosOrdenadosDES = precos.sort((a, b) => b - a);

//console.log(precosOrdenadosUnicode)
//console.log(precosOrdenadosASC)
console.log(precosOrdenadosDES)
