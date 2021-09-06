import { btnEnviar, cadCodigoInput, cadDescricao, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, validaAdicionar, cadUrlInput } from "./script.js";

//V
const formulario = document.getElementById("form");
const cardsSection = document.getElementById("card-container");

//variável para armazenar os valores dos cartôes criados
let todosCartoes = [];

//Função que vai funcionar quando clicar no botão de Adicionar
btnEnviar.addEventListener("click", (event) => {
    if (validaAdicionar) {
        //Previne que o usuário envie o formulário com campos não preenchidos
        event.preventDefault();

        //Criando os cards
        criarCard();

        //Adicionando os valores no array de objetos para utilizar futuramente
        todosCartoes.push({ titulo: cadNomeInput.value, codigo: cadCodigoInput.value, tamanho: cadTamanhoSelect.value, cor: cadCorInput.value, preco: cadPrecoInput.value, url: cadUrlInput.value, descricao: cadDescricao.value });

        //Resetando os valores dentro do formulário
        formulario.reset();
    }
});


//função para criar os cartões
function criarCard() {
    cardsSection.innerHTML += `
    <article class="card">
        <img src="${cadUrlInput.value}"
            alt="">
        <div class="card-div">
            <h3>${cadNomeInput.value}</h3>
            <p>Tamanho ${cadTamanhoSelect.value}</p>
            <span>Preço: R$${cadPrecoInput.value}</span>
        </div>
        <div class="div-btn-circle">
            <button class="btn-circle">+</button>
        </div>
    </article>
`;
}






