# Gerencie seus pacotes/packages do node.js

## O que é um pacote (packages)

Um pacote é um conjunto de reutilizavel de código e/ou funcionalidades

Termo utilizado para um conjunto de código que disponibilizado publicamente. 


    ex: bibliotecas, ferramentas, componentes compartilhados, e a sua aplicação.

Os pacotes também são chamados de dependências ou módulos.

## NPM (node package manager) - O maior registro de software do mundo

Lugar onde você pode encontrar e baixar pacotes

NPM também é um CLI empacotado de cada instalação do node.js

## Por que pacotes são importantes

Uso do pacote require para exibição de um hello word sem um html

    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        re.send('Hello World!');
    });

    app.listen(3000, ()=> {
        console.log("Server listening at http://localhost:3000");
    });

## package.json

Ponto de partida de todo projeto

* Metadados: nome do seu projeto, versão, descrição, autor, repositório, licença, etc.
* Dependências: a lsita de pacotes usados por seu projeto.
* Scripts: comandos para automatizar suas tarefas de desenvolvimento.

## Criando um novo projeto

    npm init

O comando npm init permite criar um arquivo package.json

**Dica**
Você pode usar a opção npm -y para criar um arquivo padrão package.json pular alguns passos na criação.


## Instalando pacotes/packages

    npm install <package_name>

Baixar e adicionar um determinado pacote para dependencies

    npm install --save-dev <package_name>

Baixar e adicionar um determinado pacote devDependencies

## Dependendencies VS DevDependencies

* dependencies: programas necessários para a produção (para aplicação funcionar).
* devDependendencies: programas usados para desenvolvimento (compressores, transpiladores, ferramentas de debug).