const botonMascotaJugador = document.getElementById("botonMascota") 

const sectionReiniciar = document.getElementById("reiniciar")

const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
const botonReiniciar = document.getElementById("botonReiniciar") 
const spanMascotaJugador = document.getElementById("mascotaJugador")
const spanImagenJugador = document.getElementById("imagenJugador")
const sectionSeleccionarMascota = document.getElementById("seleccionarMascota")
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
const spanImagenEnemigo = document.getElementById("imagenEnemigo")
const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo") 
const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesEnemigo = document.getElementById('ataquesEnemigo')
const contenedorTarjetas = document.getElementById("contenedorPersonajes")
const contenedorAtaques = document.getElementById("contenedorAtaques")


let botonTierra
let botonAgua
let botonFuego
let mokepones = []
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
 
let ataqueEnemigo = []
let ataquesMokepon
let resultado
let opcionMokepones
let vidasEnemigo = 3
let vidasJugador = 3
let botones = []
let ataqueJugador = []
let ataquesMokeponEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0
let victoriasEnemigo =0

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques= []    
    }
}

let hipodoge = new Mokepon("Hipodoge", "./imagen/hipodoge.png", 3)
let capipepo = new Mokepon("Capipepo", "./imagen/capipepo.png", 3)
let ratigueya = new Mokepon("Ratigueya", "./imagen/ratigueya.png", 3)


hipodoge.ataques.push(
    {nombre: "Agua 💧", id: "botonAgua"},
    {nombre: "Agua 💧", id: "botonAgua"},
    {nombre: "Agua 💧", id: "botonAgua"},
    {nombre: "Fuego 🔥", id: "botonFuego"},
    {nombre: "Tierra 🌱", id: "botonTierra"}
)

capipepo.ataques.push(
    {nombre: "Fuego 🔥", id: "botonFuego"},
    {nombre: "Fuego 🔥", id: "botonFuego"},
    {nombre: "Fuego 🔥", id: "botonFuego"},
    {nombre: "Agua 💧", id: "botonAgua"},
    {nombre: "Tierra 🌱", id: "botonTierra"}
)


ratigueya.ataques.push(
    {nombre: "Tierra 🌱", id: "botonTierra"},
    {nombre: "Tierra 🌱", id: "botonTierra"},
    {nombre: "Tierra 🌱", id: "botonTierra"},
    {nombre: "Fuego 🔥", id: "botonFuego"},
    {nombre: "Agua 💧", id: "botonAgua"},
)

mokepones.push(hipodoge, capipepo, ratigueya)



function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach(mokepon => {
        opcionMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} class="tarjetaPersonaje"/>
        <label class="tarjetaMokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} width ="220px" height="311px">
        </label>`

        contenedorTarjetas.innerHTML += opcionMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")  
        
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = 'none' 
    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        spanImagenJugador.innerHTML = `<img src=${hipodoge.foto}  width= "130px" height="250px">`
        
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        spanImagenJugador.innerHTML = `<img src=${capipepo.foto}  width= "130px" height="250px">`
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        spanImagenJugador.innerHTML = `<img src=${ratigueya.foto}  width= "130px" height="250px">`
    } else{
        alert("SELECCIONA UNA MASCOTA")
        sectionSeleccionarMascota.style.display = 'flex' 
        sectionSeleccionarAtaque.style.display = 'none'
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()    
}

function extraerAtaques(mascotaJugador){
    let ataques = []

    mokepones.forEach(mokepon => {
        if(mascotaJugador == mokepon.nombre){
            ataques = mokepon.ataques
        }
    })

    // for (let i = 0; i < mokepones.length; i++) {
    //     if(mascotaJugador == mokepones[i].nombre){
    //         ataques = mokepones[i].ataques
    // } 
    
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach(ataque => {
        ataquesMokepon = `<button id=${ataque.id} class="botonAtaque Bataque">${ataque.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego  =  document.getElementById("botonFuego")
     botonAgua   =   document.getElementById("botonAgua")
     botonTierra =  document.getElementById("botonTierra")
     botones = document.querySelectorAll(".Bataque")
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => { 
           if (e.target.textContent === "Fuego 🔥") {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   

           } else if(e.target.textContent === "Agua 💧"){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   

           } else {   
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   

            }
            ataqueAleatorioEnemigo()
        })
    })

}

function seleccionarMascotaEnemigo(){
secuenciaAtaque()
    let ataqueAleatorio = aleatorio(0, mokepones.length -1)
        spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
        spanImagenEnemigo.innerHTML = `<img src=${mokepones[ataqueAleatorio].foto}  width= "130px" height="250px" class="imgEnemigo">`
        ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    }




function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio== 0 || ataqueAleatorio == 1 || ataqueAleatorio == 2){
        ataqueEnemigo.push("FUEGO")
    }else if(ataqueEnemigo== 3){
        ataqueEnemigo.push("AGUA") 
    }else{
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length == 5){
        combate()       
    }
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador =    ataqueJugador[jugador]
    indexAtaqueEnemigo =    ataqueEnemigo[enemigo]
}

function combate(){
    
    for (let index =0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATASTE 🙃")
        }else if(ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA" || ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO" ||  ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA"){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE 😎")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else {
            indexAmbosOponentes(index,index)
            crearMensaje("PERDISTE 😪")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("GANASTE EL COMBATE!!!! 🎉")
    }else if(victoriasJugador == victoriasEnemigo){
        crearMensajeFinal("EMPATASTE EL COMBATE!!!! 🙃")
    }else{
        crearMensajeFinal("PERDISTE EL COMBATE!!!! 😪")
    }
}

function crearMensaje(resultado){
    

    let nuevoAtaqueJugador =document.createElement('p')
    let nuevoAtaqueEnemigo =document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){ 
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load",iniciarJuego)