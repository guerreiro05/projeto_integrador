'use client'

import { useEffect, useState } from "react";
import Carrossel from "./components/Carrossel";
import Quadras from "./components/Quadras"
import axios from "axios";


export default function Home(attr) {

  const [local, alteraLocal] = useState({});
  const [ locais, alteraLocais ] = useState([]);

  async function buscaLocais(){
    const response = await axios.get("http://localhost:4000/quadras?preco_min=100&preco_max=300")
    console.log(response.data)
    alteraLocais(response.data)
  }

  useEffect(()=>{
    buscaLocais()
  },[])
  
  useState(()=> {
    const id_local = attr.params.id;
    locais.map( (i)=> {
        if( i.id == id_local ){
            alteraLocal(i)
        }   
    })
  }, [])

  return (
    <main>
      <div className="layout-container bg-white text-center rounded-md">

        <h2>Quadras em destaques</h2>

        <Carrossel/>

        <div className="flex flex-wrap justify-center items-center">
          {
            locais.map((i, index) => {
              if (index < 2) {
                return (
                  <div key={i.id} className="w-[20%] min-w-[274px] bg-red-400">
                    <Quadras
                      id={i.id}
                      imagem={i.imagemPri}
                      nomeLocal={i.nomeLocal}
                      avaliacoes={i.avaliacoes}
                      preco={i.preco}
                      localizacao={i.localizacao}
                    />
                  </div>
                );
              }
            })
          }
        </div>
        
      </div>
    </main>
  );
}



