
let nomeComida;
let comida;
function SelecionarPrato(cliqueUm){

    const botaoselecUm = document.querySelector('.prata .seleciona');  //borda significa q foi selecionado
 
    if (botaoselecUm !== null){
        botaoselecUm.classList.remove('seleciona');        
    }
    cliqueUm.classList.add('seleciona');
    let nome = document.querySelector('.prata .seleciona h1');
    nomeComida = nome.innerHTML;
    comida =1;
    HabilitarBotao();

    /*if (IconeAnterior !== undefined){
        IconeUm.classList.remove('selecionado');
        IconeAnterior = undefined;
    }
    
    IconeUm.classList.add('selecionado');
    IconeAnterior = 1;*/
    
}
let nomeBebida;
let bebida;
function SelecionarBebida(cliqueDois){

    const botaoselecDois = document.querySelector('.bebida .seleciona');
    if (botaoselecDois !== null){
        botaoselecDois.classList.remove('seleciona');  
    }
  
    cliqueDois.classList.add('seleciona');
    let nome = document.querySelector('.bebida .seleciona h1');
    nomeBebida = nome.innerHTML;
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
let nomeSobremesa;
let sobremesa;
function SelecionarSobremesa(cliqueTres){

    const botaoselecTres = document.querySelector('.sobremesa .seleciona');
    if (botaoselecTres !== null){
        botaoselecTres.classList.remove('seleciona');  
    }

    cliqueTres.classList.add('seleciona');
    let nome = document.querySelector('.sobremesa .seleciona h1');
    nomeSobremesa = nome.innerHTML;
    sobremesa=1;
    HabilitarBotao();
   // cliqueTres.classList.remove('none');
}

function HabilitarBotao(){
    console.log(comida);
    console.log(nomeComida);
    console.log(bebida);
    console.log(nomeBebida);
    console.log(sobremesa);
    console.log(nomeSobremesa);
    if (comida !== undefined){
        
        if (bebida !== undefined){

            if (sobremesa !== undefined){
                const teste = document.querySelector(".botao");
                teste.innerHTML = "Fechar pedido";
                teste.classList.add('verde');
                document.getElementById("botao_1").removeAttribute("disabled");
            }
        }
    }
}

function BotaoClicado(clicado){
    Mensagem();
}

function Mensagem(){
    let precoPrato = document.querySelector('.prata .seleciona h4');
    precoPrato = precoPrato.innerHTML;
    precoPrato = precoPrato.replace(",",".")
    let precoPratoFormatado = parseFloat(precoPrato);

    let precoBebida = document.querySelector('.bebida .seleciona h4');
    precoBebida = precoBebida.innerHTML;
    precoBebida = precoBebida.replace(",",".")
    let precoBebidaFormatado = parseFloat(precoBebida);

    let precoSobremesa = document.querySelector('.sobremesa .seleciona h4');
    precoSobremesa = precoSobremesa.innerHTML;
    precoSobremesa = precoSobremesa.replace(",",".")
    let precoSobremesaFormatado = parseFloat(precoSobremesa);

    const precoTotal= (precoPratoFormatado+precoBebidaFormatado+precoSobremesaFormatado).toFixed(2);



    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeComida} \n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${precoTotal}`;
    //encodeURIComponent(mensagem);
    console.log(mensagem);
    window.open(`https://wa.me/5537999791731?text=${mensagem}`);

}
