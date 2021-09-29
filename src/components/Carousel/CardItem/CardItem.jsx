import React from "react";

import "./carditem.css";

function CardItem({titulo, preco, descricao}) {
   return (
      <article className="carditem">
         {/* <img className="carditem__imagem" src={BanerPrincipal} alt="Baner principal" /> */}
         <div className="carditem__imagem">
            <div className="carditem__conteudo">
               <h2 className="carditem__titulo">mortal kombat</h2>
               <div className="carditem__preco">
                     R$ 299
                     <span className="carditem__preco--centavos">,99</span>
               </div>
               <div className="carditem__descricao">Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.
               </div>
            </div>
         </div>
      </article>
   );
}

export default CardItem;