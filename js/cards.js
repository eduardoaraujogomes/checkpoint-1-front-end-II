import { cadCodigoInput, cadDescricao, cadCorInput, cadNomeInput, cadPrecoInput, cadTamanhoSelect, btnEnviar } from "./script.js";

const formulario = document.getElementById("form");
const btnLimpar = document.querySelector(".Limpar");
const cardsSection = document.getElementById("card-container");


btnLimpar.addEventListener("click", () => formulario.reset());


btnEnviar.addEventListener("click", () => {
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
    formulario.reset();
});







