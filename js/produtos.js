
import { listaProdutos, criarCard } from './cards.js';


window.onload = function () {
    //Percorre todos os itens e valores do objeto e cria os cartões com ele
    listaProdutos.map(value => {
        criarCard(value.nome, value.codigo, value.tamanho, value.cor, value.preco, value.imagem, value.descricao);
    });
};

