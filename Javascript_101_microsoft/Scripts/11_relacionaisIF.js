/*
...........OPERADORES
.....<.....Menor
.....<=....Menor-igual
.....>.....Maior
.....>=....Maior-igual
.....==....Valores iguais
.....===...Valores e tipagem igual
.....&&....E
.....||....OU
.....!==...Não igual
.....!.....Negação
*/

// ========================================> Negação

/* const active = true;
if (!active){
    console.log("IF");
} else {
    console.log("Else")
} */

// =======================================> IF Padrão

/* const estatus = 200;
if (estatus === 200){
    console.log("OK");
} else if (estatus === 400){
    console.log("Error!");
} else {
    console.log("Unknown status");
}
 */
//========================================> IF inline // quando só existe uma instrução de retorno de informação dispensa o uso de chaves
/* const estatus = 600;
if (estatus === 200) console.log("OK");
else if (estatus === 400) console.log("Error!");
else console.log("Unknown status"); */

// =======================================> Operador ternário // trabalha com duas condições a primeira se for verdadeiro e a segunda se for falso
/* const estatus = 200;
const message = (estatus === 200) ? "OK" : "Error"
console.log(message); */

//========================================> Verificar a igualdade de strings
/* const name = "Diego";
if (name === "Diego"){
    console.log("IF")
} else {
    console.log("Else")
} */

// =======================================> Verificar igualdade - Number (===)
/* const age = "42";
if (age === 42) console.log("IF");
else console.log("Else"); */

// =======================================> &&
/* const status = 200;
const active = false;
if (status === 200 && active === true){
    console.log("IF");
} else {
    console.log("Else");
} */

// =======================================> ||
/* const status = 200;
const active = false;
if (status === 200 || active === true){
    console.log("IF");
} else {
    console.log("Else");
} */

// =======================================> Menor, maior, maior-igual, menor-igual, diferente
/* const num1 = 200;
if (num1 !== 300) console.log("IF");
else console.log("Else");

if (num1 > 300) console.log("IF");
else console.log("Else");

if (num1 >= 300) console.log("IF");
else console.log("Else");

if (num1 < 300) console.log("IF");
else console.log("Else");

if (num1 <= 300) console.log("IF");
else console.log("Else"); */