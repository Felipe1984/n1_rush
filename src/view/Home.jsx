import React, { useState, useRef } from "react";

import Cabecalho from "../components/Cabecalho";
import Carousel from "../components/Carousel";
import BannerSecundario from "../components/BannerSecundario";
import ProdutosDestaque from "../components/ProdutosDestaque";
import LightBox from "../components/LightBox";
import Rodape from "../components/Rodape";

import "./home.css";

function Home() {

   const [carrinho, setCarrinho] = useState(0)
   const modal = useRef(null);

   function abreModal(e) {
      e.preventDefault();

      const { name } = e.target;
      const element = modal.current;
      console.log(element, name)
      if (name === "comprar") {
         modal.current.style.display = "block";
      }
   }

   return(
      <main
         className="container"
      >
         <Cabecalho carrinho={carrinho} />{/*Refatorar*/}
         <Carousel />
         <BannerSecundario />
         <div onClick={abreModal}>
            <ProdutosDestaque 
               
               setCarrinho={setCarrinho}
               carrinho={carrinho}
            />{/*Refatorar*/}
         </div>
         <LightBox ref={modal} />
         <Rodape />
      </main>
   );
}

export default Home;