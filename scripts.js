
let nomeComida;
let comida;
function selecionarPrato(cliqueUm){

    const botaoselecUm = document.querySelector('.prata .seleciona');

    if (botaoselecUm !== null){
        botaoselecUm.classList.remove('seleciona');
    }
    cliqueUm.classList.add('seleciona');
    const check = document.querySelector('.prata .seleciona ion-icon');
    const check2 = document.querySelector('.prata .selecionado');
    if (check2 !== null){
        check2.classList.remove('selecionado');
    }
    check.classList.add('selecionado');
    const nome = document.querySelector('.prata .seleciona h1');
    nomeComida = nome.innerHTML;
    comida =1;
    habilitarBotao();
}

let nomeBebida;
let bebida;
function selecionarBebida(cliqueDois){

    const botaoselecDois = document.querySelector('.bebida .seleciona');
    if (botaoselecDois !== null){
        botaoselecDois.classList.remove('seleciona');
    }

    cliqueDois.classList.add('seleciona');
    const check = document.querySelector('.bebida .seleciona ion-icon');
    const check2 = document.querySelector('.bebida .selecionado');
    if (check2 !== null){
        check2.classList.remove('selecionado');
    }
    check.classList.add('selecionado');

    const nome = document.querySelector('.bebida .seleciona h1');
    nomeBebida = nome.innerHTML;
    bebida = 1;
    habilitarBotao();
}
let nomeSobremesa;
let sobremesa;
function selecionarSobremesa(cliqueTres){

    const botaoselecTres = document.querySelector('.sobremesa .seleciona');
    if (botaoselecTres !== null){
        botaoselecTres.classList.remove('seleciona');
    }

    cliqueTres.classList.add('seleciona');

    const check = document.querySelector('.sobremesa .seleciona ion-icon');
    const check2 = document.querySelector('.sobremesa .selecionado');
    if (check2 !== null){
        check2.classList.remove('selecionado');
    }
    check.classList.add('selecionado');

    const nome = document.querySelector('.sobremesa .seleciona h1');
    nomeSobremesa = nome.innerHTML;
    sobremesa=1;
    habilitarBotao();
}

function habilitarBotao(){
    if (comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        const teste = document.querySelector(".botao");
        teste.innerHTML = "Fechar pedido";
        teste.classList.add('verde');
        document.getElementById("botao_1").removeAttribute("disabled");
    }
}

function botaoClicado(){
    mensagemFinal();
}

function mensagemFinal(){
    let precoPrato = document.querySelector('.prata .seleciona h4');
    precoPrato = precoPrato.innerHTML;
    precoPrato = precoPrato.replace(",",".");
    const precoPratoFormatado = parseFloat(precoPrato);

    let precoBebida = document.querySelector('.bebida .seleciona h4');
    precoBebida = precoBebida.innerHTML;
    precoBebida = precoBebida.replace(",",".");
    const precoBebidaFormatado = parseFloat(precoBebida);

    let precoSobremesa = document.querySelector('.sobremesa .seleciona h4');
    precoSobremesa = precoSobremesa.innerHTML;
    precoSobremesa = precoSobremesa.replace(",",".");
    const precoSobremesaFormatado = parseFloat(precoSobremesa);
    const fixed=2;
    const precoTotal= (precoPratoFormatado+precoBebidaFormatado+precoSobremesaFormatado).toFixed(fixed);

    const nomeUsuario = prompt("Digite seu Nome:");
    const endereco = prompt("Digite seu Endereço:");

    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeComida} \n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${precoTotal}\n
Nome: ${nomeUsuario}\nEndereço: ${endereco}`;
    mensagem = window.encodeURIComponent(mensagem);
    window.open(`https://wa.me/55999999999?text=${mensagem}`);

}
