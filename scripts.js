function SelecionarPrato(cliqueUm){

    const botaoselecUm = document.querySelector('.prata .borda');
    if (botaoselecUm !== null){
        botaoselecUm.classList.remove('borda');  
    }

    cliqueUm.classList.add('borda');
    cliqueUm.classList.remove('none');
}

function SelecionarBebida(cliqueDois){

    const botaoselecDois = document.querySelector('.bebida .borda');
    if (botaoselecDois !== null){
        botaoselecDois.classList.remove('borda');  
    }

    cliqueDois.classList.add('borda');
    cliqueDois.classList.remove('none');
}

function SelecionarSobremesa(cliqueTres){

    const botaoselecTres = document.querySelector('.sobremesa .borda');
    if (botaoselecTres !== null){
        botaoselecTres.classList.remove('borda');  
    }

    cliqueTres.classList.add('borda');
    cliqueTres.classList.remove('none');
}