import { formulario, cadCodigoInput, cadDescricaoInput, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, validaAdicionar, cadUrlInput } from "./script.js";



const cardsSection = document.getElementById("card-container");
//se tiver valores no localStorage ele pega esses valores, se não tiver, ele seta um array vazio.
let listaProdutos = JSON.parse(localStorage.getItem("listaProduto") || '[]');


//variável para armazenar os valores dos cartôes criados


//Função que vai funcionar quando clicar no botão de Adicionar
formulario.addEventListener("submit", (event) => {
    //Tira o comportamento padrão do botão submit de atualizar a página
    event.preventDefault();
    if (validaAdicionar) {

        //Array de valores dos cards
        listaProdutos.push(
            {
                nome: cadNomeInput.value,
                codigo: cadCodigoInput.value,
                tamanho: cadTamanhoSelect.value,
                cor: cadCorInput.value,
                preco: cadPrecoInput.value,
                imagem: cadUrlInput.value,
                descricao: cadDescricaoInput.value
            }
        );
        //cria o card com os valores passado no formulário
        criarCard(cadNomeInput.value, cadCodigoInput.value, cadTamanhoSelect.value, cadCorInput.value, cadPrecoInput.value, cadUrlInput.value, cadDescricaoInput.value);

        //Seta os valores do listaProdutos no localStorage
        localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));


        //Resetando os valores dentro do formulário
        formulario.reset();
    }
});


//função para criar os cartões
function criarCard(nome, codigo, tamanho, cor, preco, imagem, descricao) {
    cardsSection.innerHTML += `
    <article class="card">
        <img src="${imagem}"
            alt="">
        <div class="card-div">
            <h3>${nome}</h3>
            <p>Tamanho ${tamanho}</p>
            <span>Preço: R$${preco}</span>
            <p class="descricao">${descricao}</p>
        </div>
        <div class="div-btn-circle">
            <button class="btn-circle">+</button>
        </div>
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p class ="descricao">${descricao}</p>
                <button class="btn-deletar">Deletar Card</button>
            </div>
        </div>
    </article>
`;
    modalsFunctions();

}


//Função para chamar os cards armazenados no localStorage, quando o usuário der f5 ou fechar e abrir a página
window.onload = function () {
    //Percorre todos os itens e valores do objeto e cria os cartões com ele
    listaProdutos.map(value => {
        criarCard(value.nome, value.codigo, value.tamanho, value.cor, value.preco, value.imagem, value.descricao);
    });
};


// Função do modal
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


