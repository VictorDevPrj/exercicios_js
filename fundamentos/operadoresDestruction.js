// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        NUMERO: 100
    }
}

// {} -> representa o operador
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, NUMERO} } = pessoa
console.log(logradouro, NUMERO)
