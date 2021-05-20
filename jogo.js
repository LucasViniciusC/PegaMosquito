var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 60;

var criaMoscaTempo = 1500;

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if( nivel === 'normal') {
    tempo = 35
    criaMoscaTempo = 1500;
}else if(nivel === 'dificil'){
    tempo = 35
    criaMoscaTempo = 1000;
}else if (nivel === 'hardcore'){
    tempo = 35
    criaMoscaTempo = 750
}

// Capturando o tamanho da tela de forma atualizada e responsiva
function ajustaTamanhoJanela() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoJanela()

var cronometro = setInterval(function () {
    tempo--

    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href="vitoria.html"
    } else {
        document.getElementById('tempo-cronometro').innerHTML = tempo;
    }

}, 1000)

function posicaoMosca() {

    // Removendo o elemento caso ele já seja existente
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove();


        // Criando um controle que verifica se jogador ainda tem vidas restantes 
        if (vidas >= 3) {
            window.location.href = "fim_jogo.html"
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++
        }
    }

    // Gerando uma posição randômica para o elemento ,tendo base o tamanho de largura e altura da tela 
    var posicaox = Math.floor(Math.random() * largura) - 90;
    var posicaoy = Math.floor(Math.random() * altura) - 90;

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    console.log(posicaox, posicaoy)

    //Criando um elemento através do DOM 
    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.id = 'mosca';
    mosca.onclick = function () {
        this.remove();
    }

    // posicionando o elemento de forma randomica, se baseando nos parâmetros recebidos pela classe ajustaTamanhoJanela
    mosca.style.left = posicaox + 'px';
    mosca.style.top = posicaoy + 'px';
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca);

    tamanhoAleatorio();

    console.log(ladoAleatorio())
}

// Criando uma função que gera uma valor aleatorio para modificar diretamente com o estilo do elemento criando alternando assim a classe do elemento
function tamanhoAleatorio() {
    classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// Criando uma variação de posição invertendo a imagem do elemento no eixo X, adicionando a função juntamente com as definições de classe do elemento 
function ladoAleatorio() {
    lado = Math.floor(Math.random() * 2);

    switch (lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}