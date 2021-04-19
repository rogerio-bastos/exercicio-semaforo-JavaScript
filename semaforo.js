"use strict"

const imagem = document.querySelector("img");
const botoes = document.querySelector("footer");
let indiceCor = 0;
let intervalId = null;

function semaforo (event){
    pararAutomatico();
    ligar[event.target.id]();
}

function proximoIndice(){
    indiceCor = indiceCor < 2 ? ++indiceCor: 0;
}

function changeColor (){
    const cores = ["verde", "amarelo", "vermelho"];
    const cor = cores[ indiceCor ];
    ligar[cor]();
    proximoIndice()
}

function pararAutomatico(){
    clearInterval(intervalId);
}

const ligar = {
    "vermelho": function (){
        imagem.src = "./imagens/vermelho.png"
    },
    
    "amarelo": function (){
        imagem.src = "./imagens/amarelo.png"
    },
    
    "verde": function (){
        imagem.src = "./imagens/verde.png"
    },

    "automatico": function(){
        intervalId = setInterval(changeColor, 1000)
    }
}

botoes.addEventListener("click", semaforo);
