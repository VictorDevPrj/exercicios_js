console.log(this === global)//APONTA PARA GLOBAL
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) 

//THIS APONTA PARA MODULE.EXPORTS

function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports) //DENTRO DE FUNCAO this nao aponta para module.exports
    console.log(this === module.exports)
    console.log(this === global) //THIS dentro da funcão aponta para GLOBAL 

    this.perigo = '...'// desse modo esta colocando em escopo global
}
logThis()