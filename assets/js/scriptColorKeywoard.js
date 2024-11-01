const divKey = document.querySelector('#key')
let colorKeywoard 

const agregarDiv = (color) => {
    const contenedor = document.querySelector('body');
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.backgroundColor = color;
    contenedor.appendChild(nuevoDiv);
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'a' || event.key === 'A') {
        colorKeywoard = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
        colorKeywoard = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        colorKeywoard = 'skyblue';
    } else if (event.key === 'q' || event.key === 'Q') {
        agregarDiv('purple')
    } else if (event.key === 'w' || event.key === 'W') {
        agregarDiv('grey')
    } else if (event.key === 'e' || event.key === 'E') {
        agregarDiv('brown')
    }

    divKey.style.backgroundColor = colorKeywoard;
});


