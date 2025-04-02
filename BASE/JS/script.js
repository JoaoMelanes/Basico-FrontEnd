console.log("Executou o JS");

// Operadores
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(5+(2*4));

// String
console.log("aspas dupla");
console.log('aspas simples');
console.log(`crase`);
console.log('texto com \nbarra N pula uma linha');

//concatenação
let nome = "João";
let sobrenome = "Pedro";
console.log(nome + " " + sobrenome);

//interpolação
console.log(`O nome dele é: ${nome + " " + sobrenome}`);

// Boolean
console.log(`10 é maior que 3? ${10>3}`);
console.log(`10 é menor que 3? ${10<3}`);

// Comparação
console.log(10>10);
console.log(10<10);
console.log(10==10);
console.log(10!=10);
console.log(10===10);
console.log(10>=10);
console.log(10<=10);

// Comparacão identico
console.log(10 !== '10');
console.log(10 === '10');

// Operadores lógicos
// && precisa que os dois sejam verdadeiros para ser true
console.log(10 === 10 && 10 === 10);
// || precisa que apenas um seja verdadeiro para ser true
console.log(10 === 10 || 10 === 9);
// ! inverte os valores boolean se for falso ele transforma em verdadeiro
console.log(!5 > 2);

// Variaveis
let nome1 = 'João Pedro';
console.log(nome1);

nome1 = "Carlos";
console.log(nome1);

const idade = 21;
console.log(idade);

let a=5, b=5, c=10;
console.log(a , b , c);

const nomecompleto = "Joao Pedro";
const NOMECOMPLETO = "Carlos";
console.log(nomecompleto , ",", NOMECOMPLETO);

let _nome = "João", $nome = "Pedro";
console.log(_nome , $nome);

// Funções padrões do JS

const senha = prompt("Digite a senha: ");

alert(`Olá, mundo!`);

console.log(Math.max(10,5,4,6,7));
console.log(Math.floor(10.6));
console.log(Math.ceil(10.6));

console.error(`ERROR`);
console.warn(`AVISO`);

// Estruturas de controle
const m = prompt("Dijite um numero: ");

if(m > 5){
    alert("Esta correto");
} else{
    alert("Não ésta correta!");
}


const n = 10;
const q = 5;

if(n> q){
    console.log(`IF`);
} else if(n< q){
    console.log(`ELSE IF`);
} else {
    console.log(`ELSE`);
}


// Estrutura de repetição
let tentativa = 0;

while(true){
    const senha = prompt("Digite a senha: ");
    if(senha == "110428"){
        console.log("senha correta")
        break
    } else if(tentativa === 1

    ){
        break
    } else{
        console.log(`Senha incorreta ${tentativa}`)
    }
    tentativa++
}


for(let t = 0; t < 1; t++){
    const senha1 = prompt("Digite a senha: ")
    if(senha1 === "110428"){
        console.log("Senha correta")
        break
    } else{
        console.log(`Senha incorreta ${t}`)
    }
}


// Estrutura condicional

const job = "Programador"

switch(job){
    case "Advogado":
        console.log("Voçê é um advogado")
        break
    case "Programador":
        console.log("Voçê é um Programador")
        break
    case "Engenheiro":
        console.log("Voçê é um engenheiro")
        break
    default:
        console.log("Não tem sua profissão")
        break
}

let tent = 0;
for( tent; tent < 1; tent++){
    const senha3 = prompt("Dijite a senha: ");
    const valor = "110428";
    switch(valor){
        case senha3:
            console.log("Senha correta");
            break
        default:
            console.log(`Senha incorreta ${tent}`);
            continue
    }
    break
}

// Funções

function myFunction (){
    console.log("Testando");
}

myFunction()
myFunction();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variavel")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt){
    console.log(`Imprimindo txt: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa!")
funcaoComParametro("Imprimindo outra coisa!")

// Função com retorno

const a1 = 10
const b1 = 20
const c1 = 30
const d1 = 40

function soma(a,b){
    return a + b
}
const resultado = soma(a1, d1)

console.log(resultado)

// Arrow funciton

const testeArrow = () => {
    console.log('Arrow functiona')
}
testeArrow()

const parOuImpar = (a) => {
    if(a % 2 === 0){
        console.log("Par")
        return
    }

    console.log("Impar")
}
parOuImpar(5)
parOuImpar(10)

const somaArrow = (a,b) => a + b
console.log(somaArrow(5,5))

const helloWorld = () => console.log("Hello world")
helloWorld()

// Parametro opcional

const multiplication = (x, m) => {

    if(m === undefined){
        return m * 2
    } else{
        return m * x
    }

}

console.log(multiplication(5))
console.log(multiplication(5, 10))


const greeting = (name) => {

    if(!name){
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()
greeting("João")

// valor default

const customGreeting = (name , greet = "Olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Matheus"))
console.log(customGreeting("João", "Bom dia"))

const textRepeat = (text , reapet = 2) => {
    let i = 0
    for (i ; i < reapet; i++){
        console.log(text)
    }
}

textRepeat("Testando")
textRepeat("Testando", 5)

// Closure

function someFunction(a, b){
    let num1 = a
    let num2 = b

    const soma = () => num1 + num2

    const diminuir = () => num1 - num2

    const multiple = () => num1 * num2

    console.log(soma())
    console.log(diminuir())
    console.log(multiple())
}

someFunction(5, 10)

// Recursão

const untilTen = (n, m) => {

    if(n < 10){
        console.log(" N é menor que 10, parei!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(70, 5)

function factorial(x){

    if(x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

console.log(factorial(10))

// Array

const lista = [1,2,3,4,5]
console.log(lista)

const itens = ["João", 1, true, 1.2, []]
console.log(itens)

const arr = ["a", "b", "c", "d", "e"]

console.log(arr[3])

// Propriedades

const number = [5,1,20]

console.log(number.length)

// Metodos

const otherNumbers = [1,2,3]

const allNumbers = number.concat(otherNumbers)
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())

console.log(text.indexOf("g"))

// Objetos

const person = {
    name: "João",
    agr: 21,
    job: "Programador"
}

console.log(person)
console.log(person.name)

// Criando e deletando prop

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: "20000",
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

const obj = {
    a: "test",
    b: true
}

// Outros metodosd do objeto

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj2)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(obj))
console.log(Object.entries(obj2))
console.log(Object.entries(car))

// Mutação

const lis = {
    name: "João"
}

const lis1 = lis

console.log(lis1)
console.log(lis)

lis.age = 21
console.log(lis1)
console.log(lis)

delete lis1.age
console.log(lis1)
console.log(lis)

//Loops em arrays

const users = ["matheus", "marcos", "lucas", "João"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando users: ${users[i]}`)
}

