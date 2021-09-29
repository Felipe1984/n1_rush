import React from "react";

import Logo from "../../assets/img/svg/logo_header 1.svg";

import "./rodape.css";

function Rodape() {
   return(
      <section className="rodape">
         <div className="rodape__logo">
            <img className="rodape__logo__imagem" src={Logo} alt="" />
         </div>
         <div className="rodape__direitos-autorais">
            Agência N1 - Todos os direitos reservados
         </div>
      </section>
   );
}

export default Rodape;