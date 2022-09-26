/**
 * Crie um algoritmo para ler N números, some-os e faça a média entre os números
 */

 const num = Number(prompt("Insira quantos números você quer para saber a média: "));
 let soma = 0;
 let numLoop = 0;

for (let i = 0; i < num; i++) {
    numLoop = Number(prompt("insira um número: "));
    soma = soma + numLoop;
}
const media = soma / num;
alert("A média dos números é: " + media);