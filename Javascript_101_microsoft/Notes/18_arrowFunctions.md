# Arrow Functions

## Sintaxe
    (parametro) => {return parametro}

## highlights

* São expressadas por = >
* Às vezes são chamadas de funções de seta gorda / fat arrow functions
* Altera para o contexto this 
* Possui suporte a valores de retorno implícitos (não precisa de return)
* Deve ser atribuído a uma variável ou ser usado imediatamente
* Redução de caracteres digitados

## Exemplos
    
    //Sem return
    const add = (a,b) => a + b; 
    console.log (add(1,2));

    //Com return
    const subtract = (a,b) =>{
    return a - b;
    }
    console.log(subtract(2,1))

## Contexto this

* É herdado do escopo pai.
* Não pode ser mudado. 
* Mantido quando uma função é passada como referência.


## Retorno implícito 

* Somente para funções de uma única linha a qual retorna o resultado de uma instrução
* Uso do { } obrigatório sempre que incluir várias linhas
