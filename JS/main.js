const selecionarElmento = function(element){
    return document.querySelector(element)
}

let menuTo = selecionarElmento('.menuTo');
let body = selecionarElmento('body')

menuTo.addEventListener('click',function(){
    body.classList.toggle('open')
})