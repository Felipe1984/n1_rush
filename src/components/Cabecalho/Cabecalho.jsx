import React from "react";

import Nav from "./Nav";
import Menu from "./Menu";

import "./cabecalho.css";

function Cabecalho({carrinho}) {
   return (
      <header className="cabecalho">
         <div className="cabecalho__conteudo">
            <Nav />
            <Menu carrinho={carrinho} />
         </div>
      </header>
   );
}

export default Cabecalho;