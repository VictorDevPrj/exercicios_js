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

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Victor')
p2.falar()
