//carregando modulos
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const banco = require("./SRC/config/DB");
const path = require("path"); //modulo para usar pasta de arquivos estaticos
const admin = require("./SRC/router/admin");

//config
//handlebars template engine
const optionsHandlebars = handlebars.create({
  defaultLayout: "main",
});
app.engine("handlebars", optionsHandlebars.engine);
app.set("view engine", "handlebars");
//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//public
app.use(express.static(path.join(__dirname, "public")));

//teste banco conectando
banco
  .then(() => {
    console.log("Conectado ao Mongo com sucesso!!");
  })
  .catch((error) => {
    console.log("Erro ao se conectar: " + error);
  });

//rotas
app.use("/admin", admin);

//configuração de porta http
app.listen(2000, () => {
  console.log("Servidor Rodando na url http://localhost:2000/admin");
});
