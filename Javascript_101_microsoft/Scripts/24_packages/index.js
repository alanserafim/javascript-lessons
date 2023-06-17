// No terminal: npm init -y
// para criar o arquivo package.json

//instalando o pretier em devDependencies
// npm instal --save-dev pretier
//adcionamos ao package.json script "format": "prettier --write *.js"
// funcionou com $ npx prettier --write .

//instalando o express
// npm instal express
// package.json scripts -- "start":  "node index.js"
// npm run start

//instalando o dotenv - váriaveis de ambiente, segurança do código
// npm instal dotenv
// criar arquivo .env => port=5000

//para não subir no git criamos um git ignore e adiconamos o .env e a pasta node_modules

require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  re.send("Hello World!");
});


/* 
app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
}); */


app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`);
});

