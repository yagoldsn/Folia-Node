const express = require("express");
const router = express.Router();
const controler = require("./controller");

router.get('/',(req,res) =>{
    res.render('usuarios/index')
})

router.get("/cadastro", (req, res) => {
  res.render("usuarios/cadastrar");
});

//rota para cadastrar usuario
router.post("/cadastro/add", controler.Criar);


module.exports = router;