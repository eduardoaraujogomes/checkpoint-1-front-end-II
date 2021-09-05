
let cadNome = document.querySelector(".cadNome");
let cadNomeInput = document.querySelector(".cadNomeInput");
let validaNome = 0;

let cadCodigo = document.querySelector(".cadCodigo");
let cadCodigoInput = document.querySelector(".cadCodigoInput");
let validaCodigo = 0;

let cadTamanho = document.querySelector(".cadTamanho");
let cadTamanhoSelect = document.querySelector(".cadTamanhoSelect");
let validaTamanho = 0;

let cadCor = document.querySelector(".cadCor");
let cadCorInput = document.querySelector(".cadCorInput");
let validaCor = 0;

let cadPreco = document.querySelector(".cadPreco");
let cadPrecoInput = document.querySelector(".cadPrecoInput");
let validaPreco = 0;

let cadDescricao = document.querySelector(".cadDescricao");
let cadDescricaoInput = document.querySelector(".cadDescricaoInput");
let validaDescricaoe = 0;

let validaEnviar;

let btnEnviar = document.querySelector("#btnEnviar");

cadNomeInput.addEventListener("keyup", ()=> {
    if(cadNomeInput.value.length <= 2 ||cadNomeInput.value.length > 20){
        cadNome.setAttribute('style', "color: red")
        cadNome.innerHTML ="Nome do Produto *De 3 e 20 caracteres."
        validaNome=0;
    } else {
        cadNome.setAttribute('style', "color: green")
        cadNome.innerHTML ="Nome do Produto *"
        validaNome=1;
    }
})

cadCodigoInput.addEventListener("keyup", ()=> {
    if(cadCodigoInput.value.length <= 2 ||cadCodigoInput.value.length > 10){
        cadCodigo.setAttribute('style', "color: red");
        cadCodigo.innerHTML ="Código do Produto *De 3 e 10 digitos.";
        validaCodigo = 0;
    } else {
        cadCodigo.setAttribute('style', "color: green");
        cadCodigo.innerHTML ="Código do Produto *";
        validaCodigo = 1;
    }
})

cadTamanhoSelect.addEventListener("click", ()=> {
    if(cadTamanhoSelect.value == "emBranco"){
        cadTamanho.setAttribute('style', "color: red");
        cadTamanho.innerHTML ="Tamanho *Defina um tamanho.";
        validaTamanho = 0;
    } else {
        cadTamanho.setAttribute('style', "color: green");
        cadTamanho.innerHTML ="Tamanho *";
        validaTamanho = 1;
    }
})

cadCorInput.addEventListener("keyup", ()=> {
    if(cadCorInput.value.length <= 2 ||cadCorInput.value.length > 20){
        cadCor.setAttribute('style', "color: red");
        cadCor.innerHTML ="Cor *De 3 e 20 caracteres.";
        validaCor = 0;
    } else {
        cadCor.setAttribute('style', "color: green");
        cadCor.innerHTML ="Cor *";
        validaCor = 1;
    }
})

cadPrecoInput.addEventListener("keyup", ()=> {
    if(cadPrecoInput.value.length <= 2 ||cadPrecoInput.value.length > 10){
        cadPreco.setAttribute('style', "color: red");
        cadPreco.innerHTML ="Preço *De 3 e 10 caracteres.";
        validaPreco = 0;
    } else {
        cadPreco.setAttribute('style', "color: green");
        cadPreco.innerHTML ="Preço *";
        validaPreco = 1;
    }
})

cadDescricaoInput.addEventListener("keyup", ()=> {
    if(cadDescricaoInput.value.length <= 2 ||cadDescricaoInput.value.length > 150){
        cadDescricao.setAttribute('style', "color: red");
        cadDescricao.innerHTML ="Descrição *De 3 e 150 caracteres.";
        validaDescricaoe = 0;
    } else {
        cadDescricao.setAttribute('style', "color: green");
        cadDescricao.innerHTML ="Descrição *";
        validaDescricaoe = 1;

    }
})

validaEnviar = 10;
// validaEnviar = validaNome*validaCodigo*validaTamanho*validaCor*validaPreco;
validaEnviar = 10;


console.log(validaEnviar);

btnEnviar.addEventListener("click", ()=> {
    if(validaEnviar==1){
        alert("Enviando...");
    } else {
        alert("Confira os campos");
    }
})
