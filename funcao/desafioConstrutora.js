// class é uma forma diferente de 
// escrever uma funcao em JAVASCRIPT

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é  ${this.nome}`)
    }
}


class Pessoa2 {
    constructor(nome) {
        this.falar = () => console.log(`Meu nome é ${nome}`)
    }
}

const p = new Pessoa2('Pedro')

p.falar()

const p1 = new Pessoa2('Victor')
p1.falar()

function Pessoa03(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa03('Miguel')
p3.falar()

