let listaNum = [];
let numLimite = 100;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

exibirMensagemInicial(); // Função chamada para alterar texto no HTML

function verificarChute(){ // função que é chamada quando o botão "Chutar", no HTML é, clicado. Onde se realiza Tod0 o processo do Jogo.
    let chute = document.querySelector('input').value;
    if (chute == numSecreto){
        exibirTextoTela('h1', 'Você acertou!');
        let tentativaTernario = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o numero secreto em ${tentativas} ${tentativaTernario}`;
        exibirTextoTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
            limparCampo();
        } else {
            exibirTextoTela('p', 'O número secreto é maior');
            limparCampo();
        }
        tentativas++;
    }
}



function gerarNumAleatorio() { // Função responsavel por gerar o numero aleatorio.
    let numEscolhido =  parseInt (Math.random() * numLimite + 1);
    let qtdElementosLista = listaNum.length;

    if(qtdElementosLista == numLimite){
        listaNum = [];
    }
    if (listaNum.includes(numEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNum.push(numEscolhido);
        console.log(listaNum);
        return numEscolhido;
    }
}

function exibirTextoTela(tag, texto) { //Função criada para alterar os valores dos camps "H1" e "P" no HTML.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){ // Função utilizada para limpar campos de input.
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){ // Função responsavel por reiniciar o jogo quando o botão "Novo Jogo" é clicado.
    numSecreto = gerarNumAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){ //Função criada para alterar o texto da função "exibirTextoTela" e exibi-la.
    //console.log(numSecreto);
    exibirTextoTela('h1', 'Jogo do número secreto' );
    let exibNum = `Escolha um número entre 1 e ${numLimite}`;
    exibirTextoTela('p', exibNum);
}




