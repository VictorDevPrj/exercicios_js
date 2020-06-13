const notas = [7, 6.5, 2.3, 8, 9, 10, 7.1, 6.9, 4.3]

//sem usar callback

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7 ){
        notasBaixas.push(notas[i])
    }
}


//console.log(notasBaixas)

//Com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota >= 7)

console.log(notasBaixas3)
