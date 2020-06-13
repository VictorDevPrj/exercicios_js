const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //.push adiciona valores no array
console.log(valores)

console.log(valores.pop())  // .pop exclui ultimo valor do array
delete valores[0]           // delete exclui valor selecionado no array
console.log(valores)

console.log(typeof valores)

