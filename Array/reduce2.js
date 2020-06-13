const alunos = [
    {nome: 'Joao', nota: 7.8, bolsista: false},
    {nome: 'Pedro', nota: 5.8, bolsista: true},
    {nome: 'Ana', nota: 8.1, bolsista: false},
    {nome: 'Flavia', nota: 7.0, bolsista: true},
    {nome: 'Marina', nota: 4, bolsista: false},
    {nome: 'Miguel', nota: 9, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
