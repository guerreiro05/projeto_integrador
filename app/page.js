'use client'

import { useEffect, useState } from "react";
import Carrossel from "./components/Carrossel";
import Quadras from "./components/Quadras"
import axios from "axios";
import host from "./lib/host";


export default function Home(attr) {

  const [ avalicao, alteraAvaliacao ] = useState({media: 0, total: 0});
  const [ local, alteraLocal] = useState({});
  const [ locais, alteraLocais ] = useState([]);

  async function buscaLocais(){
    const response = await axios.get(host+"/quadras?preco_min=100&preco_max=300")
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
      <main className="layout-container bg-white rounded-md">

        <h2 className="text-textMain text-center pt-4 font-bold">Quadras em destaques</h2>

        <div className="mx-11">
          <Carrossel/>
        </div>

        <div className="flex flex-wrap ml-7">
          {
            locais.map((i, index) => {
              if (index < 8) {
                return (
                  <div key={i.id} className="flex m-4" >
                    <Quadras
                      id={i.id}
                      imagem={i.imagemPri}
                      nomeLocal={i.nomeLocal}
                      tipoQuadra={i.tipoQuadra}
                      preco={i.preco}
                      localizacao={i.localizacao}
                    />
                  </div>
                );
              }
            })
          }
        </div>
        
      </main>
  );
}



