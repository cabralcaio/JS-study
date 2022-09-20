// Delimitação de Strings 

const aspasSimples = 'Olá,\nmundo'
// console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas = "Olá eu sou o \nJavascript. Eu sou melhor que o\nPython"
// console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o Javascript. Eu sou melhor que o Python`
// console.log(textoComCrase)

// métodos das strings

const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
// console.log(texto[5], texto[17])
console.log(texto.substring(1, 12))
// case sensitive 
console.log(texto.replace('Javascript', 'Rust')) // substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/g, 'PHP'))
console.log(texto.replace(/Javascript/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body>'))

const mensagem = '                                                        Olá, mundo                                 '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8)