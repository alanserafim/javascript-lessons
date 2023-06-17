# Lógica Booleana com declarações with

## Comparando valores em JS

### operadores relacionais
    <  : para número menor ou mais próximo do início do valor
    <= : para um número menor ou igual ou mais próximo do início do valor
    >  : para um número maior ou mais longe do início do valor
    >= : para maior ou igual 

    !=  : verifica a não igualdade, idependente do tipo de dado
    !== : verifica se há valores e tipos de dados não iguais

    && : E
    || : ou
    !  : negação

    ==  : valores iguais
    === : valores e tipagem igual


## Declarações IF

    const status = 200;
    if (status === 200){
        console.log('OK!');
    } else if (status === 400){
        console.log('Error!);
    } else {
        console.log('Unknown status');
    }

### Formas alternativas de escrever declarações if

#### Não é { } necessário no if se estiver usando uma única linha
    
    const status = 200;
    if (status === 200) console.log ('OK!');
    else if (status === 400) console.log ("Error!')
    else console.log('Unknow status');

#### Ternário

    const message = (status === 200) ? "OK!" : "Error!";


