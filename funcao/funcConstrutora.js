function Carro(velMax = 200, d = 5) {
    // atributo privado
    let velAtual = 0

    // metodo publico
    this.acelerar = function () {
        if(velAtual + d <= velMax){
            velAtual += d
        } else {
            velAtual = velMax
        }
    }

    // METODO PUBLIC
    this.getVelAtual = function () {
        return velAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()