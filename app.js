/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}


function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
   else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'Número secreto é menor');
    }
      else {
        (chute < numeroSecreto);
        exibirTextoNaTela('p', 'Número secreto é maior');
      }
      tentativas++;
      limparCampo();   
  }
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
console.log(listaDeNumerosSorteados);




/*function textoConsole() {
  console.log('Olá Mundo!');
}
textoConsole();

function QualONome(nome) {
    console.log(`Olá ${nome}`);
}
QualONome('Camila');

function dobroDoNumero(numero) {
  return numero * 2;
}
let resultadoDoDobro = dobroDoNumero(50);
console.log(resultadoDoDobro);

function MediaDeTres(a,b,c) {
  return (a + b + c) / 3;
}
let resultadoMedia = MediaDeTres(10,11,30);
console.log(resultadoMedia);

function MaiorDeDois(d,e) {
  return d > e ? d : e
}
let resultadoDoMaior = MaiorDeDois (10,40);
console.log(resultadoDoMaior);

function exponencialNumero(numero) {
  return numero * numero;
}
let resultadoExponencial = exponencialNumero(10);
console.log(resultadoExponencial);


let altura = prompt('Qual a sua altura em metros?');
let peso = prompt('Qual o seu peso em kg?' )

function IMC(altura, peso){
    return peso / (altura * altura); 
  }
  
 
function IMC(altura, peso){

  return peso / (altura * altura);
}

let resultado = IMC(altura, peso)
console.log(resultado);*/

 /*function fatorialNumero(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let resultado = numero
  while (numero >= 1) {
    numero--;
    resultado = numero * (numero - 1);
   }
        return resultado
  
 }

 let resultadoFatorial = fatorialNumero(4);
 console.log(resultadoFatorial);



 function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function valorDolar(dolar) {
  return dolar * 4.80; 
}
let resultadoCambio = valorDolar(10);
console.log(resultadoCambio.toFixed(2));

function mostrarTabuada(numero) {
  for (let i = numero; i > 0; i--) {
    let resultado = numero * (numero - i);
    console.log(resultado);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);

let listaGenerica = [];
console.log(listaGenerica);
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

linguagensDeProgramacao.push('Java','Ruby','GoLang');
console.log(linguagensDeProgramacao);
let nomesLista = ['Demian','Camila','Ju','De'];
console.log(nomesLista[3]);*/
