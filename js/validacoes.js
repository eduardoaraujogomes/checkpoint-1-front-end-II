
//Criando variáveis para validação dos campos.
const cadNome = document.querySelector(".cadNome");
let cadNomeInput = document.querySelector('.cadNomeInput');


//criando variáveis para validar o envio e selecionando o botão adicionar.

const formulario = document.getElementById("form");


cadNomeInput.addEventListener('focusout', () => {
    if (cadNome.style.color === "red") cadNomeInput.focus();
});


const masks = {
    nome(value) {
        if (!/(?=(?:.*[a-z]){3})/.test(value)) {
            cadNome.innerHTML = " Digite um produto válido";
            cadNome.style.color = "red";
            return value;
        } else {
            cadNome.innerHTML = "Nome do Produto*";
            cadNome.style.color = "var(--text-color)";
            return value;
        }
    },

    codigo(value) {
        return value
            .replace(/\D+/g, '');
    },
    cor(value) {
        return value.replace(/\d+/g, '');
    },

    preco(value) {
        const cleanValue = +value.replace(/\D+/g, '');
        const options = { style: 'currency', currency: 'BRL' };
        return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100);
    },
    url(value) {
        return value;
    }
};

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value);
    }, false);
});

