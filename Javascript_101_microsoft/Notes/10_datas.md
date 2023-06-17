# Datas em JavaScript

Frase de efeito: "O tempo é um construtor ou pelo menos é um objeto JS.

## Trabalhando com datas e horas em JS

Não é um dado / tipo primitivo.
É um objeto que contém data e hora e essa dado é contado em milissegundos desde 1 Jan 1970.

## Criando um objeto date
    
    // Retornando a data atual
    const now = new Date();

    // Definindo data e hora específicas
    // A contagem do mês começa com zero!
    const randomDate = new Date (2015, 3, 12, 6, 25, 28) // (ano, mês, dia, horas, minutos, segundos)

    // Definindo uma data específica - hora definida para 
    const win95Launch = new Date (1995, 7, 24)
    
## Configurando valores

    const now = newDate();

    now.setFullYear(2014); // Define o ano
    now.setMonth(3) // Abril (a contagem começa no zero)
    now.setDate(4) // define o dia

    now.setHours(4) // 24 horas
    now.setMinutes(24)
    now.setSeconds(46)

    console.log(now)

## Retornando valores

    const now = new Date();

    // todas as funções possuem a palavra "get"
    console.log(now.getMounth());

    // Milisegundos desde 1 Jan 1970
    console.log(now.getTime());

    // dia da semana (Domingo = 0)
    console.log(now.getDay())