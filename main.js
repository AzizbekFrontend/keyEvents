
const insert = document.querySelector('#insert')
const code = document.querySelector('.code')
const salom = document.querySelector('.keyCode')
const keyEvent = document.querySelector('.keyEvent')

document.addEventListener('keydown', (e) =>{
    document.querySelector('.entering').classList.add('hidden')
    document.querySelector('.container-keys').classList.remove('hidden')

    code.textContent = e.code
    salom.textContent = e.keyCode
    keyEvent.textContent = e.key

})




