import React from "react";

import Cabecalho from "../components/Cabecalho";
import Carousel from "../components/Carousel";
import BannerSecundario from "../components/BannerSecundario";
import ProdutosDestaque from "../components/ProdutosDestaque";

import "./home.css";

function Home() {
   return(
      <main className="container">
         <Cabecalho />
         <Carousel />
         <BannerSecundario />
         <ProdutosDestaque />
      </main>
   );
}

export default Home;