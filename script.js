const niveis = {
    facil: {
        tentativas: 6,
        tema: '🍎 Frutas',
        palavras: ["maca", "banana", "uva", "pera", "limao", "mamao", "melao", "figo", "caju", "coco", "kiwi", "manga", "goiaba", "abacate", "amora", "caqui", "cereja", "lima", "morango", "pessego", "abacaxi", "laranja", "tangerina", "melancia", "framboesa", "jabuticaba", "acerola", "maracuja", "carambola", "pitanga"]
    },
    medio: {
        tentativas: 5,
        tema: '🦁 Animais',
        palavras: ["cachorro", "gato", "elefante", "leao", "tigre", "macaco", "girafa", "zebra", "cavalo", "coelho", "jacare", "cobra", "passaro", "peixe", "tubarao", "golfinho", "baleia", "urso", "lobo", "raposa", "tartaruga", "rinoceronte", "hipopotamo", "camelo", "pinguim", "avestruz", "coruja", "esquilo", "formiga", "borboleta"]
    },
    dificil: {
        tentativas: 4,
        tema: '💻 Tecnologia',
        palavras: ["javascript", "programacao", "algoritmo", "computador", "teclado", "software", "hardware", "internet", "navegador", "framework", "biblioteca", "database", "servidor", "frontend", "backend", "debugging", "compilador", "linguagem", "protocolo", "interface", "variavel", "funcao", "looping", "condicional", "responsivo", "inteligencia", "ciberseguranca", "criptografia", "processador", "repositorio"]
    }
};

let palavraSecreta, letrasCorretas, letrasIncorretas, maxTentativas;
let vitorias = localStorage.getItem('vitorias') || 0;
let derrotas = localStorage.getItem('derrotas') || 0;

const somAcerto = new Audio('correct.mp3');
const somErro = new Audio('wrong.mp3');

let selecaoDificuldadeDiv;
let jogoContainerDiv;
let palavraSecretaDiv;
let tentativasRestantesSpan;
let letrasUsadasDiv;
let formLetra;
let inputLetra;
let bonecoPartes;
let infoJogoDiv;
let formPalavra;
let inputPalavra;
let vitoriasSpan;
let derrotasSpan;
let modalFimDeJogo;
let modalTitulo;
let modalMensagem;
let modalPalavra;
let pDigiteLetra;


function atualizarPlacar() {
    vitoriasSpan.textContent = vitorias;
    derrotasSpan.textContent = derrotas;
    localStorage.setItem('vitorias', vitorias);
    localStorage.setItem('derrotas', derrotas);
}

function iniciarJogo(dificuldade) {
    const nivel = niveis[dificuldade];
    maxTentativas = nivel.tentativas;
    
    infoJogoDiv.innerHTML = `Nível: <strong class="text-capitalize">${dificuldade}</strong> | Tema: <strong>${nivel.tema}</strong>`;
    palavraSecreta = nivel.palavras[Math.floor(Math.random() * nivel.palavras.length)];
    letrasCorretas = [];
    letrasIncorretas = [];

    selecaoDificuldadeDiv.classList.add('d-none');
    jogoContainerDiv.classList.remove('d-none');

    pDigiteLetra.classList.remove('d-none');
    formLetra.classList.remove('d-none');

    atualizarInterface();
    inputLetra.value = '';
    inputPalavra.value = '';
    inputLetra.focus();
}

function desenharPalavra() {
    palavraSecretaDiv.innerHTML = palavraSecreta
        .split('')
        .map(letra => `<div class="letra-display">${letrasCorretas.includes(letra) ? letra : ''}</div>`)
        .join('');
}

function desenharForca() {
    const erros = letrasIncorretas.length;
    bonecoPartes.forEach(parte => parte.style.visibility = 'hidden');

    if (erros === 0) return;

    const partesVisiveis = [];

    partesVisiveis.push(bonecoPartes[0]);
    if (erros >= 2) partesVisiveis.push(bonecoPartes[1]);

    if (maxTentativas === 6) {
        if (erros >= 3) partesVisiveis.push(bonecoPartes[2]);
        if (erros >= 4) partesVisiveis.push(bonecoPartes[3]);
        if (erros >= 5) partesVisiveis.push(bonecoPartes[4]);
        if (erros >= 6) partesVisiveis.push(bonecoPartes[5]);
    } else if (maxTentativas === 5) {
        if (erros >= 3) {
            partesVisiveis.push(bonecoPartes[2]);
            partesVisiveis.push(bonecoPartes[3]);
        }
        if (erros >= 4) partesVisiveis.push(bonecoPartes[4]);
        if (erros >= 5) partesVisiveis.push(bonecoPartes[5]);
    } else {
        if (erros >= 3) {
            partesVisiveis.push(bonecoPartes[2]);
            partesVisiveis.push(bonecoPartes[3]);
        }
        if (erros >= 4) {
            partesVisiveis.push(bonecoPartes[4]);
            partesVisiveis.push(bonecoPartes[5]);
        }
    }

    partesVisiveis.forEach(parte => parte.style.visibility = 'visible');
}

