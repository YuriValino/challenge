//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value.trim();
    if (novoAmigo !== '') {
        amigos.push(novoAmigo);
        limparCampo();
        atualizarLista();
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function atualizarLista() {
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        exibirAmigoSorteado(amigoSorteado);
    } else {
        exibirMensagem('Não há amigos na lista para sortear.');
    }
}

function exibirAmigoSorteado(nome) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    let mensagem = document.createElement('li');
    mensagem.textContent = `O amigo secreto sorteado é: ${nome}`;
    resultadoElement.appendChild(mensagem);
}

