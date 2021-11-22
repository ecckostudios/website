var nome = document.getElementById("nome");
var email = document.getElementById("whatsapp");
var whatsapp = document.getElementById("email");
var mensagem = document.getElementById("mensagem");
var btnEnviar = document.getElementById("enviar");
var contato = document.getElementById("contato");


contato.addEventListener ("submit", event=> {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info)
    alert("Mensagem Enviada com sucesso");
});