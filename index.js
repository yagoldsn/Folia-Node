//carregando modulos
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const banco = require("./SRC/config/DB");
const path = require("path"); //modulo para usar pasta de arquivos estaticos
const admin = require("./SRC/router/admin");
const session =require ('express-session');
const flash  = require('connect-flash');


//config

//Sessão
app.use(session({
  secret:"foliacaboclo",
  resave:true,
  saveUninitialized:true
}))
//Flash
app.use(flash());
//middleware
app.use((req,res,next) =>{
  //declaração variaveis globais
  res.locals.usuarioLogado = 'admin';
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})

//handlebars template engine
const optionsHandlebars = handlebars.create({
  defaultLayout: "main",
  helpers: {
    /* Para usar o helpers basta adicionar #nomeDaRegra dentro da tag a utilizar e fechar ela depois de utilizada
    ex: <h1>{{#tipoPessoa teste}}{{/tipoPessoa}}</h1>
    */
    tipoUsuario: function (value, test) {//checked nome função, value e teste sao os valores para testar
      if (value == undefined) return "";//validação de valor não definido, retornar vazio
      return value == test ? value : "";//validação se value == teste; retornar se verdadeiro; retornar se falso
    }
  }
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
