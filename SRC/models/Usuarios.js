const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definindo o model
const Usuario = new Schema({
    nome:{
        type: String,//tipo de arquivo
        require: true//uso obrigatorio
    }

})

mongoose.model('usuarios', Usuario);//collection(tabela)

module.exports = Usuario;

//const novoUsuario = mongoose.model('usuarios');
/*
new novoUsuario({
nome: "Yago"
}).save.then().catch()
*/