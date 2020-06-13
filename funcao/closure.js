// Closure é o escopo criado quando uma função e declarada
// Esse escopo permite a funcao acessar e manipular variaveis externa a funcao

// Contexto lexico em acao!

const  x = 'Global'

function fora(){
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFunc = fora()
console.log(minhaFunc())



