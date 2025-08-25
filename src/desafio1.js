
console.log(" ------------- Desafio Classificador de nível de Herói -------------");

// Importa a biblioteca instalada
const readlineSync = require('readline-sync');

// Usa a função para pedir ao usuário que digite seu nome e sua pontução

let nome = readlineSync.question("  Por favor, digite seu nome: ");
let XP = readlineSync.question("  Digite total de pontos: ");

let nivel = "";

if (XP <= 1000) {
    nivel="Ferro";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)
} else if(XP >= 1001 && XP <=2000  ) {
    nivel="Bronze";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else if(XP >= 2001 && XP <=5000  ) {
    nivel="Prata";
     console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else if(XP >= 5001 && XP <=7000  ) {
    nivel="Ouro";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else if(XP >= 7001 && XP <=8000  ) {
    nivel="Platina";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else if(XP >= 8001 && XP <=9000  ) {
    nivel="Ascendente";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else if(XP >= 9001 && XP <=10000  ) {
    nivel="Imortal";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)

} else {
    nivel="Radiante";
    console.log(` O Herói de nome ${nome} está no nível de ${nivel}`)
}


console.log(" ------------- Obrigado por participar -----------------------------");