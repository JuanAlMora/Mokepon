let ataqueJugador //variable global
let ataqueEnemigo
let resultado
let vidasEnemigo = 3
let vidasJugador = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = 'none'
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById("botonMascota") 
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    


    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("botonReiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador(){

    

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    
    let spanMascotaJugador = document.getElementById("mascotaJugador")
    let spanImagenJugador = document.getElementById("imagenJugador")

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

    let botonMascotaJugador = document.getElementById("botonMascota")
    botonMascotaJugador.disabled = true
    inputHipodoge.disabled = true
    inputRatigueya.disabled = true
    inputCapipepo.disabled = true

    

    seleccionarMascotaEnemigo()

    let sectionSeleccionarMascota = document.getElementById("seleccionarMascota")
    sectionSeleccionarMascota.style.display = 'none' 

    let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = 'flex'
    
}

function seleccionarMascotaEnemigo(){

    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
    let spanImagenEnemigo = document.getElementById("imagenEnemigo")

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
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")
    
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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesJugador = document.getElementById('ataquesJugador')
    let ataquesEnemigo = document.getElementById('ataquesEnemigo')

   
    let nuevoAtaqueJugador =document.createElement('p')
    let nuevoAtaqueEnemigo =document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    // let parrafo =document.createElement('p')
    // parrafo.innerHTML = "Tu personaje atacó con " + ataqueJugador +" el enemigo atacó con " + ataqueEnemigo +" "+ resultado
   
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    let parrafo =document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load",iniciarJuego)