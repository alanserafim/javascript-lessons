// =======> criando um objeto em JavaScript
// todas as funções que correspondem a ações do objeto (livro) chamamos de métodos

/* const book = {
    title: "Eloquent JavaScript",
    author: "Marjin Haverbeke",
    isAvailable: true,

    checkIn: function (){
        this.isAvailable = true;
    },

    checkOut: function(){
        this.isAvailable = false;
    }
};

book.checkOut()
book.checkIn()
console.log(book) */


// =======> uso do construtor new

const book = new Object();

book.title = "1984";
book.author = "George Orwell";
book.isAvailable = false;

book.checkIn = function() {
    this.isAvailable = true
};

book.checkOut = function() {
    this.isAvailable = false
};

book.checkIn();
console.log(book);




// =======> uso do operador: this
// Observar exemplos acima