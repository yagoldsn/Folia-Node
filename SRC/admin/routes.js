const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/index");
});


// router.get("/usuarios/cadastro", (req, res) => {
//   res.render("usuarios/cadastrar");
// });

module.exports = router;

