// Objeto chamado livro --> book

/* const book = {
    title: "Eloquent JavaScript",
    author: "Marjin Haverbeke",
    isAvailable: true
} */

// JSON.stringify()
/* const bookToJSON = JSON.stringify(book);
console.log(bookToJSON) */


// JSON.parse()

const jsonObjt = '{"title":"Eloquent JavaScript","author":"Marjin Haverbeke","isAvailable":true}'
const book = JSON.parse(jsonObjt)
console.log(book.title);