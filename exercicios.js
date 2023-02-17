// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt('Digite altura')
const largura = prompt('Digite largura')
const areaDoRetangulo = altura * largura
console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt('Ano Atual')
const anoDeNascimento = prompt('Ano de Nascimento')

const idade = anoAtual - anoDeNascimento

console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)

return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('Qual seu nome?')
  const idade = prompt('Qual sua idade?')
  const email = prompt('Qual seu e-mail?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const corFavorita1 = prompt(`Qual sua cor favorita 1?`)
  const corFavorita2 = prompt(`Qual sua cor favorita 2?`)
  const corFavorita3 = prompt(`Qual sua cor favorita 3?`)

  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]

  console.log(coresFavoritas)

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const stringUpperCase = string.toUpperCase()

  return stringUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const custoIngresso = custo
  const valorCadeIngresso = valorIngresso
  const deuLucro = custoIngresso / valorCadeIngresso 

  return deuLucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  copiaArray = array.slice()
    
  const primeiroElemento = copiaArray[0]
  const ultimoElemento = copiaArray[array.length-1]
  
  copiaArray.pop()
  copiaArray.shift()

  copiaArray.push(primeiroElemento)
  copiaArray.unshift(ultimoElemento)  

  return copiaArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  verificarStrings = (string1.toUpperCase() === 
  string2.toUpperCase())

  return verificarStrings
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt('Digite o ano de Nascimento'))
  const anoCarteiraDeId = Number(prompt('Digite ano da carteira de Id'))

  const vinteAnosOuMenos = anoAtual - anoDeNascimento <= 20 && anoAtual - anoCarteiraDeId >= 5
  const entreVinteECinquenta = anoAtual - anoDeNascimento > 20 && anoAtual - anoDeNascimento <= 50 && anoAtual - anoCarteiraDeId >= 10
  const CinquentaOuMais = anoAtual - anoDeNascimento > 50 && anoAtual - anoCarteiraDeId >= 15 

  
  //const entreVinteECinquenta = CinquentaOuMais % vinteAnosOuMenos 

  console.log(vinteAnosOuMenos || entreVinteECinquenta || CinquentaOuMais)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const multiploDe4 = ano % 4 === 0
  const multiploDe100 = ano % 100 === 0
  const multiploDe400 = ano % 400 === 0 

  return multiploDe400 || (multiploDe4 && !multiploDe100)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const anos = prompt(`Voce tem mais de 18 anos?`)
  const medio = prompt(`Voce tem ensino medio?`)
  const horario = prompt(`Voce tem disponibilidade exclusiva para os horarios do curso?`)

  console.log(anos === `sim` && medio === `sim` && horario === `sim`)
}