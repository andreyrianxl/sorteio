//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os amigos
const amigos = [];

// Captura os elementos do DOM necessários
const input = document.getElementById('nomeAmigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultadoSorteio');

// Função para adicionar um amigo
function adicionarAmigo() {
    const nome = input.value.trim(); // Remove espaços desnecessários

    // Validação para verificar se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    input.value = '';
}

// Função para atualizar a exibição da lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpa a lista atual
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

// Adiciona o evento de clique ao botão no DOM
document.getElementById('botaoAdicionar').addEventListener('click', adicionarAmigo);
document.getElementById('botaoSortear').addEventListener('click', sortearAmigo);
