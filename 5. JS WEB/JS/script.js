// Movendo se pelo dom

console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes[1])

console.log(document.body.childNodes[1].childNodes[1].textContent)

// Seletores de elementos

const listItens = document.getElementsByTagName("li")
console.log(listItens)

const titulo = document.getElementById("titulo")
console.log(titulo)

const produtos = document.getElementsByClassName("produtos")
console.log(produtos)

// Boa pratica de seletores

const produtosQuery = document.querySelectorAll(".produtos")
console.log(produtosQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// Alterando o HTML

// cria um elemento no começo
const p = document.createElement("p")
const header = titulo.parentElement
header.insertBefore(p, titulo)

// cria um elemento no final
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)

// muda um elemento ja criado
const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo"
header.replaceChild(h2, titulo)

//cria novos elementos para ser adicionado
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
const h3 = document.createElement("h3")
h3.appendChild(myText)
mainContainer.appendChild(h3)

//modificando atributos
const firstLink = navLinks.querySelector("a")
firstLink.setAttribute("href", "https://www.google.com")
firstLink.setAttribute("target", "_blank")

//consulta atributos
console.log(firstLink.getAttribute("href"))

// Altura e largura
// com borda
const footer = document.querySelector("footer")
console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

// sem borda
console.log(footer.clientHeight)
console.log(footer.clientWidth)

// posição do elemento
const produtos1 = produtos[0]
console.log(produtos1.getBoundingClientRect())

// ALterando estilos
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "blue"
mainContainer.style.paddingTop = "15px"

// Alterando estilos de varios elementos
for(const li of listItens){
    li.style.backgroundColor = "red"
}