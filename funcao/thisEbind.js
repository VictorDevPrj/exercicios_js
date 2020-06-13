const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    },

    faleMais() {
        console.log('oi')
        pessoa.falar()
        console.log('oi')
        console.log(pessoa.falar.bind(pessoa), "Tudo bem")
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falar2 = pessoa
falar2.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

pessoa.faleMais()