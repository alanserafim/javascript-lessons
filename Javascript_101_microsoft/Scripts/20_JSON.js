 // Object format
 const book = {
    title: '1984',
    author: 'George Orwell',
    isAvailable: false
};
// Convert to JSON
const bookJSON =  JSON.stringify(book);
console.log(bookJSON)