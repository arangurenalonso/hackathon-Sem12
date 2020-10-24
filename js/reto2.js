const acordion=document.querySelector('.acordion');
initApp();

function initApp(){
    acordion.addEventListener('click', abrirAcordion)

}

function abrirAcordion(e){
    e.preventDefault();

    if(e.target.classList.contains('acordion-titulo')){
        let titulo = e.target.parentElement;
        let contenido=titulo.querySelector('.acordion-contenido')
        contenido.classList.toggle('ocultar')
        }    
}
