const activarModal=document.querySelector('#activarModal');
const contenedorModal=document.querySelector('.modalContenedor');

initApp();
function initApp(){
    activarModal.addEventListener('click', abriModal)
    contenedorModal.addEventListener('click', accionesModal)


}
function abriModal(){
    const modal=document.querySelector('.modalContenedor')
    modal.classList.remove('ocultar')
        }  
function accionesModal(e){
    e.preventDefault();
    if(e.target.classList.contains('modal-btn--Close')||
    e.target.classList.contains('modal-imgX')||
    e.target.classList.contains('modalContenedor')){
        cerrarModal();
                }    
    if(e.target.classList.contains('modal-btn--Save')){
        guardarModal(e)
        }
            }   

function cerrarModal(){
    const modal=document.querySelector('.modalContenedor')
    modal.classList.add('ocultar')
}
function guardarModal(elemento){
   let valorIngresado=elemento.target.parentElement.parentElement
   
   const info = {
    valor : valorIngresado.querySelector('.modal-input').value
    }
    if(info.valor==""){
        valorIngresado.querySelector('.modal-input').classList.add("advertencia")
    }else{
    const textoCambiar=document.querySelector('#texto')
    textoCambiar.innerHTML=info.valor
    valorIngresado.querySelector('.modal-input').value=""
    valorIngresado.querySelector('.modal-input').classList.remove("advertencia")

    cerrarModal()
}
}
