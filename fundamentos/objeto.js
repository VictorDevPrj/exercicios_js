const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4899.90
prod1['Desonto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blala:2
        }
    }
}

console.log(prod2)
