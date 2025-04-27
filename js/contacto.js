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

console.log({ headerBtn, headerUl });

// Añadimos un evento al botón del header: al hacer click, ejecutamos la función
headerBtn.addEventListener(`click`, () => {

    // Cuando hacemos click en el botón del header, se abre o se cierra el menú y se cambia su color segun el estado
    headerBtn.classList.toggle(`Header-button--isOpen`);
    headerUl.classList.toggle(`isVisible`);
    header.classList.toggle(`Header--active`);
});


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