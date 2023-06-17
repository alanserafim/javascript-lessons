# Criando arrays

O que é um array?

## Lista ou coleção de valores
Arrays podem conter muitos valores diferentes de vários tipos de dados diferentes.

## Cada elemento possui um index
Um index é um valor numérico único que representa os dados dentro de um array.

## Array length
Depois que um array é criado, você pode verificar seu tamanho a qualquer momento usando a propriedade length. por exemplo: arrayName.length

## Criando um Array
    let arrayLength = 5;
    let arr1 = [];
    let arr2 = Array(arrayLength)

## Retornando o tamanho de um array
    console.log(arr1.length)


# Populando Arrays
Adicionando dados para um array
* Durante a criação de um array --> let arr1 = ['A', true, 2]
* Após a criação de um array --> let arrayLength = 2 // let arr2 = Array(arrayLenght) // let arr2[0] = "vazio"


## Length e Index
* Length: soma dos espaços que foram alocadores para valores no array
* Index: numera os valores de um array começando o seu índice em 0
* A propriedade length sempre será maior do que a propriedade index: porque index começa em 0. O indíce do último aray será o tamanho subtraído por 1.

# Manipulando arrays 

## Push e Pop - Afeta o final do array
* array.push(values) -> adiciona um ou mais valores ao final de um array e retorna o novo tamanho desse array.
* array.pop() -> remove o último valor de um array e retorna o valor do array removido

## Push
    let arr1 = ['A', true, 42]
    console.log(arr1.push('novo valor')) // 4
    console.log(arr1) // ['A', true, 42, 'novo valor']
    
## Pop -> remove o último valor 
    console.log(arr1.pop()); // new value
    console.log(arr1) // ['A', true, 42]

## Shift e Unshift - Afeta o início do array
* array.shift() -> remove o primeiro valor do array e retorna o valor removido
* array.unshift(values) -> adiciona um ou mais valores no início de um array e retorna valor do tamanho do array atualizado

## Unshift -> adiciona no início
    let arr1 = ["A", true, 42]
    console.log(arr1.unshift("novo valor")) // 4
    console.log (arr1) // ["novo valor", "A", true, 42]

## shift -> remove do início
    console.log(arr1.shift()) // "novo valor"
    console.log(arr1) // ["A", true, 42]

    
## Concat -> Une dois arrays para criar um novo array
    let serafins = ["Alan", "Tereza", "Emerson"]
    let oliveiras = ["Bia", "Gabriel", "Marcio", "Tania", "Rafael"]
    let oliveiraSerafins = serafins.concat(oliveiras)
    console.log(oliveiraSerafins) // ["Alan", "Tereza", "Emerson", "Bia", "Gabriel", "Marcio", "Tania", "Rafael"]
    

