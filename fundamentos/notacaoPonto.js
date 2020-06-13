console.log(typeof console)


console.log(Math.ceil(6.1))
 
const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1)
console.log(obj1.nome)

function Obj(nome){
    // this o nome associado ao objeto que for criado apartir dessa funcao
     //this.nome => o nome ficara visivel para criar/instanciar essa funcao. Vai ficar publico!!
    this.nome = nome 
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

