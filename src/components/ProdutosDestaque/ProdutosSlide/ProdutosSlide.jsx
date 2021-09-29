import React, { forwardRef } from "react";

import ProdutoOutRiders from "../../../assets/img/produtos/product-outriders.png"
import ProdutoCyberPunk from "../../../assets/img/produtos/product-cyberpunk2077.png"
import ProdutoDonkeyKong from "../../../assets/img/produtos/product-donkey-kong-country-tropical-freeze.png"

import "./produtos-slide.css";

function ProdutosSlide({setCarrinho, carrinho}) {

   const fakeApiProdutos = [
      {
         nome: "Outriders",
         preco: "R$ 200,00",
         imagem: ProdutoOutRiders
      },
      {
         nome: "CYBERPUNK 2077",
         preco: "R$ 200,00",
         imagem: ProdutoCyberPunk
      },
      {
         nome: "Donkey Kong Country Tropical Freeze",
         preco: "R$ 200,00",
         imagem: ProdutoDonkeyKong
      },
   ]

   function adicionaAoCarrinho(e) {
      e.preventDefault();
      setCarrinho(carrinho + 1)
   }

   return (
      <div className="produtos-slide">
         <div className="produtos-slide__botao-esquerdo">0</div>
         <div className="produtos-slide__produto">
            {
               fakeApiProdutos.map((produto, index) => (
                  <div key={index} className="produto-slide__produto__card">
                     <img
                        className="produto-slide__produto__card__image"
                        src={produto.imagem} alt="Outriders"
                     />
                     <div className="produto-slide__produto__card__descricao">
                        <div className="produto-slide__produto__card__descricao__texto">
                           <p className="produto-slide__produto__card__descricao__conteudo">
                              {produto.nome}
                           </p>
                           <p className="produto-slide__produto__card__descricao__conteudo">
                              {produto.preco}
                           </p>
                        </div>
                        <button
                           onClick={adicionaAoCarrinho}
                           className="produto-slide__produto__card__descricao__botao"
                           name="comprar"
                        >
                           comprar
                        </button>
                     </div>
                  </div>
               ))
            }
         </div>
         <div className="produtos-slide__botao-direito">2</div>
      </div>
   )
}

export default ProdutosSlide;