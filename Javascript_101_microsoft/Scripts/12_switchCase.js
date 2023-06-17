// Apresentação
// ===========> Valores falsos implícitos
/* const x = 0;
if (x) console.log("x possui um valor");
else console.log("x *Não* um valor");

const y = 0;
if (!y) console.log("y possui um valor");
else console.log("y não possui um valor"); */

/* const nome = "Alan"
if (nome === nome.localeCompare("alan")) console.log("Os valores são os mesmos");
else console.log("Os valores não são os mesmos"); */


// Demo
// ===========> Valores falsos implícitos
/* const x = 0;
const y = null;
const z = undefined;
const w = "";

console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(w));

if (x) console.log("x possui um valor");
else console.log("x *Não* um valor"); */

//invertendo a proposição
/* if (!y) console.log("y possui um valor");
else console.log("y não possui um valor"); */

// Case sensitive
/* const nome = "telles"
if (nome === "Telles") console.log("Os valores são os mesmos!")
else console.log ("Os valores não são os mesmos") */

//localeCompare
/* const nome = 'telles'
console.log(nome.localeCompare("Telles")); */
// retorna negativo se eles não forem equivalentes
// retorna positivo se eles forem equivalentes

/* const estatus = 200;
switch (estatus){
    case 200:
        console.log("OK!");
        break;
    case 400:
    case 500:
        console.log("Error");
        break;
    default:
        console.log("Unknown Value");
        break;
} */

// se não passar o break o switch considera todos os casos até o próximo break