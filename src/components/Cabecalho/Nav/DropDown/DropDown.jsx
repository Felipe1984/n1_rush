import React, { useRef } from "react";

import MenuHamburgerImg from "../../../../assets/img/icones/menu_hamburguer.svg";

import "./dropdown.css";

function DropDown() {

   const menu = useRef(null);

   function alternaMenu(e) {
      e.preventDefault()

      menu.current.classList.toggle("dropdown-click")
   }

   function abreMenu(e) {
      e.preventDefault()
      menu.current.classList.add("dropdown-click")
   }

   function fechaMenu(e) {
      e.preventDefault()
      menu.current.classList.remove("dropdown-click")
   }

   return (
      <div className="dropdown">
         <button
            className="dropdown__button"
            onClick={alternaMenu}
            onMouseOver={abreMenu}
         >
            <img
               src={MenuHamburgerImg}
               className="dropdown__imagem__menu"
               alt="Menu Principal"
            />
         </button>
         <div
            onMouseLeave={fechaMenu}
            className="dropdown__menu__container"
            ref={menu}
         >
         <div className="dropdown__balao-fake"></div>
            <div className="dropdown__menu__categorias">
               <ul className="dropdown__menu__categoria dropdown__menu__categoria--luta">
                  <li className="dropdown__menu__categoria__item dropdown__menu__categoria__item--titulo">
                     Luta
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     Mortal kombat
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     Smash Bros
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     Killer Instinct
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     DBZ kakarot
                  </li>
               </ul>
               <ul className="dropdown__menu__categoria dropdown__menu__categoria--acao-aventura">
                  <li className="dropdown__menu__categoria__item dropdown__menu__categoria__item--titulo">
                     Ação / aventura
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     GTA V
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     tomb raider
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     HALO
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     call of duty
                  </li>
               </ul>
               <ul className="dropdown__menu__categoria dropdown__menu__categoria--corrida">
                  <li className="dropdown__menu__categoria__item dropdown__menu__categoria__item--titulo">
                     corrida
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     NEED For SPEED
                  </li>
                  <li className="dropdown__menu__categoria__item">
                     forza horizon
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default DropDown;