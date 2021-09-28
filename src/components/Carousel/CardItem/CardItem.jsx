import React from "react";

import BanerPrincipal from "../../../assets/img/principal_banner_desktop.png"

import "./carditem.css";

function CardItem() {
   return (
      <article className="carditem">
         <img className="carditem__imagem" src={BanerPrincipal} alt="Baner principal" />
      </article>
   );
}

export default CardItem;