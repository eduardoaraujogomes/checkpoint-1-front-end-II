//Criando variáveis para validação dos campos.
let cadNome = document.querySelector(".cadNome");
let cadNomeInput = document.querySelector(".cadNomeInput");
let validaNome = false;

let cadCodigo = document.querySelector(".cadCodigo");
let cadCodigoInput = document.querySelector(".cadCodigoInput");
let validaCodigo = false;

let cadTamanho = document.querySelector(".cadTamanho");
let cadTamanhoSelect = document.querySelector(".cadTamanhoSelect");
let validaTamanho = false;

let cadCor = document.querySelector(".cadCor");
let cadCorInput = document.querySelector(".cadCorInput");
let validaCor = false;

let cadPreco = document.querySelector(".cadPreco");
let cadPrecoInput = document.querySelector(".cadPrecoInput");
let validaPreco = false;

let cadDescricao = document.querySelector(".cadDescricao");
let cadDescricaoInput = document.querySelector("#cadDescricaoInput");
let validaDescricao = false;

//criando variáveis para validar o envio e selecionando o botão adicionar.
let validaAdicionar = false;
let btnEnviar = document.querySelector("#btnEnviar");

//validando campo nome.
cadNomeInput.addEventListener("keyup", () => {
    if (cadNomeInput.value.length <= 2 || cadNomeInput.value.length > 20) {
        cadNome.setAttribute('style', "color: red");
        cadNome.innerHTML = "Nome do Produto *De 3 e 20 caracteres.";
        validaNome = false;
    } else {
        cadNome.setAttribute('style', "color: green");
        cadNome.innerHTML = "Nome do Produto *";
        validaNome = true;
    }
});

//validando campo codigo.
cadCodigoInput.addEventListener("keyup", () => {
    if (cadCodigoInput.value.length <= 2 || cadCodigoInput.value.length > 10) {
        cadCodigo.setAttribute('style', "color: red");
        cadCodigo.innerHTML = "Código do Produto *De 3 e 10 digitos.";
        validaCodigo = false;
    } else {
        cadCodigo.setAttribute('style', "color: green");
        cadCodigo.innerHTML = "Código do Produto *";
        validaCodigo = true;
    }
});

//validando campo tamanho.
cadTamanhoSelect.addEventListener("keyup", () => {
    if (cadTamanhoSelect.value == "emBranco") {
        cadTamanho.setAttribute('style', "color: red");
        cadTamanho.innerHTML = "Tamanho *Defina um tamanho.";
        validaTamanho = false;
    } else {
        cadTamanho.setAttribute('style', "color: green");
        cadTamanho.innerHTML = "Tamanho *";
        validaTamanho = true;
    }
});

//validando campo cor.
cadCorInput.addEventListener("keyup", () => {
    if (cadCorInput.value.length <= 2 || cadCorInput.value.length > 20) {
        cadCor.setAttribute('style', "color: red");
        cadCor.innerHTML = "Cor *De 3 e 20 caracteres.";
        validaCor = false;
    } else {
        cadCor.setAttribute('style', "color: green");
        cadCor.innerHTML = "Cor *";
        validaCor = true;
    }
});

//validando campo preço.
cadPrecoInput.addEventListener("keyup", () => {
    if (cadPrecoInput.value.length <= 2 || cadPrecoInput.value.length > 10) {
        cadPreco.setAttribute('style', "color: red");
        cadPreco.innerHTML = "Preço *De 3 e 10 digitos.";
        validaPreco = false;
    } else {
        cadPreco.setAttribute('style', "color: green");
        cadPreco.innerHTML = "Preço *";
        validaPreco = true;
    }
});

//validando campo descrição.
cadDescricaoInput.addEventListener("keyup", ()=> {
    if(cadDescricaoInput.value.length <= 2 ||cadDescricaoInput.value.length > 150){
        cadDescricao.setAttribute('style', "color: red");
        cadDescricao.innerHTML ="Descrição *De 3 e 150 caracteres.";
        validaDescricao = false;
    } else {
        cadDescricao.setAttribute('style', "color: green");
        cadDescricao.innerHTML ="Descrição *";
        validaDescricao = true;

    }
})


//Ação de validação quando apertar o botão adicionar.
btnEnviar.addEventListener("click", () => {
    if (validaNome && validaCodigo && validaTamanho && validaCor && validaPreco && validaDescricao) {
        
        //Atribui um array quando a variavel não existir no localStorage, caso contrario converte o arquivo JSON e armazena no array.
        let listaProduto = JSON.parse(localStorage.getItem("listaProduto") || '[]');

        //Transforma os dados do Input em um objeto e adiciona ao array listaProduto.
        listaProduto.push(
            {
                nome: cadNomeInput.value,
                codigo: cadCodigoInput.value,
                tamanho: cadTamanhoSelect.value,
                cor: cadCorInput.value,
                preco: cadPrecoInput.value,
                descricao: cadDescricaoInput.value
            }
        )
        
        //Vai criar a chave (nome do arquivo) e valor (arquivo JSON), caso já exista vai atualizar.
        localStorage.setItem("listaProduto", JSON.stringify(listaProduto));

        //Vai atrivuir a cor padrão ao texto do formulario.
        cadNome.setAttribute('style', "color: var(--text-color)");
        cadCodigo.setAttribute('style', "color: var(--text-color)");
        cadTamanho.setAttribute('style', "color: var(--text-color)");
        cadCor.setAttribute('style', "color: var(--text-color)");
        cadPreco.setAttribute('style', "color: var(--text-color)");

        //Atribui valor para a variável de validação que vai liberar a criação do card.
        validaAdicionar = true;
        
        //Reseta as variáveis de validação.
        validaNome = false;
        validaCodigo = false;
        validaTamanho = false;
        validaCor = false;
        validaPreco = false;
        validaDescricao = false;

        //Caso não seja validado todos os campos.
    } else {
        alert("Confira os campos");
        validaAdicionar = false;
    }
});

export { btnEnviar, cadNomeInput, cadCodigoInput, cadTamanhoSelect, cadCorInput, cadPrecoInput, cadDescricao, validaAdicionar };