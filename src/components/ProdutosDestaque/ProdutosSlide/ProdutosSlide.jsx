import React from "react";

import ProdutoOutRiders from "../../../assets/img/produtos/product-outriders.png"
import ProdutoCyberPunk from "../../../assets/img/produtos/product-cyberpunk2077.png"
import ProdutoDonkeyKong from "../../../assets/img/produtos/product-donkey-kong-country-tropical-freeze.png"

import "./produtos-slide.css";

function ProdutosSlide() {
   return (
      <div className="produtos-slide">
         <div className="produtos-slide__botao-esquerdo">0</div>
         <div className="produtos-slide__produto">
            <div className="produto-slide__produto__card">
               <img
                  className="produto-slide__produto__card__image"
                  src={ProdutoOutRiders} alt="Outriders"
               />
               <div className="produto-slide__produto__card__descricao">
                  <div className="produto-slide__produto__card__descricao__texto">
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        Outriders
                     </p>
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        R$ 200,00
                     </p>
                  </div>
                  <button className="produto-slide__produto__card__descricao__botao">
                     comprar
                  </button>
               </div>
            </div>
            <div className="produto-slide__produto__card">
               <img
                  className="produto-slide__produto__card__image"
                  src={ProdutoCyberPunk} alt="Outriders"
               />
               <div className="produto-slide__produto__card__descricao">
                  <div className="produto-slide__produto__card__descricao__texto">
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        CYBERPUNK 2077
                     </p>
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        R$ 200,00
                     </p>
                  </div>
                  <button className="produto-slide__produto__card__descricao__botao">
                     comprar
                  </button>
               </div>
            </div>
            <div className="produto-slide__produto__card">
               <img
                  className="produto-slide__produto__card__image"
                  src={ProdutoDonkeyKong} alt="Outriders"
               />
               <div className="produto-slide__produto__card__descricao">
                  <div className="produto-slide__produto__card__descricao__texto">
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        Donkey Kong Country Tropical Freeze
                     </p>
                     <p className="produto-slide__produto__card__descricao__conteudo">
                        R$ 200,00
                     </p>
                  </div>
                  <button className="produto-slide__produto__card__descricao__botao">
                     comprar
                  </button>
               </div>
            </div>
         </div>
         <div className="produtos-slide__botao-direito">2</div>
      </div>
   )
}

export default ProdutosSlide;