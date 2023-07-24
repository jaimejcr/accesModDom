const title = document.querySelector("h1");
const colors = ["blue", "orange", "purpple", "red", "pink", "yellow", "green", "gold"];
let currentIndex = 0;
function changeColor (){
    title.style.color = colors[currentIndex];
    currentIndex = (currentIndex +1) % colors.length
}
setInterval(changeColor, 1000);

// La fecha y su color de fondo cambian cada segundo (la hora se actualiza, funcionando como reloj).
function relojEnTiempoReal (){
    const actualidad = new Date();
    const dia = actualidad.getDay();
    const mes = actualidad.getMonth();
    const año = actualidad.getFullYear();
    const hora = actualidad.getHours();
    const minutos= actualidad.getMinutes();
    const segundos = actualidad.getSeconds();
    let fechaYHora = dia + "/" + mes + "/" + año + "  " + hora + ":" + minutos + ":" + segundos;
    const input = document.querySelector("#inp");
    input.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex +1) % colors.length;
    input.value = fechaYHora;
    input.style.textAlign = "center";

    setTimeout(relojEnTiempoReal, 1000);
}
relojEnTiempoReal()

// Los challenges completados tienen color de fondo verde.
// Los challenges ongoing tienen color de fondo amarillo.
// Los challenges sin empezar tienen color de fondo rojo.

const lista = document.querySelectorAll("#lista");
const element = document.querySelectorAll("li");


for (let i = 0; i < element.length; i++ ) {
    const elemento = element[i];
    if(elemento.textContent.includes("Done")){
        elemento.style.backgroundColor = "green";
        
    } else if (elemento.textContent.includes("Ongoing")){
        elemento.style.backgroundColor = "yellow";
    } else if (elemento.textContent.includes("Coming")){
        elemento.style.backgroundColor = "red";
    }
    console.log(elemento);
}
