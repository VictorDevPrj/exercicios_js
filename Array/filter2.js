Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(callback(this[i], i, this))
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'TV', preco: 2000, fragil: true},
    {nome: 'iPad PRO', preco: 3499, fragil: true},
    {nome: 'Copo de Plástico', preco: 2.49, fragil: false},
    {nome: 'Camiseta', preco: 49.99, fragil: false}
]


const eFragil = produto => produtos.fragil == true

const eCaro = produto => produtos.preco > 100


console.log(produtos.filter2(eCaro).filter2(eFragil))