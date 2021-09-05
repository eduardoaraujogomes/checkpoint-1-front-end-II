
let cadNome = document.querySelector(".cadNome");
let cadNomeInput = document.querySelector(".cadNomeInput");

let cadCodigo = document.querySelector(".cadCodigo");
let cadCodigoInput = document.querySelector(".cadCodigoInput");

let cadTamanho = document.querySelector(".cadTamanho");
let cadTamanhoSelect = document.querySelector(".cadTamanhoSelect");

let cadCor = document.querySelector(".cadCor");
let cadCorInput = document.querySelector(".cadCorInput");

let cadPreco = document.querySelector(".cadPreco");
let cadPrecoInput = document.querySelector(".cadPrecoInput");

let cadDescricao = document.querySelector(".cadDescricao");
let cadDescricaoInput = document.querySelector(".cadDescricaoInput");

let btnEnviar = document.querySelector("#btnEnviar");

cadNomeInput.addEventListener("keyup", ()=> {
    if(cadNomeInput.value.length <= 2 ||cadNomeInput.value.length > 20){
        cadNome.setAttribute('style', "color: red")
        cadNome.innerHTML ="Nome do Produto *De 3 e 20 caracteres."
    } else {
        cadNome.setAttribute('style', "color: green")
        cadNome.innerHTML ="Nome do Produto *"
    }
})

cadCodigoInput.addEventListener("keyup", ()=> {
    if(cadCodigoInput.value.length <= 2 ||cadCodigoInput.value.length > 10){
        cadCodigo.setAttribute('style', "color: red")
        cadCodigo.innerHTML ="Código do Produto *De 3 e 10 digitos."
    } else {
        cadCodigo.setAttribute('style', "color: green")
        cadCodigo.innerHTML ="Código do Produto *"
    }
})

cadTamanhoSelect.addEventListener("click", ()=> {
    if(cadTamanhoSelect.value == "emBranco"){
        cadTamanho.setAttribute('style', "color: red")
        cadTamanho.innerHTML ="Tamanho *Defina um tamanho."
    } else {
        cadTamanho.setAttribute('style', "color: green")
        cadTamanho.innerHTML ="Tamanho *"
    }
})

cadCorInput.addEventListener("keyup", ()=> {
    if(cadCorInput.value.length <= 2 ||cadCorInput.value.length > 20){
        cadCor.setAttribute('style', "color: red")
        cadCor.innerHTML ="Cor *De 3 e 20 caracteres."
    } else {
        cadCor.setAttribute('style', "color: green")
        cadCor.innerHTML ="Cor *"
    }
})

cadPrecoInput.addEventListener("keyup", ()=> {
    if(cadPrecoInput.value.length <= 2 ||cadPrecoInput.value.length > 10){
        cadPreco.setAttribute('style', "color: red")
        cadPreco.innerHTML ="Preço *De 3 e 10 caracteres."
    } else {
        cadPreco.setAttribute('style', "color: green")
        cadPreco.innerHTML ="Preço *"
    }
})

cadDescricaoInput.addEventListener("keyup", ()=> {
    if(cadDescricaoInput.value.length <= 2 ||cadDescricaoInput.value.length > 150){
        cadDescricao.setAttribute('style', "color: red")
        cadDescricao.innerHTML ="Descrição *De 3 e 150 caracteres."
    } else {
        cadDescricao.setAttribute('style', "color: green")
        cadDescricao.innerHTML ="Descrição *"
    }
})
