import { cadCodigoInput, cadDescricao, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, btnEnviar } from "./script.js";

const formulario = document.getElementById("form");
const cardsSection = document.getElementById("card-container");

let objectCards = [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    //Adicionando os cards via JS
    cardsSection.innerHTML += `<article class="card">
    <img src="https://static5.minhalojanouol.com.br/tennisecia/produto/multifotos/hd/20190919163236_9089990911_DZ.jpg"
        alt="">
    <div class="card-div">
        <h3>${cadNomeInput.value}</h3>
        <p>Tamanho ${cadTamanhoSelect.value}</p>
        <span>Preço: R$${cadPrecoInput.value}</span>
    </div>
    <div class="div-btn-circle">
        <button class="btn-circle">+</button>
    </div>
</article>`;
    objectCards.push({ titulo: cadNomeInput.value, codigo: cadCodigoInput.value, tamanho: cadTamanhoSelect.value, cor: cadCorInput.value, preco: cadPrecoInput, descricao: cadDescricao });

    for (const key in objectCards) {
        if (Object.hasOwnProperty.call(objectCards, key)) {
            console.log(objectCards[key]);
        }
    }

    formulario.reset();
});








