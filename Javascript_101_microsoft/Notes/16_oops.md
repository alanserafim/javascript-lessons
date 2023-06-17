# Loops (Laços)

* Execute os códigos várias vezes
* Tipos de loops comuns: while, for, for ... of.
  
## while
    const nomes = ['Alan', 'Mauro', 'Claudio']
    let index = 0;
    while (index < nomes.length){
        const nome = nomes[index];
        console.log(nome);
        index++;
    }

## for
    const nomes = ['Alan', 'Mauro', 'Claudio']
    for (let index = 0; index < nomes.length; index++){
    const nome = nomes[index];
    console.log(nome);
    }

## for ... of
    const nomes = ['Alan', 'Mauro', 'Claudio']
    for (let nome of nomes) {
    console.log(nome);
    }

## Escolhendo o Laço certo
* *while*: ao chamar uma função que retorna falso ou nulo quando for concluída
* *for*: ao realizar loop um número conhecido de vezes
*  *for ... of*: iteração de uma coleção de itens
