const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('./model');
const Usuario = mongoose.model('usuarios');

exports.Criar= (req,res) =>{
    let novoUsuario = {
        nome : req.body.nome,
        dtNascimento : req.body.dtNascimento,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf.value,
        email: req.body.email,
        senha: req.body.senha
      }
      new Usuario(novoUsuario).save().then(()=>{
        console.log("usuario cadastrado com sucesso!")
      }).catch((err)=>{
        console.log('Erro ao cadastrar usuario : '+ err);
      });
      res.render("usuarios/index");
}




