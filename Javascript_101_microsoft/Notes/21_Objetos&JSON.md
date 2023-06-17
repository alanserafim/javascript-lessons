# Objetos em JavaScript


## 1. O que são objetos?

No mundo real está cheio de objetos. 
    
    ex: livros, músicas, bibliotecas, animais.

Objetos reais possuem atributos associados
    
    ex: book title, book author, book availability(at library)

Objetos reais têm ações associadas
    
    ex: verificar o livro na biblioteca


## 2. O que são os objetos em JavaScript?

São representações de objetos do mundo real, usando código.

    ex: book, song, library, playlist.

Objetos JavaScript têm propriedades associadas

    ex: book has title, author, isAvalable.

Objetos JavaScript têm métodos associados

    ex: You can checkIn, checkOut a book.


## 3. Sintaxe e criação de objeto (literal)

Coleção de pares nome = valor não ordenados!

Pense em hashMaps (nome é a chave, mapeia para valor)

    ex: title="1984", checkin=function(){ ... }

Este é um exemplo de objeto literal.

É a maneira mais fácil de criar um objeto JavaScript. 

Apenas coloque pares nome-valor entre { } - separados por vírgula. 

    ex: const book = {

            title: "Dom Casmurro",
            author: "Machado de Assis",
            isAvailable: false,

            checkIn: function(){
                this.isAvailable=true;
            },

            checkOut: function(){
                this.isAvailable=false
            }
        };


## 4. Criação de objetos (construtor)

Você também pode criar objetos de outras maneiras. 

    ex: usando "new" como um construtor de objeto ou função.
    
    const book = new Object();
    book.title = "Dom Casmurro";
    book.author = "Machado de Assis";
    book.isAvailable = false;

    book.checkIn = function (){
        this.isAvailable=true;    
    };
    
    book.checkOut = function () {
        this.isAvailable=false;
    };

Pense em construtores como templates.

O objeto é um 'template' para um objeto base.

Uma vez construído você pode adicionar ou modificar as propriedade e metódos. 

Objetos criados com "new" agem exatamente como os literais. 


## 5. Propriedades do objeto (atributos)

**As propriedades têm nomes imutáveis e valores mutáveis.**

---> Você deve nomeá-los usando as mesma convenções das variavéis.

<br>

**Abordagem 1: notação com ponto**

Use: object.name (como no namespaces)

    ex: book.title retorna "Dom Casmurro"

<br>

**Abordagem 2: Notação de colchetes** 

Use: object["name"] (como nos hashmaps)

    ex: book["title"] retorna "Dom Casmurro"


## 6. Métodos de objetos (ações)

**Métodos são propriedades especiais cujos valores são definições de funções.**

Eles são usados para definir tarefas que operam em dados de objeto.<br>

**Métodos de acesso, assim como propriedades**
    
    ex: book.checkIn // retorna [Function: checkIn]
    ex: book["checkIn"] // retorna [Function: checkIn]

<br>

**Invocar métodos como funções**

    ex: book.checkIn() // executa o método
    ex: book["checkIn"]() faz o mesmo

<br>

## 7. A palavra reservada "this" (contexto)

    ex: const book = {
        isAvailable: false,
        checkIn: function(){
            this.isAvailable=true;
            return this;
        }
    };

    console.log(book.checkIn()); // print book object

    function checkIn() {
        return this;
    }

    console.log(checkIn()); // prints global object

<br>

**As funções precisam de acesso ao contexto tempo de execução.**

Métodos (object) podem precisar de acesso a valores de propriedade de mesmo nível.

Funções (Standalone) podem usar variáveis globais na execução.

<br>

**"this" mapeia para contexto relevante em tempo de execução.**

Mapeia para o objeto envolvente - para métodos de objeto.

Mapeia para objeto global - para funções autônomas.

Pode ser indefinido (modo estrito) ou alterado (por exemplo, usar aplicar)

<br>

**Sobre objeto global**

O padrão é o objeto "windows" no tempo de execução do navegador.

O padrão é o objeto "global" no tempo de execução do Node.js.

Use o "globalThis" para fazer referência ao objeto global de forma consistente.





