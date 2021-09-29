import React from "react";

import BannerZelda from "../../assets/img/zelda_banner.png";
import BannerSekiro from "../../assets/img/sekiro_banner.png";

import "./banner-secundario.css";


function BannerSecundario() {
   return (
      <section className="banner-secundario">
         <div className="banner-secundario__imagens">
            <div className="banner-secundario__conteudo">
               <img
                  className="banner-secundario__imagem"
                  src={BannerZelda} alt="Imagem jogo Zelda"
               />
               <div className="banner-secundario__descricao">
                  <div className="banner-secundario__borda"></div>
                  <span className="banner-secundario__descicao__texto">
                     The Legend of Zelda - Breath of th wild
                  </span>
                  <span className="banner-secundario__descicao__linha"></span>
               </div>
            </div>
            <div className="banner-secundario__conteudo">
               <img
                  className="banner-secundario__imagem"
                  src={BannerSekiro} alt="Imagem jogo Sekiro"
               />
               <div className="banner-secundario__descricao">
               <div className="banner-secundario__borda"></div>
               <span className="banner-secundario__descicao__texto">
                  SEKIRO - Shadows die twice
               </span>
               <span className="banner-secundario__descicao__linha"></span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BannerSecundario;