const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function (x, y){
    return x - y
})

imprimirResultado(3, 4, function (x, y, z = 5){
    if (x < y){
        console.log('')
        console.log('X É MENOR QUE Y')
        x += y / 2
        x += soma(z, y)
        console.log(x)
        console.log('')
    }
    return x - (y + z)
})
console.log('----------')
imprimirResultado(3, 4, (x, y) => x * y)
console.log('---------')


console.log('=========')
imprimirResultado(3, 4, (x, y, z = 6) => x * y + z)
console.log('=========')

console.log('//////////////////')
imprimirResultado(3, 4, (x, y, z = soma(x, y)) => x * y + z)
console.log('///////////////////')

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
