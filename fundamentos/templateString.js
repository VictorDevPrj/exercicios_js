const nome = 'Rebeca'
const contatenacao = 'Olá ' + nome + '!' 
const template = `
    Olá
    ${nome}!`

console.log(contatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei..... ${up('cuidado')}!`)
