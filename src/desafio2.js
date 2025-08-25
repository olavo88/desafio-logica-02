console.log(" ------------- Desafio Calculadora de Partidas Rankeadas -------------");

const readlineSync = require('readline-sync');

let nome = readlineSync.question("Por favor, digite seu nome: ");
let vitorias = parseInt(readlineSync.question("Digite total de Vitorias: "));
let derrotas = parseInt(readlineSync.question("Digite total de Derrotas: "));

// Função para calcular o saldo de vitórias
function saldoTotal(vitoria, derrota) {
    return vitoria - derrota;
} 

let saldoVitoria = saldoTotal(vitorias, derrotas);
let nivel;

if (saldoVitoria < 10) {
    nivel = "Ferro";
} else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
    nivel = "Bronze";
} else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
    nivel = "Prata";
} else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
    nivel = "Ouro";
} else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
    nivel = "Diamante";
} else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O Herói de nome ${nome} tem saldo de ${saldoVitoria} e está no nível ${nivel}.`);

console.log("------------- Obrigado por participar -----------------------------");