function redirecionarParaTela2() {
    var nomeInserido = document.getElementById("nomeInput").value;
    
    sessionStorage.setItem("nomeUsuario", nomeInserido);

    window.location.href = "quiz.html";
}
