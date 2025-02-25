'use client'

import { useState } from "react";
import Carrossel from "./components/Carrossel";
import Menu from "./components/Menu";
import Navegacao from "./components/Navegacao";
import RodaPe from "./components/Rodape";
import Quadras from "./components/Quadras";

export default function Home() {

  const [ exibirCampoCep, alteraExibirCampoCep ] = useState(true);

  const [ locais, alteraLocais ] = useState([
    {
        id: 1,
        imagem: "/imagens/campinho_aberto.jpg",
        nome: "Campo de futebol",
        preco: 179,
        avaliacoes: 4.8,
        disponibilidade: ["Segunda a Sexta - 18h às 22h", "Sábado e Domingo - 10h às 22h"], 
        dimensoes: "25x40m",
        iluminacao: "Sim",  
        tipo_grama: "sintético",  
        capacidade: 10,  
        vestiarios: "Não",  
        bebedouro: "Sim",  
        estacionamento: "Não", 
        localizacao: "Rua das Palmeiras, 123 - Centro", 
        telefone: "(11) 99999-9999", 
        desconto: 10, 
        arquibancada: "não"
    },
    {
        id: 2,
        imagem: "/imagens/quadra_descobera.jpg",
        nome: "Arena Society",
        preco: 200,
        dimensoes: "30x50m",
        avaliacoes: 4.7,
        iluminacao: "Sim",
        tipo_grama: "natural",
        capacidade: 14,
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        localizacao: "Av. dos Esportes, 456 - Bairro Novo",
        disponibilidade: ["Todos os dias - 08h às 23h"],
        telefone: "(11) 98888-8888",
        desconto: 5,
        arquibancada: "não"
    },
    {
        id: 3,
        imagem: "/imagens/quadra_tenis.jpg",
        nome: "Quadra Coberta Central",
        preco: 150,
        dimensoes: "20x30m",
        avaliacoes: 4.5,
        iluminacao: "Sim",
        tipo_grama: "sintético",
        capacidade: 8,
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Não",
        localizacao: "Rua Principal, 789 - Centro",
        disponibilidade: ["Segunda a Sexta - 16h às 22h", "Sábado - 10h às 20h"],
        telefone: "(11) 97777-7777",
        desconto: 15,
        arquibancada: "sim"
    },
    {
        id: 4,
        imagem: "/imagens/campinho_aberto.jpg",
        nome: "Campo da Vila",
        preco: 120,
        dimensoes: "22x35m",
        avaliacoes: 4.6,
        iluminacao: "Não",
        tipo_grama: "natural",
        capacidade: 12,
        vestiarios: "Sim",
        bebedouro: "Não",
        estacionamento: "Sim",
        localizacao: "Travessa do Esporte, 55 - Vila Esportiva",
        disponibilidade: ["Todos os dias - 14h às 22h"],
        telefone: "(11) 96666-6666",
        desconto: 8,
        arquibancada: "não"
    },
    {
        id: 5,
        imagem: "https://placehold.co/300",
        nome: "Society Premium",
        preco: 220,
        dimensoes: "28x45m",
        avaliacoes: 4.9,
        iluminacao: "Sim",
        tipo_grama: "sintético",
        capacidade: 14,
        vestiarios: "Sim",
        bebedouro: "Sim",
        estacionamento: "Sim",
        localizacao: "Rodovia do Esporte, 1000 - Zona Norte",
        disponibilidade: ["Todos os dias - 08h às 00h"],
        telefone: "(11) 95555-5555",
        desconto: 12,
        arquibancada: "sim"
    },
    {
      id: 6,
      imagem: "https://placehold.co/300",
      nome: "Quadra Fast Play",
      preco: 140,
      dimensoes: "20x30m",
      avaliacoes: 4.3,
      iluminacao: "Sim",
      tipo_grama: "sintético",
      capacidade: 8,
      vestiarios: "Não",
      bebedouro: "Sim",
      estacionamento: "Sim",
      localizacao: "Rua dos Atletas, 77 - Bairro Novo",
      disponibilidade: ["Segunda a Sábado - 14h às 22h"],
      telefone: "(11) 94444-4444",
      desconto: 7,
      arquibancada: "sim"
    },
    {
      id: 7,
      imagem: "https://placehold.co/300",
      nome: "Campo Master Arena",
      preco: 250,
      dimensoes: "30x50m",
      avaliacoes: 4.8,
      iluminacao: "Sim",
      tipo_grama: "natural",
      capacidade: 16,
      vestiarios: "Sim",
      bebedouro: "Sim",
      estacionamento: "Sim",
      localizacao: "Av. do Jogo, 900 - Cidade Alta",
      disponibilidade: ["Todos os dias - 08h às 23h"],
      telefone: "(11) 93333-3333",
      desconto: 10,
      arquibancada: "não"
    },
    {
      id: 8,
      imagem: "https://placehold.co/300",
      nome: "Quadra de tênis",
      preco: 99,
      dimensoes: "16x36m",
      avaliacoes: 4.5,
      iluminacao: "Não",
      tipo_grama: "indoor",
      capacidade: 2,
      vestiarios: "Sim",
      bebedouro: "Não",
      estacionamento: "Sim",
      localizacao: "Av. Brasil, 555 - Jardim das Flores",
      disponibilidade: ["Segunda a Sexta - 08h às 18h", "Sábado - 09h às 14h"],
      telefone: "(11) 98888-8888",
      desconto: 5,
      arquibancada: "não"
    },
    {
      id: 9,
      imagem: "https://placehold.co/300",
      nome: "Quadra poliesportiva",
      preco: 149,
      dimensoes: "20x30m",
      avaliacoes: 4.7,
      iluminacao: "Sim",
      tipo_grama: "asfalto",
      capacidade: 12,
      vestiarios: "Sim",
      bebedouro: "Sim",
      estacionamento: "Sim",
      localizacao: "Rua da Paz, 789 - Vila Verde",
      disponibilidade: ["Segunda a Domingo - 06h às 23h"],
      telefone: "(11) 97777-7777",
      desconto: 15,
      arquibancada: "sim"
    },
    {
      id: 10,
      imagem: "https://placehold.co/300",
      nome: "Campo de futebol society",
      preco: 129,
      dimensoes: "18x30m",
      avaliacoes: 4.9,
      iluminacao: "Sim",
      tipo_grama: "natural",
      capacidade: 8,
      vestiarios: "Sim",
      bebedouro: "Sim",
      estacionamento: "Sim",
      localizacao: "Rua dos Esportes, 101 - Bairro Novo",
      disponibilidade: ["Segunda a Sexta - 17h às 21h", "Sábado - 08h às 18h"],
      telefone: "(11) 96666-6666",
      desconto: 20,
      arquibancada: "não"
    },
    {
      id: 11,
      imagem: "https://placehold.co/300",
      nome: "Quadra de vôlei de praia",
      preco: 109,
      dimensoes: "18x9m",
      avaliacoes: 4.3,
      iluminacao: "Não",
      tipo_grama: "areia",
      capacidade: 4,
      vestiarios: "Não",
      bebedouro: "Não",
      estacionamento: "Sim",
      localizacao: "Praia do Sol, 100 - Litoral",
      disponibilidade: ["Terça a Domingo - 09h às 18h"],
      telefone: "(13) 99999-8888",
      desconto: 0,
      arquibancada: "sim"
    }
]);

  function atualizarCampoCep() {
      alteraExibirCampoCep(false)
  }

  return (
    <main>
      
    <Carrossel/>
 
    { 
      exibirCampoCep == true &&
        <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div class="w-[350px] h-[300px] rounded-lg items-center justify-center flex p-4 bg-white">
            <div className="text-center">

              <button onClick={()=> atualizarCampoCep(false)} className="flex justify-start cursor-pointer text-xl bg-white border-none">
                ✖
              </button>

              <p>Inseira seu CEP para encontrar quadras perto de você!</p>

              <form action="#">
                <div><input pattern="^\d{5}-\d{3}$" required className="border-2 p-3 w-64" placeholder="Digite seu CEP"/></div>
                <br/>
                <button className="rounded-xs w-64 p-3">continuar</button>
              </form>

              <p>Já tem conta?</p>
              <button onClick={() => window.location.href = "login/"} className="hover:bg-gray-300 rounded-xs p-3 w-64">
                Fazer Login
              </button>
            </div>
          </div>
        </div>
    }

    <div className="text-center">

      <h2>Quadras em destaques</h2>

      <div className="flex justify-center">
        {
          locais.map((i, index)=> {
            if(index < 5) {
              return <Quadras id={i.id} imagem={i.imagem} nome={i.nome} avaliacoes={i.avaliacoes} preco={i.preco} localizacao={i.localizacao}/>
            }
          }
        )
        }
      </div>

      <h2 >Quadras em destaques</h2>

      <div className="flex justify-center">
        {
          locais.map((i, index)=> {
            if(index < 5) {
              return <Quadras id={i.id} imagem={i.imagem} nome={i.nome} avaliacoes={i.avaliacoes} preco={i.preco} />
            }
          }
        )
        }
      </div>

      <button className="botaoModelo">Ver mais</button>
      
    </div>

    </main>
  );
}

