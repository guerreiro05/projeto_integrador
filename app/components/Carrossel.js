'use client';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export default function Carrossel() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <div className="layout-container">
      <Carousel responsive={responsive} draggable={true} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} >
        <div> <img className="w-full h-96 object-cover rounded-t-lg" src="/imagens/campo_futebol_primeira.png"/> </div>
        <div> <img className="w-full h-96 object-cover rounded-t-lg" src="/imagens/quadra_basquete_primeira.png"/> </div>
        <div> <img className="w-full h-96 object-cover rounded-t-lg" src="/imagens/campo_futebol_segunda.png"/> </div>
        <div> <img className="w-full h-96 object-cover rounded-t-lg" src="/imagens/quadra_basquete_segunda.png"/> </div>
      </Carousel>
    </div>
  );
}
