import React from "react";

import ProdutosSlide from "./ProdutosSlide/ProdutosSlide";

import "./produtos-destaque.css";

import IconeDestaques from "../../assets/img/icones/produtos.svg"

function ProdutosDestaque() {
   return(
      <section className="produtos-destaque">
         <article className="produtos-destaque__container">
            <h1 className="produtos-destaque__titulo">
               <img src={IconeDestaques} alt="Produtos em destaques" />
               <span className="produtos-destaque__texto">Produtos em destaque</span>
            </h1>
            <ProdutosSlide />
         </article>
      </section>
   )
}

export default ProdutosDestaque;