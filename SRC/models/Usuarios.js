const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definindo o model
const Usuario = new Schema({
    nome:{
        type: String,//tipo de arquivo
        require: true//uso obrigatorio
    },
    dtNascimento:{
        type: Date,
        require: true,
        default: Date.now
    },
    endereco:{
        type: String,
        require: false,
        default: 'Não Informado'
    },
    bairro:{
        type: String,
        require: false,
        default: 'Não Informado'
    },
    cidade:{
        type: String,
        require: false,
        default: 'Não Informado'
    },
    uf:{
        type: String,
        require: false,
        default: 'Não Informado'
    },
    email:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true
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