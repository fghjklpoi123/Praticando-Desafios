function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    let numerosSortiados = [] ;

    for (let i = 0; i < quantidadeDeNumeros; i++){
        let numeroEscolhido = sorteadorDeNumeros(doNumero, ateNumero);  
        numerosSortiados.push(numeroEscolhido);
    }

    console.log(numerosSortiados);
}

function sorteadorDeNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  