//push e pop

const array = ['a','b','c']

// adiciona ao final
array.push("d")

console.log(array)

// remove
array.pop()
const resgate = array.pop()

console.log(resgate)
console.log(array)

// shift e unshift

const letter = ["a",'b','c']
console.log(letter)

// remove ao inicio
letter.shift()
console.log(letter)

// adiciona
letter.unshift("a")
console.log(letter)

// indexOf e lastIndexOf

const myElements = ['morango','maça','pera','abacate','uva','abacate']

// esquerda pra direita
console.log(myElements.indexOf("maça"))
console.log(myElements.indexOf("abacate"))

// direita pra esquerda
console.log(myElements.lastIndexOf("maça"))
console.log(myElements.lastIndexOf("abacate"))

// Slice

const testeSlice = ['a','b','c','d','e','f','g']

const subArray = testeSlice.slice(2, 4)

console.log(testeSlice)
console.log(subArray)

// ForEach

const nums = [1,2,3,4,5,5,6,7,]

nums.forEach((numero) => {
    console.log(`O número é: ${numero}`)
})

const posts = [
    {title: 'Primeiro post', category: 'PHP'},
    {title: 'Segundo post', category: 'JavaScript'},
    {title: 'terceiro post', category: 'Python'},
]

posts.forEach((post) => {
    console.log(`O titulo é: ${post.title}, da categoria: ${post.category}`)
})

// includes 

const marcas = ["BMW",'VW','FIAT']

console.log(marcas.includes("FIAT"))
console.log(marcas.includes("KIA"))

if(marcas.includes("BMW")){
    console.log("A carros da bmw!")
}

// Reverse

const reverseTeste = [1,2,3,4,5,6,7]

reverseTeste.reverse()

console.log(reverseTeste)

// Trim

const trimTest = "   testando \n  "

console.log(trimTest)
console.log(trimTest.trim())

// PadStart

const padStart = '10'

const newNumber = padStart.padStart(4, '0')

console.log(padStart)
console.log(newNumber)

//PadEnd

const padEnd = "1"

const newPadEnd = padEnd.padEnd(4, '0')

console.log(padEnd)
console.log(newPadEnd)

// Split

const split = "o rato roeu a roupa do rei de roma. , "

const arraySplit = split.split(" ")

console.log(arraySplit)

// Join

const arrayJoin = arraySplit.join(" ")

console.log(arrayJoin)

// repeat

const newRepeat = split.repeat(5)

console.log(newRepeat)

// Rest operator

const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total
}

console.log(somaInfinita(1,2,3))
console.log(somaInfinita(1,20,30))

// For of

const somaInfinita2 = (...args) => {
    let total = 0

    for(num3 of args){

        total += num3
    }

    return total
}

console.log(somaInfinita2(1,2,4,5))

// Destructuring

const userDetails = {
    firstName: "João",
    lastName: "Pedro",
    job1: "Programador"
}

const {firstName, lastName , job1} = userDetails

console.log(firstName, lastName, job1)

const {firstName: primeiroNome, lastName: segundoNome, job1: trabalho} = userDetails

console.log(primeiroNome, segundoNome, trabalho)

// Destruction em arrays

const veiculosArray = ["Carro","Submarino","Avão","Helicoptero"]

const [veiculoA, veiculoB, veiculoC, veiculoD] = veiculosArray

console.log(veiculoA,veiculoB,veiculoC,veiculoD)

// JSON

const myJSon = '{"name": "João", "age": 21, "skills": ["PHP","JavaScript","Python"]}'

// JSON para objeto e objeto para JSON

// transforma em um Objeto
const myObject = JSON.parse(myJSon)

console.log(myObject)
console.log(myObject.name)

// transforma em um String

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)