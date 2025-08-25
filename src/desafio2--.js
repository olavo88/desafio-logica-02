
console.log(" ------------- Desafio Calculadora de Partidas Rankeadas -------------");

// Importa a biblioteca instalada
const readlineSync = require('readline-sync');


let nome = readlineSync.question("  Por favor, digite seu nome: ");
let vitorias = readlineSync.question("  Digite total de Vitorias: ");
let derrotas = readlineSync.question("  Digite total de Derrotas: ");

//Função para saber o saldo
function saldoTotal(vitoria,derrota) {
    saldoVitoria=vitoria-derrota;
  //console.log(saldoVitoria);
} 
let saldoRankeadas = saldoTotal(vitorias,derrotas);
//console.log(saldo);

if (saldoVitoria < 10) {
    nivel="Ferro";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)
} else if(saldoVitoria >= 11 && vitorias <=20  ) {
    nivel="Bronze";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)

} else if(saldoVitoria >= 21 && vitorias <=50  ) {
    nivel="Prata";
     console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)

} else if(saldoVitoria >= 51 && vitorias <=80  ) {
    nivel="Ouro";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)

} else if(saldoVitoria >= 81 && vitorias <=90  ) {
    nivel="Diamante";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)

} else if(saldoVitoria >= 91 && vitorias < 101  ) {
    nivel="Lendário";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)

} else if(saldoVitoria > 100  ){
    nivel="Imortal";
    console.log(` O Herói de nome ${nome} tem saldo ${saldoVitoria} está no nível  ${nivel}`)
}


console.log(" ------------- Obrigado por participar -----------------------------");