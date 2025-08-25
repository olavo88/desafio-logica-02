

const readlineSync = require('readline-sync');
const { exec } = require('child_process');

console.log("\n");
console.log(" ***************************** <<< Escolha o Desafio >>> *****************************");
console.log(" *                                                                                   *");
let nr_desafio = readlineSync.question("  Esolha o Desafio (1 para o Desafio 1 ou 2 para o Desafio 2): ");
//nr_desafio = 1;
if (nr_desafio == 1) {
    console.log(` Nr escolhido ${nr_desafio}`)
   // console.log(" *                                                                                   *");
 // Este comando executa o arquivo 'desafio2.js' usando Node.js
    exec('node desafio1.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o arquivo: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        console.log(`Saída do arquivo:\n${stdout}`);
    });

} else if(nr_desafio == 2) {
    //console.log(` Nr escolhido ${nr_desafio}`);
    // Este comando executa o arquivo 'desafio1.js' usando Node.js
    exec('node desafio2.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o arquivo: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        console.log(`Saída do arquivo:\n${stdout}`);
    });
} else {
    console.log("Escolha numero 1 ou 2 ");
}

   // console.log(" ****************************        <<< FIM >>>         ****************************");
/*
console.log("\n");
console.log(" ***************************** <<< Escolha o Desafio >>> *****************************");
console.log(" *                                                                                   *");

console.log(" *                                                                                   *");
console.log(" *                                                                                   *");
console.log(" *                                                                                   *");
console.log(" *                                                                                   *");
console.log(" *                                                                                   *");


console.log(" ****************************        <<< FIM >>>         ****************************");

let nome = readlineSync.question("  Por favor, digite seu nome: ");
let XP = readlineSync.question("  Digite total de pontos: ");
*/