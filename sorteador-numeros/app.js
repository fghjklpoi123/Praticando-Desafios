function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    let intervaloDeNumeros = ateNumero - doNumero;
    let numerosSortiados = [] ;

    if (doNumero >= ateNumero || quantidadeDeNumeros  > intervaloDeNumeros + 1) {
        alert("Intervalo de numeros inválidos!! Verifique novamente os campos.");
        limparCampos();
    }else{

    adicionaNumerosSorteados();
    mensagemFinal(numerosSortiados);
    document.getElementById("btn-reiniciar").classList.add("container__botao");
    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
    
    function adicionaNumerosSorteados() {
        while(numerosSortiados.length < quantidadeDeNumeros){
           let numeroEscolhido = sorteadorDeNumeros(doNumero, ateNumero);
           if (numerosSortiados.includes(numeroEscolhido)) {
               adicionaNumerosSorteados();
           } else {
               numerosSortiados.push(numeroEscolhido);
           }
       }
    }
}
    
}

function reiniciar(){
    let mensagemFinal = document.getElementById("resultado");
    limparCampos();
    document.getElementById("btn-reiniciar").classList.remove("container__botao");
    document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado");
    mensagemFinal.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}

function limparCampos(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}

function sorteadorDeNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function mensagemFinal(numerosSortiados){
    if(numerosSortiados != 0){
        let mensagemFinal = document.getElementById("resultado");
        mensagemFinal.innerHTML = `<label class="texto__paragrafo">Os numeros sortiados são: ${numerosSortiados}</label>`;
  }
}