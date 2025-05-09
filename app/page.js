'use client'

import { useState } from "react";
import Carrossel from "./components/Carrossel";
import Quadras from "./components/Quadras";


export default function Home(attr) {

  const [local, alteraLocal] = useState({});
  const [ locais, alteraLocais ] = useState([
      {
        id: 1,
        nome_local: "Arena Sol Azul",
        tipo_quadra: "Quadra de basquete",
        localizacao: "Rua das Palmeiras, 123 - Centro",
        imagem_principal: "/imagens/quadra_basquete_1.png",
        imagem_pri: "/imagens/quadra_basquete_2.png",
        imagem_seg: "/imagens/quadra_basquete_3.png",
        imagem_ter: "/imagens/quadra_basquete_4.png",
        telefone: "(11) 99999-1234",
        disponibilidade: ["Segunda a Sexta - 18h às 22h", "Sábado - 14h às 20h"],
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
        nome_local: "Espaço Vôlei Master",
        tipo_quadra: "Quadra de vôlei",
        localizacao: "Av. dos Esportes, 456 - Bairro Alto",
        imagem_principal: "/imagens/quadra_volei_1.png",
        imagem_pri: "/imagens/quadra_volei_2.png",
        imagem_seg: "/imagens/quadra_volei_3.png",
        imagem_ter: "/imagens/quadra_volei_4.png",
        telefone: "(11) 98888-4567",
        disponibilidade: ["Todos os dias - 16h às 22h"],
        preco: 120,
        dimensoes: "18x9m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Sim",
        coberta: "Aberta",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 3,
        nome_local: "Fut7 Central",
        tipo_quadra: "Campo society",
        localizacao: "Rua João da Bola, 789 - Zona Sul",
        imagem_principal: "/imagens/quadra_society_1.png",
        imagem_pri: "/imagens/quadra_society_2.png",
        imagem_seg: "/imagens/quadra_society_3.png",
        imagem_ter: "/imagens/quadra_society_4.png",
        telefone: "(11) 97777-9876",
        disponibilidade: ["Segunda a Sexta - 18h às 23h"],
        preco: 200,
        dimensoes: "30x20m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Sim",
        coberta: "Fechada",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 4,
        nome_local: "Tênis Clube Jardim",
        tipo_quadra: "Quadra de tênis",
        localizacao: "Alameda das Rosas, 321 - Jardim Bela Vista",
        imagem_principal: "/imagens/quadra_tenis_1.png",
        imagem_pri: "/imagens/quadra_tenis_2.png",
        imagem_seg: "/imagens/quadra_tenis_3.png",
        imagem_ter: "/imagens/quadra_tenis_4.png",
        telefone: "(11) 96666-2222",
        disponibilidade: ["Sábado e Domingo - 8h às 18h"],
        preco: 180,
        dimensoes: "23x10m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Não",
        arquibancada: "Sim",
        coberta: "Aberta",
        acessibilidade: "Sim",
        wi_fi: "Não",
        criado_em: new Date()
      },
      {
        id: 5,
        nome_local: "Padel Pro Center",
        tipo_quadra: "Quadra de padel",
        localizacao: "Rua das Acácias, 55 - Bairro Novo",
        imagem_principal: "/imagens/quadra_padel_1.png",
        imagem_pri: "/imagens/quadra_padel_2.png",
        imagem_seg: "/imagens/quadra_padel_3.png",
        imagem_ter: "/imagens/quadra_padel_4.png",
        telefone: "(11) 95555-3333",
        disponibilidade: ["Todos os dias - 9h às 22h"],
        preco: 170,
        dimensoes: "20x10m",
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
        id: 6,
        nome_local: "Beach Arena",
        tipo_quadra: "Quadra de beach tennis",
        localizacao: "Av. Oceânica, 1000 - Praia Sul",
        imagem_principal: "/imagens/quadra_beach_1.png",
        imagem_pri: "/imagens/quadra_beach_2.png",
        imagem_seg: "/imagens/quadra_beach_3.png",
        imagem_ter: "/imagens/quadra_beach_4.png",
        telefone: "(11) 94444-1111",
        disponibilidade: ["Segunda a Domingo - 6h às 19h"],
        preco: 140,
        dimensoes: "16x8m",
        iluminacao: "Sim",
        vestiarios: "Não",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Não",
        coberta: "Aberta",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      },
      {
        id: 7,
        nome_local: "Futsal Arena 10",
        tipo_quadra: "Quadra de futsal",
        localizacao: "Rua dos Atletas, 999 - Centro",
        imagem_principal: "/imagens/quadra_futsal_1.png",
        imagem_pri: "/imagens/quadra_futsal_2.png",
        imagem_seg: "/imagens/quadra_futsal_3.png",
        imagem_ter: "/imagens/quadra_futsal_4.png",
        telefone: "(11) 93333-4444",
        disponibilidade: ["Segunda a Sexta - 17h às 23h"],
        preco: 160,
        dimensoes: "40x20m",
        iluminacao: "Sim",
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        arquibancada: "Sim",
        coberta: "Fechada",
        acessibilidade: "Sim",
        wi_fi: "Sim",
        criado_em: new Date()
      }
]);

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



