const btn = document.querySelector('.btn-modal')


btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const input = document.getElementById('input')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmpty = input.value.trim();
    const isValidEmail = emailRegex.test(input.value.trim());
    if(isEmpty && isValidEmail){
        removeErro()
    }else{
        addErroMsg('Error, please check your email')
    }
})

function addErroMsg(text){
    const areaInput = document.querySelector('.input-area')
    if(!document.querySelector('.erro-msg')){
        const spanErro = document.createElement('span')
        spanErro.classList.add('erro-msg')
        spanErro.innerText = text
        areaInput.insertAdjacentElement('afterend',spanErro)
    }
}

function removeErro(){
    const isErro = document.querySelector('.erro-msg')
    if(isErro){
        isErro.remove()
    }
}