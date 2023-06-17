// ===> 1) Exemplo do uso de var:

var nome = 'Alan'
console.log('Meu nome é:', nome); 

function imprimirNome() {
    var nome = 'Tereza Julia' 
    console.log('O nome da minha mãe é:', nome);
}

imprimirNome();

// ===> 2) Exemplo do uso de let:
function imprimirIdade(){
    for (let idade = 30; idade <= 50; idade++){
        console.log('Idade dentro do for...:', idade)
    }
    console.log('Idade dentro do for...:', idade)
}
imprimirIdade();

// ===> 3) Exemplo do uso de const:

const pessoa = {
    nome: 'Alan',
    idade: 30
}

function imprimirDadosPessoais(){
    console.log(`Nome: ...${pessoa.nome} - Idade: ${pessoa.idade} anos`)
}

imprimirDadosPessoais();