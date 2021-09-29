import React, { forwardRef } from "react";

import Mario from "../../assets/img/mario_grande.png"

import "./light-box.css";

const LightBox = forwardRef((props, ref) => {

   function fechaModal() {
      ref.current.style.display = "none";
   }

   return (
      <div
         className="light-box"
         ref={ref}
      >
         <div className="light-box__container">
            <div className="light-box__conteudo">
               <div className="light-box__conteudo__fechar">
                  <div
                     className="light-box__fechar"
                     onClick={fechaModal}
                  >
                     X
                  </div>
               </div>
               <div className="light-box__conteudo__texto">
                  <div className="light-box__texto">Pedido realizado com sucesso!</div>
                  <div className="light-box__produto">
                     <img className="light-box__produto__imagem" src={Mario} alt="comprou" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
})

export default LightBox;