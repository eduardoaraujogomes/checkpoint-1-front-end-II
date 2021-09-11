
//Criando variáveis para validação dos campos.
const cadNome = document.querySelector(".cadNome");
let cadNomeInput;
let validaNome = false;

const cadCodigo = document.querySelector(".cadCodigo");
let cadCodigoInput;
let validaCodigo = false;

const cadTamanho = document.querySelector(".cadTamanho");
const cadTamanhoSelect = document.querySelector(".cadTamanhoSelect");
let validaTamanho = false;

const cadCor = document.querySelector(".cadCor");
let cadCorInput;
let validaCor = false;

const cadPreco = document.querySelector(".cadPreco");
let cadPrecoInput;
let validaPreco = false;

const cadUrl = document.querySelector(".cadUrl");
const cadUrlInput = document.querySelector(".cadUrlInput");
let validaUrl = false;

const cadDescricao = document.querySelector(".cadDescricao");
const cadDescricaoInput = document.querySelector("#cadDescricaoInput");
let validaDescricao = false;

//criando variáveis para validar o envio e selecionando o botão adicionar.
let validaAdicionar = false;
const formulario = document.getElementById("form");

const masks = {
    nome(value) {
        if (value.length <= 2) {
            cadNome.setAttribute('style', "color: red");
            cadNome.innerHTML = "Nome do Produto* De 3 e 20 caracteres.";
            validaNome = false;
        }
        if (value.length > 2) {
            cadNome.setAttribute('style', "color: green");
            cadNome.innerHTML = "Nome do Produto*";
            validaNome = true;
        }

        return cadNomeInput=value
    },
    codigo(value) {
        if (value.length <= 2 || value.length > 10) {
            cadCodigo.setAttribute('style', "color: red");
            cadCodigo.innerHTML = "Código do Produto* De 3 e 10 digitos.";
            validaCodigo = false;
        }
        if (value.length > 2 && value.length < 11) {
            cadCodigo.setAttribute('style', "color: green");
            cadCodigo.innerHTML = "Código do Produto*";
            validaCodigo = true;
        }
        return cadCodigoInput=value
        .replace(/\D+/g, '')
    },
    cor(value) {
        if (value.length <= 2) {
            cadCor.setAttribute('style', "color: red");
            cadCor.innerHTML = "Cor* De 3 e 20 caracteres.";
            validaCor = false;
        }
        if (value.length > 2) {
            cadCor.setAttribute('style', "color: green");
            cadCor.innerHTML = "Cor*";
            validaCor = true;
        }
        return cadCorInput=value
    },
    preco(value) {
        if (value.length <= 2 || value.length > 10) {
            cadPreco.setAttribute('style', "color: red");
            cadPreco.innerHTML = "Preço* De 3 e 10 digitos.";
            validaPreco = false;
        }
        if (value.length > 2 && value.length < 11) {
            cadPreco.setAttribute('style', "color: green");
            cadPreco.innerHTML = "Preço*";
            validaPreco = true;
        }
        cadPrecoInput=value
        const cleanValue = +value.replace(/\D+/g, '')
        const options = { style: 'currency', currency: 'BRL' }
        return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100)
        
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})





//validando campo nome.
// cadNomeInput.addEventListener("focusout", () => {
//     if (cadNomeInput.value.length <= 2) {
//         cadNome.setAttribute('style', "color: red");
//         cadNome.innerHTML = "Nome do Produto* De 3 e 20 caracteres.";
//         validaNome = false;
//     }
// });

// cadNomeInput.addEventListener("keyup", () => {
//     if (cadNomeInput.value.length > 2) {
//         cadNome.setAttribute('style', "color: green");
//         cadNome.innerHTML = "Nome do Produto*";
//         validaNome = true;
//     }
// });

//validando campo codigo.
// cadCodigoInput.addEventListener("focusout", () => {
//     if (cadCodigoInput.value.length <= 2 || cadCodigoInput.value.length > 10) {
//         cadCodigo.setAttribute('style', "color: red");
//         cadCodigo.innerHTML = "Código do Produto* De 3 e 10 digitos.";
//         validaCodigo = false;
//     }
// });

