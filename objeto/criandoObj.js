// usando a notação literal

const obj1 = {}

console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //this com  isso ele vai ser publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 2.99, 0.15)
const p2 = new Produto('Notebook', 2988, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao FACTORY
function crarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = crarFuncionario('Joao', 4452, 4)
const f2 = crarFuncionario('Pedro', 4452, 4)

console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)