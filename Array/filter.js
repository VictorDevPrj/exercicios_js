const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'TV', preco: 2000, fragil: true},
    {nome: 'iPad PRO', preco: 3499, fragil: true},
    {nome: 'Copo de Plástico', preco: 2.49, fragil: false},
    {nome: 'Camiseta', preco: 49.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2000
}))

const eFragil = () => produtos.fragil

const eCaro = () => produtos.preco > 500

const prod = produtos.filter(eFragil).filter(eCaro)


console.log(prod)