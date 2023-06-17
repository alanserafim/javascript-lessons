# Conversão entre numbers e strings

# parseInt()
Converte strings numéricas em números

Exemplos de conversões: strings -> inteiros: parseInt()

    var numeroDecimal = parseInt("50");
    console.log(numeroDecimal);
    console.log(typeof numeroDecimal);

    var hexadecimal = parseInt("0xF");
    console.log(hexadecimal);
    console.log(typeof hexadecimal);

    var alfabeto = parseInt("ABCDE");
    console.log(alfabeto); //NaN

# parseFloat()
Analise um determinado argumento string e retorna um número de ponto flutuante

Exemplos de conversões: strings -> Floats: parseFloat()

    var mouse = parseFloat("29.90");
    console.log(mouse);
    console.log(typeof mouse);

    var uva = parseFloat("5.00");
    console.log(uva);


# toString()
Converte números em strings numéricas

Exemplos de conversões: Números -> Strings: toString()
   
    var num = 33;
    var idade = num.toString();
    console.log(idade)
    console.log(typeof idade)

# template literals
    
Exemplos de conversões: template literals

    const funcionario = {
        nome: "Fulano de tal",
        idade: 40, 
        profissao: "Software Engineer", 
        salario: 10000.00
    }

    console.log(`O funcionario ${funcionario.nome} tem idade de ${funcionario.idade} anos. 
                Ele trabalha como ${funcionario.profissao} e ganha em torno de R$ ${funcionario.salario} reais.`);