function mostrarLetrasUsadas() {
    letrasUsadasDiv.innerHTML = '';
    const todasAsLetras = [...new Set([...letrasCorretas, ...letrasIncorretas])].sort();
    todasAsLetras.forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        span.className = 'letra-usada';
        span.classList.add(palavraSecreta.includes(letra) ? 'correta' : 'incorreta');
        letrasUsadasDiv.appendChild(span);
    });
}

function atualizarInterface() {
    desenharPalavra();
    desenharForca();
    mostrarLetrasUsadas();
    tentativasRestantesSpan.textContent = maxTentativas - letrasIncorretas.length;

    const letrasUnicas = [...new Set(palavraSecreta.split(''))];
    const letrasRestantes = letrasUnicas.filter(letra => !letrasCorretas.includes(letra)).length;

    if (letrasRestantes === 1 && letrasIncorretas.length < maxTentativas) {
        pDigiteLetra.classList.add('d-none');
        formLetra.classList.add('d-none');
        inputPalavra.focus();
    } else {
        pDigiteLetra.classList.remove('d-none');
        formLetra.classList.remove('d-none');
    }
}

function finalizarJogo(venceu) {
    if (venceu) {
        vitorias++;
        modalTitulo.textContent = 'Você Acertou!';
        modalMensagem.textContent = 'Parabéns, você adivinhou a palavra!';
    } else {
        derrotas++;
        modalTitulo.textContent = 'Você Perdeu!';
        modalMensagem.textContent = 'Não foi dessa vez. Mais sorte na próxima!';
    }
    modalPalavra.textContent = palavraSecreta.toUpperCase();
    modalFimDeJogo.show();
    atualizarPlacar();
}

function verificarFimDeJogo() {
    const palavraAdivinhada = palavraSecreta.split('').every(letra => letrasCorretas.includes(letra));
    if (palavraAdivinhada) {
        finalizarJogo(true);
        return;
    }

    const tentativasEsgotadas = letrasIncorretas.length >= maxTentativas;
    if (tentativasEsgotadas) {
        finalizarJogo(false);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    selecaoDificuldadeDiv = document.getElementById('selecao-dificuldade');
    jogoContainerDiv = document.getElementById('jogo-container');
    palavraSecretaDiv = document.getElementById('palavra-secreta');
    tentativasRestantesSpan = document.getElementById('tentativas-restantes');
    letrasUsadasDiv = document.getElementById('letras-usadas');
    formLetra = document.getElementById('form-letra');
    inputLetra = document.getElementById('input-letra');
    bonecoPartes = document.querySelectorAll('.boneco-parte');
    infoJogoDiv = document.getElementById('info-jogo');
    formPalavra = document.getElementById('form-palavra');
    inputPalavra = document.getElementById('input-palavra');
    vitoriasSpan = document.getElementById('vitorias');
    derrotasSpan = document.getElementById('derrotas');
    modalTitulo = document.getElementById('modal-titulo');
    modalMensagem = document.getElementById('modal-mensagem');
    modalPalavra = document.getElementById('modal-palavra');
    pDigiteLetra = formLetra.previousElementSibling;

    modalFimDeJogo = new bootstrap.Modal(document.getElementById('modal-fim-de-jogo'));

    document.getElementById('btn-facil').addEventListener('click', () => iniciarJogo('facil'));
    document.getElementById('btn-medio').addEventListener('click', () => iniciarJogo('medio'));
    document.getElementById('btn-dificil').addEventListener('click', () => iniciarJogo('dificil'));

    document.getElementById('btn-jogar-novamente').addEventListener('click', () => {
        modalFimDeJogo.hide();
        jogoContainerDiv.classList.add('d-none');
        selecaoDificuldadeDiv.classList.remove('d-none');
    });

    formLetra.addEventListener('submit', (e) => {
        e.preventDefault();
        const letra = inputLetra.value.toLowerCase();

        if (!letra.match(/^[a-zç]$/)) {
            inputLetra.value = '';
            return;
        };
        if (letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)) {
            inputLetra.value = '';
            return;
        };

        if (palavraSecreta.includes(letra)) {
            letrasCorretas.push(letra);
            somAcerto.play();
        } else {
            letrasIncorretas.push(letra);
            somErro.play();
        }

        inputLetra.value = '';
        atualizarInterface();
        verificarFimDeJogo();
    });

    formPalavra.addEventListener('submit', (e) => {
        e.preventDefault();
        const chute = inputPalavra.value.toLowerCase().trim();
        inputPalavra.value = '';

        if (!chute) return;

        if (chute === palavraSecreta) {
            letrasCorretas = [...new Set([...letrasCorretas, ...palavraSecreta.split('')])];
            atualizarInterface();
            finalizarJogo(true);
        } else {
            letrasIncorretas.length = maxTentativas;
            atualizarInterface();
            finalizarJogo(false);
        }
    });

    atualizarPlacar();
});