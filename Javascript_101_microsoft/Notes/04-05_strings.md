# **Strings**

    Combinação de variáveis ou strings, string literais, concatenação de strings criarão novas strings
    aspas simples ' ' ou duplas " "

## Concatenação de strings

    Operador +:
        let str1 = "Olá"
        let str2 = "Mundo!"

        console.log(str1 + str2)
        console.log(str1 + "Grande" + str2)

    Operador + com espaços: 
        let str1 = "Olá "
        let str2 = "Mundo!"

        console.log(str1 + str2)
        console.log(str1 + "Grande " + str2)

    Operador + com números:
        let num1 = 1;
        let num2 = "1";

        console.log(num1 + num2) // JS entende como concatenação
        console.log(num1 + 1) // JS entende como soma

    Evitando problemas com números (concat):
        let str1 = "0 ";
        let str2 = "plus ";
        let str3 = "1 = ";
        let num1 = 1;

        let res = str1.concat(str2, str3, num1)
        console.log(res);

## Template literals

    Uso de marcadores ${} para variáveis ou expressões
    Respeita quebras de linha. Não precisa do caractere \n para incluir uma nova linha
    Requerem apenas o uso do acento grave / crase ` `

    Exemplo:
    let str1 = 'JavaScript';
    let str2 = "Legal";

    // ====> com template literals
    console.log(`Estou escrevendo códigos em ${str1}`);

    // ====> Concatenação de variáveis

    // ====> com template literals
    console.log(`Formatando strings em ${str1} é ${str2}!`);

    // ====> expressões com template literals 
    let bool1 = true;

    const getValue = (num) => {
        return num + num 
    }

    // negando um boleano
    console.log(`O oposto de true é ${!bool1}`);

    // cálculos
    console.log(`1 + 1 é ${1+1}`);

    //chamada de funções
    console.log(`Resultado: ${getValue(10)}`);

## Quebra de linha

    // ====> Quebra de linha simples: \n
    console.log("Podemos pular linhas com o uso de \/n \n\n\nDessa forma");

    // ====> Quebra de linha com template literals: espaço no código
    console.log(`Podemos pular linhas 

    Dessa forma`);