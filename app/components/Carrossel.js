'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export default function Carrossel() {

    const [ locais, alteraLocais ] = useState([]);

    async function buscaLocais(){
      const response = await axios.get("http://localhost:4000/quadras?preco_min=100&preco_max=300")
      console.log(response.data)
      alteraLocais(response.data)
    }
  
    useEffect(()=>{
      buscaLocais()
    },[])

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
        {
          locais.map((i, index) => {
            if (index < 4) {
              const imagens = [i.imagemPrincipal, i.imagemPri, i.imagemSeg, i.imagemTer];
              const imagemEscolhida = imagens[index % imagens.length];

              return (
                <div key={index} onClick={() => window.location.href = `/local/${i.id}`} className="cursor-pointer">
                  <img className="w-full h-96 object-cover" src={imagemEscolhida} alt={i.nomeLocal} />
                </div>
              );
            }
          })
        }
      </Carousel>
    </div>
  );
}


