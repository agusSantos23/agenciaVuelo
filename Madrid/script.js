const elemento = document.querySelector('.Back');
const elementoVolver = document.getElementById('volver');


function activarVuelo(){

    elemento.style.animationName = 'vuelo';
    elemento.style.animationDuration = '3s';
    elemento.style.animationTimingFunction = 'linear';
}




elementoVolver.addEventListener('click', () =>{setTimeout(() => {window.history.back()}, 2301);setTimeout(activarVuelo, 300);})




