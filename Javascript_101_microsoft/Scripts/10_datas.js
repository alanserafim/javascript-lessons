// ==> criando objetos
const agora = new Date ();
console.log(agora);

// ====> configurando valores
// todos os campos
const ahora = new Date(2017, 8, 3, 5, 34 );
console.log(ahora);

// só data
console.log(new Date(2050, 6, 9))

// Item por item
ahora.setFullYear(2800);
ahora.setMonth(5);
ahora.setHours(8,43)
console.log(ahora);

// ====> retornando valores
const minhaData = new Date();

const mes = minhaData.getMonth();
const ano = minhaData.getFullYear();
const dia = minhaData.getDate();

console.log(dia,'/',mes,'/',ano);
