"use strict";

const produto1 = 150;
const produto2 = 100 + 7;
const produto3 = 228;

const produto1Est = 10;
const produto2Est = 2;
const produto3Est = 0;

const carrinho = [];

const addCarrinho = function (produto) {
  if (produto === 1 && produto1Est >= 1) {
    carrinho.push(produto1);
  }
};

addCarrinho1(1);

console.log(carrinho);
console.log("laura");
