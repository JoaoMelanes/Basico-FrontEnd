// Metodos

const animal = {
    nome: 'Bob',
    latir: function () {
        console.log("au au")
    }
}
console.log(animal.nome)
animal.latir()

const pessoa = {
    name: "João",
    getNome: function () {
        return this.name
    },
    setNome: function(novoNome){
        this.name = novoNome
    }
}

console.log(pessoa.name)
console.log(pessoa.getNome())
pessoa.setNome('Matheus')
console.log(pessoa.name)

// Prototype

const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const list = []
console.log(Object.getPrototypeOf(list))

const myObject = {
    a: "asd"
}

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

// classes basicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"

console.log(bulldog)

// Função como classe - função construtora

function criarCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("bob", "vira-lata")

console.log(bob)

// Classes Formato Novo

function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("hugo", "husky")

console.log(husky)

// metodos na função construtora

Cachorro.prototype.uivar = function (){
    console.log("Auuuuuu!")
}

husky.uivar()

// Classes ES6

class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("jeff", "Labrador")

console.log(jeff)

class Caminhao{
    constructor(exios, cor){
        this.exios = exios
        this.cor = cor
    }

    descreverCaminhão(){
        console.log(`Este caminhão tem: ${this.exios} eixos, e a cor: ${this.cor} `)
    }
}

const scania = new Caminhao(6, 'Vermelho')

console.log(scania)

scania.descreverCaminhão()

// Symbols

class Aviao {
    constructor(marca, turbina){
        this.marca = marca
        this.turbina = turbina
    }

}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[pilotos] = 3
Aviao.prototype[asas] = 2

const boing = new Aviao("boing", 10)

console.log(boing)

console.log(boing[asas])
console.log(boing[pilotos])

// Getter e Setter

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulos(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulos)

myPost.adicionarTags = "Programação, JavaScript, Python"

console.log(myPost)

// Herança

class Mamifero{
    constructor(patas){
        this.pastas = patas
    }
}

class Lopo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lopo(4, "shark")

console.log(shark)
// InstanceOf
console.log(shark instanceof Lopo)
console.log(Lopo instanceof Mamifero)
