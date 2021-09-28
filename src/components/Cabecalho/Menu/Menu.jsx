import React from "react";

import { Link } from "react-router-dom";

import ContatoImg from "../../../assets/img/icones/contato.svg";
import BuscarImg from "../../../assets/img/icones/buscar.svg"
import SacolaImg from "../../../assets/img/icones/sacola-de-compras.svg"

import "./menu.css";

function Menu () {
   return (
         <ul className="menu">
            <Link to="#" className="menu__link">
               <li className="menu__item">
                  <img
                     src={ContatoImg}
                     className="menu__item__imagem"
                     alt="Contato"
                  />
                     Contato
               </li>
            </Link>
            <Link to="#" className="menu__link">
               <li className="menu__item">
                  <img
                     src={BuscarImg}
                     className="menu__item__imagem"
                     alt="Busca"
                  />
                  Busca
               </li>
            </Link>
            <Link to="#" className="menu__link menu__link--ultimo">
               <li className="menu__item">
                  <img
                     src={SacolaImg}
                     className="menu__item__imagem"
                     alt="Sacola de compras"
                  />
                  <div className="menu__item__contador">2</div>
               </li>
            </Link>
         </ul>
   );
}

export default Menu;