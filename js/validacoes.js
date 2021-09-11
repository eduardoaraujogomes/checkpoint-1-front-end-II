
//Criando variáveis para validação dos campos.
const cadNome = document.querySelector(".cadNome");
let cadNomeInput = document.querySelector('.cadNomeInput');


//criando variáveis para validar o envio e selecionando o botão adicionar.

const formulario = document.getElementById("form");


cadNomeInput.addEventListener('focusout', () => {
    if (cadNomeInput.style.backgroundColor === "lightsalmon") cadNomeInput.focus();
    else {
        cadNomeInput.style.background = "#FFFFFF";
    }
});


const masks = {
    nome(value) {
        if (!/(?=(?:.*[a-zA-Z]){3})/.test(value)) {
            cadNome.innerHTML = " Seu produto precisa ter pelo menos 3 letras";
            cadNome.style.color = "lightsalmon";
            cadNomeInput.style.cssText = "background: url('https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg') no-repeat 95% 50% lightsalmon"; "background-size: 25px;", "border: 1px solid var(--color-default);", "margin: 0.5rem 0;", "border-radius: 0.2rem;", "padding: 0.8rem;", "font-size: 1.0rem;";
            return value;
        } else {
            cadNome.innerHTML = "Nome do Produto*";
            cadNome.style.color = "var(--text-color)";
            cadNomeInput.style.cssText = "background: url('https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg') no-repeat 95% 50% lightgreen;", "background-size: 25px;", "border: 1px solid var(--color-default);", "margin: 0.5rem 0;", "border-radius: 0.2rem;", "padding: 0.8rem;", "font-size: 1.0rem;";
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

