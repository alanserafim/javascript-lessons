# **Tipos de Dados**

JavaScript possui tipagem considerada fraca ou dinâmica
* Tipos simples da linguagem ====> number (float), String, Boolean, Date, Function, Array e Object
* Tipos especiais ====> NaN, null, undefined

## Verificando tipos

Operador **type of**
* Retorna uma string do tipo de dado primitive   

Operador **instance of**
* Retorna um booleano se um valor corresponder ao tipo do dado
* Verifica se objeto possui em seu prototype a função construtora

## Comparando dados

### Igualdade estrita
    uso de três sinais de igual ===
    *Compara valor e tipo*
        console.log(20 === 20); //true
        console.log('20' === 20); //false

### Igualdade solta
    uso de dois sinais de ==
    *compara somente valores*
    console.log(20 == 20); //true
    console.log('1' == 1); //true



