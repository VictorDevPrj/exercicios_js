const obj = {a: 1, b: 2, c: 3, soma() {return a + v + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2}"))
console.log(JSON.parse('{"a": 1, "b": 2}'))
console.log(JSON.parse('{"A": 1, "V": 2, "b": "STRING"}'))