// setTimeout

console.log("Ainda não executou")

setTimeout(() => {
    console.log("Timeout")
}, 2000);

console.log("Ainda não executou")

// setInterval

console.log("Ainda não executou")

// setInterval(() => {
//     console.log("Interval")
// },3000)

console.log("Ainda não executou")

// Promises

const promises = Promise.resolve( 5 + 5)

console.log("Algum codigo")

promises.then((value) => {
    console.log(`A soma é: ${value}`)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`A soma agora é: ${value}`))

console.log("outro codigo")

// Falha na promise - tratando error

Promise.resolve(4 * "stre")
    .then((n) => {
        if( Number.isNaN(n)){
            throw new Error("Não é um numero")
        }
    })
    .catch((err) => {
        console.log(`Um erro ocorreu: ${err} `)
    })

// rejeitando promise

function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve("O numero é maior que 10 ")
        }else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é: ${v}`).catch((err) => console.log(`Um erro ocorre: ${err}`)))
b.then((v) => console.log(`O resultado é: ${v}`).catch((err) => console.log(`Um erro ocorre: ${err}`)))

// Resolvendo varias promisses

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else {
        reject("ERROR")
    }
})

Promise.all([p1,p2,p3]).then((value) => {console.log(value)})

// async function

async function somarDelay(n1, n2) {
    return n1 + n2 
}

somarDelay(4,2).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

// await

function resolveDelay(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise")
        },2000)
    })
}

async function chamadaAsync() {
    console.log("Chamando a promise, aguardando o resultado...")
    const result = await resolveDelay()
    console.log(`o resultado chegou ${result}`)
}


chamadaAsync()

// Generators

function* generator(){
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)