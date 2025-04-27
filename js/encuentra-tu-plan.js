'use strict'

/* ----------------------------- *\
    MENU DE NAVEGACIÓN
    Interacciones:
    - Hacer click en el botón de la cabecera para mostar el menu
    - Hacer click en el botón de la cabecera para ocultar el menu

    Estructura:
    - Constantes
    - Eventos
    - Funciones

/* ----------------------------- */


// Selección de todo el header
const header = document.querySelector(`.Header`);

// Selección del boton del header
const headerBtn = document.querySelector(`.Header-button`);

// Selección de la lista de enlaces del menu de navegación
const headerUl = document.querySelector(`.Header-ul`);

console.log({ header, headerBtn, headerUl });

// Añadimos un evento al botón del header: al hacer click, ejecutamos la función
headerBtn.addEventListener(`click`, () => {

    // Cuando hacemos click en el botón del header, se abre o se cierra el menú y se cambia su color segun el estado
    headerBtn.classList.toggle(`Header-button--isOpen`);
    headerUl.classList.toggle(`isVisible`);
    header.classList.toggle(`Header--active`);
});


/* ----------------------------- *\
    CARTAS FLIPPED
    Interacciones:
    - Hacer click en la carta frontal para mostrar la carta trasera
    - Hacer click en la carta trasera para mostrar la carta frontal

    Estructura:
    - Constantes
    - Eventos
    - Funciones

/* ----------------------------- */

// Seleccion de todas las cartas
const cards = document.querySelectorAll(".Main-card");

console.log (cards);
  
// Recorrer cada carta
cards.forEach(card => {

    // Seleccion de las caras de las cartas
    const front = card.querySelector(".Main-card-front");   //delantera
    const back = card.querySelector(".Main-card-back");     //trasera

    console.log({ front, back });
  
    // Cuando hacemos click en la parte delantera o trasera de la carta
        // se alterna la clase 'flipped' para mostrar la parte opuesta
    [front, back].forEach(face => {
    face.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
    });
});


    
/* ----------------------------- *\
    ACORDEÓN - FAQ
    Interacciones:
    - Hacer click en la pregunta quitar la clase activo de todos los bloque
    - Añadir la clase activo al bloque con la posición del pregunta

    Estructura:
    - Constantes
    - Eventos
    - Funciones

/* ----------------------------- */

// Selección de todos los bloques
const bloque    = document.querySelectorAll('.Main-bloque')
// Selección de todas las preguntas
const pregunta        = document.querySelectorAll('.Main-pregunta')

console.log({ bloque, pregunta });

// Recorrer TODAS las pregunta
pregunta.forEach( ( cadaPregunta , i )=>{
    // Asignar un click a cada pregunta
    pregunta[i].addEventListener('click', ()=>{

        // Recorrer todos los bloque
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitar la clase activo de todos los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadirla clase activo al bloque cuya posición sea igual al del pregunta
        bloque[i].classList.add('activo')
    })
})


  
/* ----------------------------- *\
    ANIMACIONES
    Objetivo: Detectar cuando un elemnto entra en el viewport (pantalla) y cuando eso pasa añadirle la clase "isVisible" para que se vea la animación de entrada.

    Estructura:
    - Constantes
    - Funciones
    - Eventos
    
/* ----------------------------- */

// Selección de todos los elementos que tengan la clase "observe"
const elements = document.querySelectorAll(`.observe`)

// Definimos la función callback que se ejecutará cuando el elemento entre en el viewport
let callback = (cambios, observer) => {

        // Cambios es un array de objetos que contienen información sobre los elementos que han cambiado de estado
        cambios.forEach( ( entry ) =>{
            
            //Desestructuramos las propiedades isIntersecting (booleano) y target (el elemento observado)
            let { isIntersecting , target} = entry
    
            // Si el elemento está en el viewport, añadimos la clase "isVisible" al elemento
            if ( isIntersecting ){
               target.classList.add(`isVisible`)}
        })
    }

    let options = {
        
        threshold : .5      // Se activa cuando al menos el 50% del elemento es visible en el viewport
    }
    
    // Creamos una nueva instancia de IntersectionObserver y le pasamos la función callback y las opciones
    let observer = new IntersectionObserver ( callback , options)
    
    // Recorremos cada elemento con la clase 'observe' y le aplicamos el observer
    elements.forEach (( eachElemento) => {
        observer.observe(eachElemento)  //
    })
  
  