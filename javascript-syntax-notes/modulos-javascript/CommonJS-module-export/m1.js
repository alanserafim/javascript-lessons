function ola() {
    const texto = "Olá";
    console.log(texto);
}

function tchau() {
    const texto = "Tchau";
    console.log(texto);
}

const nome = "Alan"

module.exports = { ola, tchau, nome};

/* 
CommonJS modules  ==> oriundos do Node.js 

1. npm init -y
2. module.exports = { }; or module.exports = function(){} // module.exports = const a = "123"
3. const xxxx = require("./arquivo.js");

references: https://www.freecodecamp.org/news/modules-in-javascript/#commonjsmodules


*/