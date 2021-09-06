import { formulario, cadCodigoInput, cadDescricaoInput, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, validaAdicionar, cadUrlInput } from "./script.js";

//V

const cardsSection = document.getElementById("card-container");

//variável para armazenar os valores dos cartôes criados
let todosCartoes = [];

//Função que vai funcionar quando clicar no botão de Adicionar
formulario.addEventListener("submit", (event) => {
    //Tira o comportamento padrão do botão submit de atualizar a página
    event.preventDefault();
    if (validaAdicionar) {
        //Criando os cards
        criarCard();

        //Adicionando os valores no array de objetos para utilizar futuramente
        todosCartoes.push({ titulo: cadNomeInput.value, codigo: cadCodigoInput.value, tamanho: cadTamanhoSelect.value, cor: cadCorInput.value, preco: cadPrecoInput.value, url: cadUrlInput.value, descricao: cadDescricaoInput.value });

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
            <p class="descricao">${cadDescricaoInput.value}</p>
        </div>
        <div class="div-btn-circle">
            <button class="btn-circle">+</button>
        </div>
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p class ="descricao">${cadDescricaoInput.value}</p>
                <button class="btn-deletar">Deletar Card</button>
            </div>
        </div>
    </article>
`;

// **** MODAL *****

let modal = document.querySelector(".modal");
let btnCircle = document.querySelector(".btn-circle");
let span = document.querySelector(".close");
let btnDeletar = document.querySelector(".btn-deletar")

btnCircle.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btnDeletar.onclick = function() {
    let card = document.querySelector(".card");
    card.remove();
}

// É necessário colocar o modal em todos os cards que serão criados. A criação só está funcionando no primeiro card criado.

}


