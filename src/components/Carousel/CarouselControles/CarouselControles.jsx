import React, { useState, useEffect } from "react";

import AvancarIcone from "../../../assets/img/icones/avancar.svg";
import VoltarIcone from "../../../assets/img/icones/voltar.svg";

import "./carousel-controles.css";

function CarouselControles({carousel, itens}) {

   const [contador, setContador] = useState(1);

   function avancar(e) {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;

      contador < itens && setContador(contador + 1)
   }

   function voltar(e) {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;

      contador > 1 && setContador(contador - 1)
   }

   return (
         <div className="carousel-controles">
            <div className="carousel-controles___textos">
               <span className="carousel-controles__texto">
                  Mortal Kombat
               </span>
               <span className="carousel-controles__texto carousel-controles__texto--ultimo">
                  ___________
               </span>
            </div>
            <div className="carousel-controles__componentes">
               <div className="carousel-controles__posicao">{contador}/{itens}</div>
               <div className="carousel-controles__botoes">
                  <button
                     onClick={voltar}
                     className="carousel-controles__botao"
                  >
                     <img
                        className="carousel-controles__botao__imagem"
                        src={VoltarIcone} alt="voltar"
                     />
                  </button>
                  <button
                     onClick={avancar}
                     className="carousel-controles__botao"
                  >
                     <img
                        className="carousel-controles__botao__imagem"
                        src={AvancarIcone} alt="avançar"
                     />
                  </button>
               </div>
            </div>
         </div>
   );
}

export default CarouselControles;