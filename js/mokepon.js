const botonMascotaJugador = document.getElementById("botonMascota") 
const botonFuego = document.getElementById("botonFuego")
const botonAgua = document.getElementById("botonAgua")
const sectionReiniciar = document.getElementById("reiniciar")
const botonTierra = document.getElementById("botonTierra")
const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
const botonReiniciar = document.getElementById("botonReiniciar")
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")   
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

let ataqueJugador 
let ataqueEnemigo
let resultado
let vidasEnemigo = 3
let vidasJugador = 3


function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
        spanImagenJugador.innerHTML = "<img src=\"./imagen/hipodoge.png\" width=\"130px\" width=\"600px\">"
        
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        spanImagenJugador.innerHTML = "<img src=\"./imagen/capipepo.png\" width=\"110px\" width=\"380px\">"
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
        spanImagenJugador.innerHTML = "<img src=\"./imagen/Ratigueya.png\" width=\"150px\" width=\"680px\">"
    } else{
        alert("SELECCIONA UNA MASCOTA")
        sectionSeleccionarAtaque.style.display = 'none'
        sectionReiniciar.style.display = 'none'
    }
    
    botonMascotaJugador.disabled = true
    inputHipodoge.disabled = true
    inputRatigueya.disabled = true
    inputCapipepo.disabled = true

    seleccionarMascotaEnemigo() 
    sectionSeleccionarMascota.style.display = 'none' 
    sectionSeleccionarAtaque.style.display = 'flex'
    
}

function seleccionarMascotaEnemigo(){

    let ataqueAleatorio = aleatorio(1,3)
    

    if(ataqueAleatorio ==1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
        spanImagenEnemigo.innerHTML = "<img src=\"./imagen/hipodoge.png\" width=\"130px\" width=\"600px\"class=\"imgEnemigo\">"
        
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
        spanImagenEnemigo.innerHTML = "<img src=\"./imagen/Capipepo.png\" width=\"110px\" width=\"380px\" class=\"imgEnemigo\">"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        spanImagenEnemigo.innerHTML = "<img src=\"./imagen/Ratigueya.png\" width=\"150px\" width=\"680px\"class=\"imgEnemigo\">"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    ataqueEnemigo = aleatorio(1,3)

    if(ataqueEnemigo==1){
        ataqueEnemigo = "FUEGO"
    }else if(ataqueEnemigo==2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
    
}

function combate(){
    
    
    if(ataqueEnemigo == ataqueJugador){
        resultado = "EMPATASTE 🙃"
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "Tierra" || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ||  ataqueJugador =="TIERRA" && ataqueEnemigo == "AGUA"){
        resultado = "GANASTE 😎"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        resultado = "PERDISTE 😪"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    crearMensaje(resultado)
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("GANASTE EL COMBATE!!!! 🎉")
    }else if (vidasJugador == 0){
        crearMensajeFinal("PERDISTE EL COMBATE!!!! 😪")
    }
}

function crearMensaje(resultado){
    

   
    let nuevoAtaqueJugador =document.createElement('p')
    let nuevoAtaqueEnemigo =document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){ 
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true   
    botonAgua.disabled = true  
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load",iniciarJuego)