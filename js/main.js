const $IMGS = document.querySelectorAll("button img")
const $BUTTON = document.querySelectorAll("button")
const $BOX_GAME = document.querySelector(".bck-img")
const $PC_BOX = document.querySelector(".bck-img1")
const $TEXT = document.querySelector(".text")
const $MY_COUNT = document.querySelector(".me p")
const $PC_COUNT = document.querySelector(".pc p")

let arrayPC = Array.from($IMGS)
let myCount = 0,
pcCount = 0

document.addEventListener("click",(e)=>{
    if(e.target.matches(".rock") ||e.target.matches(".paper")|| e.target.matches(".scisser")){
        let button = e.target
        $BOX_GAME.style.display = "block"
        $BOX_GAME.innerHTML = `<img src="${button.src}"></img>`
    
    setTimeout(()=>{
        $PC_BOX.style.display = "block"
        let pc = Math.floor(Math.random()* arrayPC.length)
        $PC_BOX.innerHTML = `<img src="${arrayPC[pc].src}" class="${arrayPC[pc].classList}"></img>`
        
        let myClass = button.classList.value,
        pcClass = $PC_BOX.querySelector("img").classList.value

        WHO_WINE(myClass,pcClass)
    },1000)    
}
})

function WHO_WINE(me,pc){
    if(me === pc){
        $TEXT.textContent = "DRAW"
    }

    else if((me === "rock") && (pc === "scisser")||
    (me === "scisser" && pc === "paper") ||
    (me === "paper" && pc === "rock")){
        $TEXT.textContent = "YOU WIN"
        myCount++;
        $MY_COUNT.textContent = myCount
    }
    else{
        $TEXT.textContent = "YOU LOSE"
        pcCount++;
        $PC_COUNT.textContent = pcCount;
    }
}


/*
El código comienza creando un array llamado "arrayPC" que contiene todas las imágenes de los elementos 
con la clase "$IMGS". Luego se declaran las variables "myCount" y "pcCount" con un valor inicial de 0. 

Después, se agrega un evento de escucha al documento que se activa cuando se hace clic en cualquier 
parte del documento. Dentro del evento de clic, se verifica si el elemento objetivo del evento 
coincide con las clases "rock", "paper" o "scisser". Si coincide, se guarda el elemento en la variable 
"button" y se muestra el elemento con la clase "$BOX_GAME" y se establece su contenido HTML como una 
imagen con la fuente del botón clicado. 

A continuación, se establece un temporizador de 1 segundo usando la función "setTimeout". Cuando se 
cumple el temporizador, se muestra el elemento con la clase "$PC_BOX" y se selecciona una imagen 
aleatoria del array "arrayPC" para mostrarla en el elemento "$PC_BOX". Luego se obtienen las clases 
del elemento "button" y del primer elemento "img" dentro de "$PC_BOX" y se pasan como argumentos a la 
función "WHO_WINE". 

La función "WHO_WINE" compara las clases "me" y "pc" pasadas como argumentos. Si son iguales, se 
establece el texto del elemento "$TEXT" como "DRAW". Si las clases son diferentes, se verifica si se 
cumplen las condiciones para que el jugador gane. Si se cumple alguna de las condiciones, se establece 
el texto del elemento "$TEXT" como "YOU WIN" y se incrementa la variable "myCount" en 1. Si no se 
cumple ninguna de las condiciones anteriores, se establece el texto del elemento "$TEXT" como 
"YOU LOSE" y se incrementa la variable "pcCount" en 1.  */