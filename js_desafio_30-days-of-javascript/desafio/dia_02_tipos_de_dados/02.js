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

// let js = 'JavaScript'
// let jsLength = js.length
// let lastIndex = js.length -1

// console.log(`Lenght: ${jsLength}`);
// console.log(`First index value: ${js[0]}`);
// console.log(`last index ${lastIndex}`);

// console.log(js.toUpperCase());
// console.log(js.toLowerCase());


// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script

// // substr(): It takes two arguments, the starting index and number of characters to slice.

// let country = 'Finland'
// console.log(country.substr(3, 4))   // land

// //substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// console.log(string.substring(0,4))    
// console.log(country.substring(3, 7))   

// let string = '30 Days Of JavaScript'

// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Alan'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.

// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

// includes(): It takes a substring argument and it checks if substring argument exists in the string. 
// includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

// let bio = "Alan Nunes é Desenvolvedor de Software"

// console.log(bio.includes("Desenvolvedor"));

// replace(): takes as a parameter the old substring and a new substring.

// let bio = "Alan Nunes é Desenvolvedor de Software"
// bio = bio.replace("Software", "Sistema")
// console.log(bio);

//indexOf(): Takes a substring and if the substring exists in a string
//it returns the first position of the substring if does not exist it returns -1
// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('Script'))     //15
// console.log(string.lastIndexOf('Script'))     


// let challenge = '30 Days Of JavaScript'
// let first = "30 Days of", second = "JavaScript"
// console.log(challenge.repeat(2))

// let setence = 'You cannot end a sentence with because because because is a conjunction'
// console.log(setence.search("because"));



// let phrase = 'I hope this course is not full of jargon'
// console.log(phrase.includes('jargon'));

/*
```javascript
let randomNum = Math.random()  // generates 0 to 0.999
console.log("Random number: ",randomNum);

let randomNumBetweenZeroAndTen = Math.random() *  11   // this gives: min 0 and max 10.99
console.log("Random between 0 and 10.999... : ",randomNumBetweenZeroAndTen);

let randomNumRoundFloor= Math.floor(Math.random() * 11) // this gives between 0 and 10
console.log("Random between zero and ten: ",randomNumRoundFloor);

```
*/

//console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

// let pattern = /love/gi
// let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(string.match(pattern).length)  

const sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
let values = sentence.match(regEx)
let sum = values.reduce((a,b) => parseInt(a) + parseInt(b))

console.log(sum);