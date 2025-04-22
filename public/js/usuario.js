function mostrarSenha() {
    let senha = document.getElementById("senha");
  
    if (senha.type == "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }
  
  function trocarTexto(texto) {
    let h1 = document.getElementById("tipo");
  
    if (texto == "pf") {
      return "Pessoa Fisica";
    } else {
      return "Pessoa Juridica";
    }
  }
  
  function render(idTemplate, idTarget, data) {
    const source = document.getElementById(idTemplate).innerHTML;
    const template = Handlebars.compile(source);
    var html = template(data);
    document.getElementById(idTarget).innerHTML = html;
  }
  