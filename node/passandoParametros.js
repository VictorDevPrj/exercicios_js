module.exports = {
    ola(...nomes) {
        return nomes.map(nome => `Boa semana ${nome}`)
    },
    conta(num) {
        return (Math.random(1, 10) * num).toFixed(4)
    }
}

const retornando = require('./passandoParametrosCliente')

console.log(retornando())
