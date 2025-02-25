let statusJogo1 = true;
let statusJogo2 = true;
let statusJogo3 = false;
let jogo1 = "game-1";
let jogo2 = "game-2";
let jogo3 = "game-3";

function alterarStatus(){
    
    if(jogo == 1){
        alterarBotao(statusJogo1, jogo1);
        alterarImagem(statusJogo1, jogo1);
        alert("Deu certo");
    
    }if (jogo == 2) {
        alterarBotao(statusJogo2, jogo2);
        alterarImagem(statusJogo2, jogo2);
    } else {
        alterarBotao(statusJogo3, jogo3);
        alterarImagem(statusJogo3, jogo3);
    }
}

function alterarImagem(statusJogo, classeJogo){
    if (statusJogo){
        document.getElementById(classeJogo).classList.remove("dashboard__item__img");
        document.getElementById(classeJogo).classList.add("dashboard__item__img dashboard__item__img--rented");
        statusJogo = true;
        }else{
            document.getElementById(classeJogo).classList.remove("dashboard__item__img dashboard__item__img--rented");
            document.getElementById(classeJogo).classList.add("dashboard__item__img");
}
}

function alterarBotao(statusJogo, classeJogo){
    if (statusJogo){
    document.getElementById(classeJogo).classList.remove("dashboard__item__button");
    document.getElementById(classeJogo).classList.add("dashboard__item__button dashboard__item__button--return");
    statusJogo = true;
    }else{
        document.getElementById(classeJogo).classList.remove("dashboard__item__button dashboard__item__button--return");
        document.getElementById(classeJogo).classList.add("dashboard__item__button");
        statusJogo = false;
    }
}