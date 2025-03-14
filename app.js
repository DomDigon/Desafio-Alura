//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        atualizarListaAmigos();
        amigoInput.value = "";
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor inserir nomes dos participantes");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceSorteado, 1)[0];

    alert("Amigo sorteado: " + amigoSorteado);
    atualizarListaAmigos();
}