import React from "react";

import DropMenu from "./DropDown";

import LogoTopo from "../../../assets/img/svg/Logo_topo.svg";

import "./nav.css";

function Nav() {
   return (
      <nav className="nav">
         <ul className="nav__itens">
            <li className="nav__item nav__item--menu">
               <DropMenu />
            </li>
            <li className="nav__item nav__item--fim">
                  <img src={LogoTopo} className="nav__item__logo" alt="Logo topo" />
            </li>
         </ul>
      </nav>
   );
}

export default Nav;