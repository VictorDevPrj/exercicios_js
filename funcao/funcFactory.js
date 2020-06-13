// Factory simples, é uma funcao q retorna um objeto
// criando uma nova instancia apartir da chamada do objeto
// ELA TEM OBJETIVO DE FABRICAR UM OBJETO
function criarPessoa(){    
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
