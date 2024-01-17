// MAth Object

// Gerando um número aleatório
// let randomNum = Math.random()  // generates 0 to 0.999
// console.log("Random number: ",randomNum);

// let randomNumBetweenZeroAndTen = Math.random() *  11   // this gives: min 0 and max 10.99
// console.log("Random between 0 and 10.999... : ",randomNumBetweenZeroAndTen);

// let randomNumRoundFloor= Math.floor(Math.random() * 11) // this gives between 0 and 10
// console.log("Random between zero and ten: ",randomNumRoundFloor);


// Escape Sequences

// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//Long Literal Strings

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)

// String Methods

let js = 'JavaScript'
let jsLength = js.length
let lastIndex = js.length -1

// console.log(`Lenght: ${jsLength}`);
// console.log(`First index value: ${js[0]}`);
// console.log(`last index ${lastIndex}`);

console.log(js.toUpperCase());
console.log(js.toLowerCase());


let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land