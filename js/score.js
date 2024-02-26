var nomeArmazenado = sessionStorage.getItem("nomeUsuario");

if (nomeArmazenado) {
    var listaNomes = document.getElementById("listaNomes");
    var novoItemLista = document.createElement("li");
    novoItemLista.textContent = "" + nomeArmazenado;
    listaNomes.appendChild(novoItemLista);
} else {
    alert("Por favor, insira seu nome no campo abaixo.");
    window.location.href = "index.html";
}