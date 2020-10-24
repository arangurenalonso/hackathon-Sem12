const contenedorDropdown=document.querySelector('.contenedordropDown');
initApp();

function initApp(){
    contenedorDropdown.addEventListener('click', eventosDropdown)

}

function eventosDropdown(e){
    e.preventDefault();

    if(e.target.classList.contains('dropDown-Sectitulo')){
        let contenedor = e.target.parentElement;
         abriDropdown(contenedor)
        } 
    if(e.target.classList.contains('dropDown-titulo')){
        let contenedor = e.target.parentElement.parentElement;
         abriDropdown(contenedor)
        }  
    if(e.target.classList.contains('dropDown-img')){
            let contenedor = e.target.parentElement.parentElement;
             abriDropdown(contenedor)
            }                 
}
function abriDropdown(element){
    let listado=element.querySelector('.dropDown-lista')
        listado.classList.toggle('ocultar')
    let imagen=element.querySelector('.dropDown-img')
    if(imagen.getAttribute("src")=="img/flechaArriba.svg"){
        imagen.setAttribute('src','img/flechaAbajo.svg')
    }else{
        imagen.setAttribute('src','img/flechaArriba.svg')
    }
       
}
