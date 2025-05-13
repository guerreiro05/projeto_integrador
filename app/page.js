'use client'

import { useEffect, useState } from "react";
import Carrossel from "./components/Carrossel";
import Quadras from "./components/Quadras";
import axios from "axios";


export default function Home(attr) {

  const [local, alteraLocal] = useState({});
  const [ locais, alteraLocais ] = useState([
      {
        id: 1,
        nome_local: "Arena Sol Azul",
        tipo_quadra: "Quadra de basquete",
        localizacao: "Rua das Palmeiras, 123 - Centro",
        imagem_principal: "https://i.imgur.com/fgqYnsz.jpeg",
        imagem_pri: "https://i.imgur.com/DkwzUkd.jpeg",
        imagem_seg: "https://i.imgur.com/O66Dwe3.jpeg",
        imagem_ter: "https://i.imgur.com/0PNCSOo.jpeg",
        telefone: "(11) 99999-1234",
        preco: 150,
        dimensoes: "28x15m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Não",
        coberta: "Fechada",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 2,
        nome_local: "Quadra Estrela do Norte",
        tipo_quadra: "Quadra de futsal",
        localizacao: "Av. Brasil, 456 - Zona Norte",
        imagem_principal: "https://i.imgur.com/fgqYnsz.jpeg",
        imagem_pri: "https://i.imgur.com/DkwzUkd.jpeg",
        imagem_seg: "https://i.imgur.com/O66Dwe3.jpeg",
        imagem_ter: "https://i.imgur.com/0PNCSOo.jpeg",
        telefone: "(11) 98888-1111",
        preco: 120,
        dimensoes: "25x15m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Não",
        estacionamento: "Sim",
        arquibancada: "Sim",
        coberta: "Aberta",
        acessibilidade: "Sim",
        wi_fi: "Não",
        criado_em: new Date()
      },
      {
        id: 3,
        nome_local: "Clube Raquete Dourada",
        tipo_quadra: "Quadra de tênis",
        localizacao: "Rua das Flores, 789 - Jardim",
        imagem_principal: "https://i.imgur.com/fgqYnsz.jpeg",
        imagem_pri: "https://i.imgur.com/DkwzUkd.jpeg",
        imagem_seg: "https://i.imgur.com/O66Dwe3.jpeg",
        imagem_ter: "https://i.imgur.com/0PNCSOo.jpeg",
        telefone: "(11) 97777-2222",
        preco: 180,
        dimensoes: "23.77x8.23m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Não",
        coberta: "Coberta",
        acessibilidade: "Não",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 4,
        nome_local: "Ginásio Vôlei+",
        tipo_quadra: "Quadra de vôlei",
        localizacao: "Rua da Rede, 321 - Centro",
        imagem_principal: "https://i.imgur.com/fgqYnsz.jpeg",
        imagem_pri: "https://i.imgur.com/DkwzUkd.jpeg",
        imagem_seg: "https://i.imgur.com/O66Dwe3.jpeg",
        imagem_ter: "https://i.imgur.com/0PNCSOo.jpeg",
        telefone: "(11) 96666-3333",
        preco: 140,
        dimensoes: "18x9m",
        iluminacao: "Não",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Não",
        arquibancada: "Sim",
        coberta: "Fechada",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 5,
        nome_local: "Arena Basquete 360",
        tipo_quadra: "Quadra de basquete",
        localizacao: "Av. dos Atletas, 1000 - Sul",
        imagem_principal: "https://i.imgur.com/fgqYnsz.jpeg",
        imagem_pri: "https://i.imgur.com/DkwzUkd.jpeg",
        imagem_seg: "https://i.imgur.com/O66Dwe3.jpeg",
        imagem_ter: "https://i.imgur.com/0PNCSOo.jpeg",
        telefone: "(11) 95555-4444",
        preco: 160,
        dimensoes: "28x15m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Não",
        estacionamento: "Sim",
        arquibancada: "Sim",
        coberta: "Aberta",
        acessibilidade: "Sim",
        wi_fi: "Não",
        criado_em: new Date()
      }
]);
// useEffect(()=>{
//   const c = axios.get('http://localhost:4000/quadras')
    // console.log("")
//   alteraLocal(c.data)
// })
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

        <div className="flex flex-wrap justify-center items-center h-screen gap-4">
          {
            locais.map((i, index) => {
              if (index < 7) {
                return (
                  <div key={i.id} className="w-[22%] min-w-[200px] bg-red-400">
                    <Quadras
                      id={i.id}
                      imagem={i.imagem_primeira}
                      nome={i.nome}
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



