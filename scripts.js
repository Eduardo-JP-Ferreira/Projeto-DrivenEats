let IconeAnterior;
let comida;
function SelecionarPrato(cliqueUm){

    const botaoselecUm = document.querySelector('.prata .borda');  //borda significa q foi selecionado
 
    if (botaoselecUm !== null){
        botaoselecUm.classList.remove('borda');        
    }
    cliqueUm.classList.add('borda');
    comida =1;
    HabilitarBotao();

    /*if (IconeAnterior !== undefined){
        IconeUm.classList.remove('selecionado');
        IconeAnterior = undefined;
    }
    
    IconeUm.classList.add('selecionado');
    IconeAnterior = 1;*/
    
}
let bebida;
function SelecionarBebida(cliqueDois){

    const botaoselecDois = document.querySelector('.bebida .borda');
    if (botaoselecDois !== null){
        botaoselecDois.classList.remove('borda');  
    }
  
    cliqueDois.classList.add('borda');
    bebida = 1;
    HabilitarBotao();
  /*  const iconeUm = document.querySelector('.bebida .none');
    if (iconeUm !== null){
        iconeUm.classList.remove('none');  
    }
    else{
        iconeUm.classList.remove('none'); 
    }*/
}
let sobremesa;
function SelecionarSobremesa(cliqueTres){

    const botaoselecTres = document.querySelector('.sobremesa .borda');
    if (botaoselecTres !== null){
        botaoselecTres.classList.remove('borda');  
    }

    cliqueTres.classList.add('borda');
    sobremesa=1;
    HabilitarBotao();
   // cliqueTres.classList.remove('none');
}

function HabilitarBotao(){
    console.log(comida);
    console.log(bebida);
    console.log(sobremesa);
    if (comida !== undefined){
        
        if (bebida !== undefined){

            if (sobremesa !== undefined){
                const teste = document.querySelector(".botao");
                teste.innerHTML = "Continuar";
                teste.classList.add('verde');
                document.getElementById("botao_1").removeAttribute("disabled");
            }
        }
    }
}

function BotaoClicado(clicado){
    alert("Clicou hahaha");
}

