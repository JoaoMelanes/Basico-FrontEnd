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