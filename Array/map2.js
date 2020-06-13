const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit de Lapis", "preco": 10.85}',
    '{"nome": "Caneta", "preco": 4.25}'
]

// Retorne um array apenas com os preços

let paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)