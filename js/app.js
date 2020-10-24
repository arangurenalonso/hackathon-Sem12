const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');

initApp();

function initApp(){
    //Listener Escoger Item
    cursos.addEventListener('click', comprarCurso)

}

//Funciones
function comprarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        let curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso);
    }    
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent
    }

    inserCarrito(infoCurso);
}

function inserCarrito(curso){
    const row = document.createElement('tr');

    row.innerHTML= `
        <td>
            <img src='${curso.imagen}' style='width:100%;'/>
        </td>

        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href='#' class='borrar-curso'>X</a>
        </td>
    `

    listaCarrito.appendChild(row);
}