// cadCodigoInput.addEventListener("keyup", () => {
//     if (cadCodigoInput.value.length > 2 && cadCodigoInput.value.length < 11) {
//         cadCodigo.setAttribute('style', "color: green");
//         cadCodigo.innerHTML = "Código do Produto*";
//         validaCodigo = true;
//     }
// });

//validando campo tamanho.
cadTamanhoSelect.addEventListener("focusout", () => {
    if (cadTamanhoSelect.value == "emBranco") {
        cadTamanho.setAttribute('style', "color: red");
        cadTamanho.innerHTML = "Tamanho* Defina um tamanho.";
        validaTamanho = false;
    }
});

cadTamanhoSelect.addEventListener("keyup", () => {
    if (cadTamanhoSelect.value != "emBranco") {
        cadTamanho.setAttribute('style', "color: green");
        cadTamanho.innerHTML = "Tamanho*";
        validaTamanho = true;
    }
});

cadTamanhoSelect.addEventListener("click", () => {
    if (cadTamanhoSelect.value != "emBranco") {
        cadTamanho.setAttribute('style', "color: green");
        cadTamanho.innerHTML = "Tamanho*";
        validaTamanho = true;
    }
});

// //validando campo cor.
// cadCorInput.addEventListener("focusout", () => {
//     if (cadCorInput.value.length <= 2) {
//         cadCor.setAttribute('style', "color: red");
//         cadCor.innerHTML = "Cor* De 3 e 20 caracteres.";
//         validaCor = false;
//     }
// });

// cadCorInput.addEventListener("keyup", () => {
//     if (cadCorInput.value.length > 2) {
//         cadCor.setAttribute('style', "color: green");
//         cadCor.innerHTML = "Cor*";
//         validaCor = true;
//     }
// });

//validando campo preço.
// cadPrecoInput.addEventListener("focusout", () => {
//     if (cadPrecoInput.value.length <= 2 ||cadPrecoInput.value.length > 10) {
//         cadPreco.setAttribute('style', "color: red");
//         cadPreco.innerHTML = "Preço* De 3 e 10 digitos.";
//         validaPreco = false;
//     }
// });

// cadPrecoInput.addEventListener("keyup", () => {
//     if (cadPrecoInput.value.length > 2 && cadPrecoInput.value.length < 11) {
//         cadPreco.setAttribute('style', "color: green");
//         cadPreco.innerHTML = "Preço*";
//         validaPreco = true;
//     }
// });

//validando campo descrição.
cadDescricaoInput.addEventListener("focusout", () => {
    if (cadDescricaoInput.value.length <= 2) {
        cadDescricao.setAttribute('style', "color: red");
        cadDescricao.innerHTML = "Descrição* De 3 e 150 caracteres.";
        validaDescricao = false;
    }
});

cadDescricaoInput.addEventListener("keyup", () => {
    if (cadDescricaoInput.value.length > 2) {
        cadDescricao.setAttribute('style', "color: green");
        cadDescricao.innerHTML = "Descrição*";
        validaDescricao = true;

    }
});

//Ação de validação quando apertar o botão adicionar.
formulario.addEventListener("submit", () => {

    if (validaNome && validaCodigo && validaTamanho && validaCor && validaPreco && validaDescricao) {

        //Vai atrivuir a cor padrão ao texto do formulario.
        cadNome.setAttribute('style', "color: var(--text-color)");
        cadCodigo.setAttribute('style', "color: var(--text-color)");
        cadTamanho.setAttribute('style', "color: var(--text-color)");
        cadCor.setAttribute('style', "color: var(--text-color)");
        cadPreco.setAttribute('style', "color: var(--text-color)");
        cadDescricao.setAttribute('style', "color: var(--text-color)");

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
        validaAdicionar = false;

        //Da foco em todos os inputs para ativar as validação.
        // cadNomeInput.focus();
        // cadCodigoInput.focus();
        cadTamanhoSelect.focus();
        // cadCorInput.focus();
        // cadPrecoInput.focus();
        cadUrlInput.focus();
        cadDescricaoInput.focus();
        // cadNomeInput.focus();
    }
});

export { cadNomeInput, cadCodigoInput, cadTamanhoSelect, cadCorInput, cadPrecoInput, cadDescricaoInput, validaAdicionar, cadUrlInput, formulario };