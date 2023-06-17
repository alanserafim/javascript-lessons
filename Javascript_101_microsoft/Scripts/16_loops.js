/* const nomes = ['Alan', 'Mauro', 'Claudio'] */

// ======> while (aula)

/* let index = 0;
while (index < nomes.length){
    const nome = nomes[index];
    console.log(nome);
    index++;
} */

// ========> for (aula)

/* for (let index = 0; index < nomes.length; index++){
    const nome = nomes[index];
    console.log(nome);
} */

// =========> for ... of (aula)
/* for (let nome of nomes) {
    console.log(nome);
}
 */

// ===============================> Demo

const nomes = ['Deschamp', 'Akita', 'Vieira']
const data = [
    {name: 'Alura', active: true},
    {name: 'Tribe', active: true},
    {name: 'Dio', active: true},
]

/*  WHILE  */

/* let index = 0;
while (index < nomes.length){
    const nome = nomes[index];
    console.log(nome);
    index++;
} */


// array de objetos
/* let index = 0;
while (index < data.length){
    const value = data[index]
    console.log(value.name);
    index++;
} */

/* FOR  */

/* for (let index = 0; index < nomes.length; index++){
    const nome = nomes[index];
    console.log(nome)
}  */

//Array de objetos
/* for (let index = 0; index < data.length; index++){
    const value = data[index];
    console.log(value.name);
} 
 */

/* FOR  ... OF */
/* 
for (let xpto of nomes){
    console.log(xpto);
} */

for (let value of data){
    console.log(value.name);
}
