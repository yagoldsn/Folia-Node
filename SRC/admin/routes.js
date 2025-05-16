const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/cadastro", (req, res) => {
  res.render("admin/cadastros");
});

// router.get("/usuarios/cadastro", (req, res) => {
//   res.render("usuarios/cadastrar");
// });

module.exports = router;
