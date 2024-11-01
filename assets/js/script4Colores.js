const divAzul = document.querySelector("#div-azul");
const divRojo = document.querySelector('#div-rojo');
const divVerde = document.querySelector('#div-verde');
const divAmarillo = document.querySelector('#div-amarillo');

const pintarNegro = (element) => {
    element.style.backgroundColor = 'black';
}

divAzul.addEventListener("click", (event) => {
    pintarNegro(event.target)
})
divRojo.addEventListener("click", (event) => {
    pintarNegro(event.target)
})
divVerde.addEventListener("click", (event) => {
    pintarNegro(event.target)
})
divAmarillo.addEventListener("click", (event) => {
    pintarNegro(event.target)
})