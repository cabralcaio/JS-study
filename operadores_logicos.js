/**
 * Operadores lógicos
 */

// Operador E

// V -> Verdadeiro
// F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

// média precisa ser maior ou igual 7 E preciso ter, no mínimo, 80% de presença
const media = (7 + 10 + 10) / 3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8) // true

/**
 * Operador OU
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 < 2) // false
console.log(5 > 3.5 || 7 > 8) // true

const estado = 'MG'

console.log(estado == 'SP' || estado == 'MG')

// const idade = 30

// console.log(idade >= 16 || idade < 60)
/**
 * Operador NOT
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 // false

console.log(!resultado) // true
console.log(!true)
console.log(!false)

const estaLogado = false