const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
aprovados.forEach((nome, indice) => console.log(nome, indice))

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)
