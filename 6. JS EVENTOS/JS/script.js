// adicionando eventos

const btn = document.querySelector("#my-button")
btn.addEventListener("click", function(){
    console.log("Clicou aqui")
})

// removendo evento

const secondBtn = document.querySelector('#btn')
function impriminindoMensagem(){
    console.log('test')
}
secondBtn.addEventListener('click', impriminindoMensagem)
const theeBtn = document.querySelector("#other-btn")

theeBtn.addEventListener("click", () => {
    console.log("Removendo evento")
    secondBtn.removeEventListener("click", impriminindoMensagem)
})

// Argumento do evento

const titulo = document.querySelector('#my-title')
titulo.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// Propagação

const containerBtn = document.querySelector("#btn-container")
const insideBtnContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

insideBtnContainer.addEventListener("click", (e) => {
    e.stopImmediatePropagation()
    console.log("Evento 2")
})

// removendo eventos padrao

const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault() 
    console.log("NÃO ALTEROU A PAGINA")
})

// eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

// Eventos de mouse

const mouse = document.querySelector("#mouse")

mouse.addEventListener("mousedown",() => {
    console.log('PRESSIONOU O BOTÃO')
})

mouse.addEventListener("mouseup",() => {
    console.log('SOLTOU O BOTÃO')
})

mouse.addEventListener("dblclick",() => {
    console.log('DOIS CLICK NO BOTÃO')
})

// movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`)
    // console.log(`No eixo Y: ${e.y}`)
})

// evento no scroll

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

// evento de focus

const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
    console.log(`Entrou no input`)
})

input.addEventListener("blur", (e) => {
    console.log(`Saiu no input`)
})

// eventos de carregamento da pagina

window.addEventListener("load", () => {
    console.log("A pagina carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})


// debounce

const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener('mousemove', debounce(() => {
    console.log('Executando a cada 400ms')
},400))