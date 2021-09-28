import React, { useRef } from "react";

import CardItem from "./CardItem";
import CarouselControles from "./CarouselControles";

import "./carousel.css";

function Carousel() {

   const carousel = useRef(null);
   const dadosApi = ["card1", "card2"];

   return(
         <section className="carousel">
            <article className="carousel__slider" ref={carousel}>
               {
                  dadosApi.map((card, index, arr) =>
                     <CardItem tamanho={arr.length} />
                  )
               }
            </article>

            <CarouselControles carousel={carousel} itens={dadosApi.length} />
         </section>
   );
}

export default Carousel;