let valor // não inicializada
console.log(valor)

valor = null //ausência de valor 

console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)

produto.preco = null // sem preco
