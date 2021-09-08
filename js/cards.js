import { formulario, cadCodigoInput, cadDescricaoInput, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, validaAdicionar, cadUrlInput } from "./script.js";

//V
let listaProdutos;
let cadUrlImg = document.querySelector(".cadUrlInput");
listaProdutos = JSON.parse(localStorage.getItem("listaProduto") || '[]');
const cardsSection = document.getElementById("card-container");

//variável para armazenar os valores dos cartôes criados


//Função que vai funcionar quando clicar no botão de Adicionar
formulario.addEventListener("submit", (event) => {
    //Tira o comportamento padrão do botão submit de atualizar a página
    event.preventDefault();
    if (validaAdicionar) {
        //Criando os cards

        criarCard();

        listaProdutos.push(
            {
                nome: cadNomeInput.value,
                codigo: cadCodigoInput.value,
                tamanho: cadTamanhoSelect.value,
                cor: cadCorInput.value,
                preco: cadPrecoInput.value,
                imagem: cadUrlImg.value,
                descricao: cadDescricaoInput.value
            }
        );

        localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));


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
    modalsFunctions();

}

window.onload = function () {
    listaProdutos.map(value => {
        cardsSection.innerHTML += `
        <article class="card">
            <img src="${value.imagem}"
                alt="">
            <div class="card-div">
                <h3>${value.nome}</h3>
                <p>Tamanho ${value.tamanho}</p>
                <span>Preço: R$${value.preco}</span>
                <p class="descricao">${value.descricao}</p>
            </div>
            <div class="div-btn-circle">
                <button class="btn-circle">+</button>
            </div>
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p class ="descricao">${value.descricao}</p>
                    <button class="btn-deletar">Deletar Card</button>
                </div>
            </div>
        </article>`;
        modalsFunctions();
    });

};



function modalsFunctions() {

    //Variáveis criadas para receberem toods os modais e seus valores

    let modals = document.querySelectorAll(".modal");
    let btnsCircle = document.querySelectorAll(".btn-circle");
    let spans = document.querySelectorAll(".close");
    let btnsDeletar = document.querySelectorAll(".btn-deletar");
    let cards = document.querySelectorAll(".card");


    //Looping para poder pegar todos os nós dos modais criados

    for (let i = 0;i < cards.length;i++) {

        let btnCircle = btnsCircle[i];
        let btnDeleter = btnsDeletar[i];
        let modal = modals[i];
        let span = spans[i];
        let card = cards[i];

        //função para abrir o modal
        btnCircle.addEventListener('click', () => {
            modal.style.display = "block";
        });

        //função para deletar o card
        btnDeleter.addEventListener('click', () => {
            card.remove();
            listaProdutos.splice(i, 1);
            localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));
        });

        //função para fechar o modal
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}


