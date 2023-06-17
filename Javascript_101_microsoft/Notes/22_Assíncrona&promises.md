# Programação assíncrona e promises

**Determinadas operações podem demorar um pouco mais**

Ex: Arquivos de E/S (entrada e saída), chamadas REST, Operação de Banco de Dados, Cálculos complexos.

**Execução de bloco de operações de longa duração**

A maioria das aplicações é thread único. Um processo de trabalho ou atividade por vez. Muitas vezes, a interface do usuário ou aplicação podem parecer 'congelados' ou seja nenhuma outra tarefa pode ser executada.

**Gerenciado originalmente por meio de callbacks**
    
    function callback(){
        console.log('Timeout concluído')
    }

    setTimeout (callback, 3000); // espera 3 segundos

**A cascata pode ser um grande problema**

    Imagem de um função com diversas outras dentro.


## Use promises

**Padrão comum de desenvolvimento**
Versão mais limpas de callbacks

**Versões recentes do JavaScript possue já integrado o objeto Promise**
Operações de longa execução normalmente retornam um Promise.

## Promise

exemplo:

    function promiseTimeout(ms){
            return new Promisse ((resolve, reject) => {
                setTimeout(resolve, ms);
            });
    }

    promiseTimeout(2000)
        .then(()=> {
            console.log('done');
            return Promise.resolve(42);

        })
        .then((response)=> {
            console.log(response);
        });

        .catch(()=> {
            console.log('cool error handling');
        })