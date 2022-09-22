const num = prompt("Digite um número");
for (let i = 1; i <= 10; i++){
    let resultado = num * i
    document.write(`<p>${i} X ${num} = ${resultado}</p>`)
}