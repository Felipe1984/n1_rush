import React from "react";

import MenuHamburgerImg from "../../../assets/img/icones/menu_hamburguer.svg";
import LogoTopo from "../../../assets/img/svg/Logo_topo.svg";

import "./nav.css";

function Nav() {
   return (
      <nav className="nav">
         <ul className="nav__itens">
            <li className="nav__item">
               <button className="nav__item__button">
                  <img
                     src={MenuHamburgerImg}
                     className="nav__item__imagem__menu"
                     alt="Menu Principal"
                  />
               </button>
            </li>
            <li className="nav__item nav__item--fim">
                  <img src={LogoTopo} className="nav__item__logo" alt="Logo topo" />
            </li>
         </ul>
      </nav>
   );
}

export default Nav;