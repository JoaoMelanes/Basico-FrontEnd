// Strict

"use strict";

const opa = "ola"

// Log

let a = 1 
let b = 2

if (a == 1){
    a = b + 2
}

console.log(a)

// Debug

let c = 1 
let d = 2 

if (c == 1){
    c = d + 2
}

console.log(c)

// debugger

// Tratamento de dados

function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return
    }

    console.log("Valor correto")
    return result
}

checkNumber(5)
checkNumber("a")
checkNumber([])
checkNumber({})
checkNumber("teste")

// Exception

let x = 10

if(x != 11){
    // throw new Error("O valor de x não pode ser diferente de 11")
}

// Try catch

try {
    const soma = x + y
} catch(error){
    console.log(`Erro no programa ${error}`);
}

// finally

try{
    const value = checkNumber(1)

    if(!value){
        throw new Error("Valores invalidos")
    }
} catch(error) {
    console.log(`Opa aconteceu um problema: ${error}`)
} finally {
    console.log("O codigo foi executado")
}

// Assertions

function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos")
    } else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

// checkArray([])
checkArray([1,2,3,4])