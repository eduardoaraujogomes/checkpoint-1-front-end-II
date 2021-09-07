let html = document.querySelector("html")
let botao = document.querySelector("#modo-noturno")

botao.addEventListener('change',()=>{
    html.classList.toggle('modo-noite')
});
