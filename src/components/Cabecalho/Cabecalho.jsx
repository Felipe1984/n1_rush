import React from "react";

import Nav from "./Nav";
import Menu from "./Menu";

import "./cabecalho.css";

function Cabecalho() {
   return (
      <header className="cabecalho">
         <div className="cabecalho__conteudo">
            <Nav />
            <Menu />
         </div>
      </header>
   );
}

export default Cabecalho;