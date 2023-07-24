const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// La tarea consiste en seleccionar todos los span, iterar sobre ellos y asignarle cada uno de los colores del array tal que las letras formen el arcoiris.
const allSpan = document.querySelectorAll("span");
function rainbow () {
    allSpan.forEach ((element, i)=> {
        element.style.color = colors[i];
    })
}
rainbow();
