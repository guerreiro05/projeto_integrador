'use client'

import { useState } from "react";
import Carrossel from "./components/Carrossel";
import Menu from "./components/Menu";
import Navegacao from "./components/Navegacao";
import RodaPe from "./components/Rodape";
import Quadras from "./components/quadras";




export default function Home() {

  const [ quadras, alteraQuadras ] = useState([
    {
        id: 1,
        imagem: "https://placehold.co/300",
        nome: "Campo de futebol",
        preco: 179,
        avaliacoes: 4.8,
        disponibilidade: ["Segunda a Sexta - 18h às 22h", "Sábado e Domingo - 10h às 22h"], 
        dimensoes: "25x40m",
        iluminacao: "sim",  
        tipo_grama: "sintética",  
        capacidade: 10,  
        vestiarios: "não",  
        bebedouro: "sim",  
        estacionamento: "não", 
        localizacao: "Rua das Palmeiras, 123 - Centro", 
        telefone: "(11) 99999-9999", 
        desconto: 10 
    },
    {
        id: 2,
        imagem: "https://placehold.co/300",
        nome: "Arena Society",
        preco: 200,
        dimensoes: "30x50m",
        avaliacoes: 4.7,
        iluminacao: "sim",
        tipo_grama: "natural",
        capacidade: 14,
        vestiarios: "sim",
        bebedouro: "sim",
        estacionamento: "sim",
        localizacao: "Av. dos Esportes, 456 - Bairro Novo",
        disponibilidade: ["Todos os dias - 08h às 23h"],
        telefone: "(11) 98888-8888",
        desconto: 5
    },
    {
        id: 3,
        imagem: "https://placehold.co/300",
        nome: "Quadra Coberta Central",
        preco: 150,
        dimensoes: "20x30m",
        avaliacoes: 4.5,
        iluminacao: "sim",
        tipo_grama: "sintética",
        capacidade: 8,
        vestiarios: "sim",
        bebedouro: "sim",
        estacionamento: "não",
        localizacao: "Rua Principal, 789 - Centro",
        disponibilidade: ["Segunda a Sexta - 16h às 22h", "Sábado - 10h às 20h"],
        telefone: "(11) 97777-7777",
        desconto: 15
    },
    {
        id: 4,
        imagem: "https://placehold.co/300",
        nome: "Campo da Vila",
        preco: 120,
        dimensoes: "22x35m",
        avaliacoes: 4.6,
        iluminacao: "não",
        tipo_grama: "natural",
        capacidade: 12,
        vestiarios: "sim",
        bebedouro: "não",
        estacionamento: "sim",
        localizacao: "Travessa do Esporte, 55 - Vila Esportiva",
        disponibilidade: ["Todos os dias - 14h às 22h"],
        telefone: "(11) 96666-6666",
        desconto: 8
    },
    {
        id: 5,
        imagem: "https://placehold.co/300",
        nome: "Society Premium",
        preco: 220,
        dimensoes: "28x45m",
        avaliacoes: 4.9,
        iluminacao: "sim",
        tipo_grama: "sintética",
        capacidade: 14,
        vestiarios: "sim",
        bebedouro: "sim",
        estacionamento: "sim",
        localizacao: "Rodovia do Esporte, 1000 - Zona Norte",
        disponibilidade: ["Todos os dias - 08h às 00h"],
        telefone: "(11) 95555-5555",
        desconto: 12
    },
    {
      id: 6,
      imagem: "https://placehold.co/300",
      nome: "Quadra Fast Play",
      preco: 140,
      dimensoes: "20x30m",
      avaliacoes: 4.3,
      iluminacao: "sim",
      tipo_grama: "sintética",
      capacidade: 8,
      vestiarios: "não",
      bebedouro: "sim",
      estacionamento: "sim",
      localizacao: "Rua dos Atletas, 77 - Bairro Novo",
      disponibilidade: ["Segunda a Sábado - 14h às 22h"],
      telefone: "(11) 94444-4444",
      desconto: 7
    },
    {
      id: 7,
      imagem: "https://placehold.co/300",
      nome: "Campo Master Arena",
      preco: 250,
      dimensoes: "30x50m",
      avaliacoes: 4.8,
      iluminacao: "sim",
      tipo_grama: "natural",
      capacidade: 16,
      vestiarios: "sim",
      bebedouro: "sim",
      estacionamento: "sim",
      localizacao: "Av. do Jogo, 900 - Cidade Alta",
      disponibilidade: ["Todos os dias - 08h às 23h"],
      telefone: "(11) 93333-3333",
      desconto: 10
    },
    {
      id: 8,
      imagem: "https://placehold.co/300",
      nome: "Quadra de tênis",
      preco: 99,
      dimensoes: "16x36m",
      avaliacoes: 4.5,
      iluminacao: "não",
      tipo_grama: "indoor",
      capacidade: 2,
      vestiarios: "sim",
      bebedouro: "não",
      estacionamento: "sim",
      localizacao: "Av. Brasil, 555 - Jardim das Flores",
      disponibilidade: ["Segunda a Sexta - 08h às 18h", "Sábado - 09h às 14h"],
      telefone: "(11) 98888-8888",
      desconto: 5
    },
    {
      id: 9,
      imagem: "https://placehold.co/300",
      nome: "Quadra poliesportiva",
      preco: 149,
      dimensoes: "20x30m",
      avaliacoes: 4.7,
      iluminacao: "sim",
      tipo_grama: "asfalto",
      capacidade: 12,
      vestiarios: "sim",
      bebedouro: "sim",
      estacionamento: "sim",
      localizacao: "Rua da Paz, 789 - Vila Verde",
      disponibilidade: ["Segunda a Domingo - 06h às 23h"],
      telefone: "(11) 97777-7777",
      desconto: 15
    },
    {
      id: 10,
      imagem: "https://placehold.co/300",
      nome: "Campo de futebol society",
      preco: 129,
      dimensoes: "18x30m",
      avaliacoes: 4.9,
      iluminacao: "sim",
      tipo_grama: "natural",
      capacidade: 8,
      vestiarios: "sim",
      bebedouro: "sim",
      estacionamento: "sim",
      localizacao: "Rua dos Esportes, 101 - Bairro Novo",
      disponibilidade: ["Segunda a Sexta - 17h às 21h", "Sábado - 08h às 18h"],
      telefone: "(11) 96666-6666",
      desconto: 20
    },
    {
      id: 11,
      imagem: "https://placehold.co/300",
      nome: "Quadra de vôlei de praia",
      preco: 109,
      dimensoes: "18x9m",
      avaliacoes: 4.3,
      iluminacao: "não",
      tipo_grama: "areia",
      capacidade: 4,
      vestiarios: "não",
      bebedouro: "não",
      estacionamento: "sim",
      localizacao: "Praia do Sol, 100 - Litoral",
      disponibilidade: ["Terça a Domingo - 09h às 18h"],
      telefone: "(13) 99999-8888",
      desconto: 0
    }
]);

  return (
    <main>
      
    <Menu/>
    <Navegacao/>

    <Carrossel />
    
    <h2 className="text-center">Quadras em destaques</h2>

    {
      quadras.map((i)=>
        <Quadras imagem={i.imagem} nome={i.nome} avaliacoes={i.avaliacoes} preco={i.preco} />
    )
    }

    <Quadras titulo="Quadras de tênis"/>

    <RodaPe/>

    </main>
  );
}
