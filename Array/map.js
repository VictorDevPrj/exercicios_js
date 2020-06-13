const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// map -> FOR com propósito
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)
// outro EXEMPLO
let resultado2 = nums.map(function(e){
    return e < 4 ?  1 : e - 3
})

console.log(resultado2)

let re = nums.map(function(e){
    console.log(e)
    return e.toString()
})

console.log(re)

let res2 = nums.map(function(e) {
    let a = (e) => function(e){e + 2}
    return a
})

console.log(res2)

const soma10 = e => e + 10

const triplo = nums.map(function(e){
    return soma10(e)
})

console.log(triplo)