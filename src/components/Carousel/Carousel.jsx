import React, { useRef } from "react";

import CardItem from "./CardItem";
import CarouselControles from "./CarouselControles";

import "./carousel.css";

function Carousel() {

   const carousel = useRef(null);
   const dadosApi = [{card: "mortal kombat 1"}, {card: "mortal kombat armagedom"}];

   return(
         <section className="carousel">
            <article className="carousel__slider" ref={carousel}>
               {
                  dadosApi.map((card, index) => 
                     <CardItem key={index} />
                  )
               }
            </article>

            <CarouselControles carousel={carousel} itens={dadosApi} />
         </section>
   );
}

export default Carousel;