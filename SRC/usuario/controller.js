const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("./model");
const Usuario = mongoose.model("usuarios");

exports.Criar = (req, res) => {
  var erros = [];

  if (
    !req.body.nome ||
    typeof req.body.nome == undefined ||
    req.body.nome == null
  ) {
    erros.push({ texto: "Nome inválido" });
  }
  if (
    !req.body.email ||
    typeof req.body.email == undefined ||
    req.body.nome == null
  ) {
    erros.push({ texto: "Email inválido!" });
  }
  if (erros.length > 0) {
    res.render("usuarios/cadastrar", { erros: erros });
  } else {
    let novoUsuario = {
      nome: req.body.nome,
      dtNascimento: req.body.dtNascimento,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      uf: req.body.uf.value,
      email: req.body.email,
      senha: req.body.senha,
      data_cadastro: new Date(),
      data_alteracao: new Date(),
    };
    new Usuario(novoUsuario)
      .save()
      .then(() => {
        // console.log("usuario cadastrado com sucesso!");
        req.flash("success_msg","Usuario cadastrado com sucesso!")
        res.redirect("/usuarios/index")
      })
      .catch((err) => {
        req.flash("error_msg","Houve um erro ao salvar Usuario!")
        res.redirect("/usuarios/index")
        // console.log("Erro ao cadastrar usuario : " + err);
      });
    res.render("usuarios/index");
  }
};
