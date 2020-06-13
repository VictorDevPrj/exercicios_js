const funcoesPassadas = require('./passandoParametros')

console.log(funcoesPassadas.ola('Ana','Lucas', 'João'))
console.log(funcoesPassadas.conta(199))


module.exports = function(){
   // let alet = funcoesPassadas.conta(10)
    return funcoesPassadas.conta(10)
}