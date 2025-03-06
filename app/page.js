'use client'

import { useState } from "react";
import Carrossel from "./components/Carrossel";
import Quadras from "./components/Quadras";

export default function Home() {

  const [ locais, alteraLocais ] = useState([
    {
        id: 1,
    imagem_principal: "/imagens/campinho_aberto.jpg",
    nome: "Campo de futebol",
    imagem_primeira: "/imagens/campinho_aberto.jpg",
    imagem_secunda: "/imagens/campinho_aberto.jpg",
    imagem_terceira: "/imagens/campinho_aberto.jpg",
    imagem_quarta: "/imagens/campinho_aberto.jpg",
    preco: 179,
    avaliacoes: 4.8,
    disponibilidade: ["Segunda a Sexta - 18h às 22h", "Sábado e Domingo - 10h às 22h"],
    dimensoes: "25x40m",
    iluminacao: "Sim",
    tipo_grama: "Sintético",
    capacidade: 10,
    vestiarios: "Não",
    bebedouro: "Sim",
    estacionamento: "Não",
    localizacao: "Rua das Palmeiras, 123 - Centro",
    telefone: "(11) 99999-9999",
    desconto: 10,
    arquibancada: "Não",
    aberto_fechado: "Aberto",
    tipo_piso: "Sintético",
    acessibilidade: "Sim",
    equipamentos_extras: "Bolas, Redes",
    wi_fi: "Não"
},
{
    id: 2,
    imagem_principal: "/imagens/quadra_coberta.jpg",
    nome: "Quadra Poliesportiva Coberta",
    imagem_primeira: "/imagens/quadra_coberta.jpg",
    imagem_secunda: "/imagens/quadra_coberta.jpg",
    imagem_terceira: "/imagens/quadra_coberta.jpg",
    imagem_quarta: "/imagens/quadra_coberta.jpg",
    preco: 250,
    avaliacoes: 4.9,
    disponibilidade: ["Segunda a Sexta - 8h às 20h", "Sábado - 9h às 18h"],
    dimensoes: "30x50m",
    iluminacao: "Sim",
    tipo_grama: "Não se aplica",
    capacidade: 20,
    vestiarios: "Sim",
    bebedouro: "Sim",
    estacionamento: "Sim",
    localizacao: "Avenida Brasil, 456 - Centro",
    telefone: "(21) 88888-8888",
    desconto: 15,
    arquibancada: "Sim",
    aberto_fechado: "Fechado",
    tipo_piso: "Concreto",
    acessibilidade: "Sim",
    equipamentos_extras: "Bolas, Redes, Cones",
    wi_fi: "Sim"
},
{
    id: 3,
    imagem_principal: "/imagens/quadra_tenis.jpg",
    nome: "Quadra de Tênis",
    imagem_primeira: "/imagens/quadra_tenis.jpg",
    imagem_secunda: "/imagens/quadra_tenis.jpg",
    imagem_terceira: "/imagens/quadra_tenis.jpg",
    imagem_quarta: "/imagens/quadra_tenis.jpg",
    preco: 200,
    avaliacoes: 4.7,
    disponibilidade: ["Todos os dias - 7h às 22h"],
    dimensoes: "23.77x10.97m",
    iluminacao: "Sim",
    tipo_grama: "Saibro",
    capacidade: 4,
    vestiarios: "Sim",
    bebedouro: "Sim",
    estacionamento: "Sim",
    localizacao: "Rua dos Esportes, 789 - Vila Olímpica",
    telefone: "(31) 77777-7777",
    desconto: 5,
    arquibancada: "Não",
    aberto_fechado: "Aberto",
    tipo_piso: "Saibro",
    acessibilidade: "Não",
    equipamentos_extras: "Raquetes, Bolas",
    wi_fi: "Sim"
},
{
    id: 4,
    imagem_principal: "/imagens/quadra_volei.jpg",
    nome: "Quadra de Vôlei de Praia",
    imagem_primeira: "/imagens/quadra_volei.jpg",
    imagem_secunda: "/imagens/quadra_volei.jpg",
    imagem_terceira: "/imagens/quadra_volei.jpg",
    imagem_quarta: "/imagens/quadra_volei.jpg",
    preco: 150,
    avaliacoes: 4.6,
    disponibilidade: ["Segunda a Sexta - 14h às 20h", "Domingo - 8h às 18h"],
    dimensoes: "16x8m",
    iluminacao: "Não",
    tipo_grama: "Areia",
    capacidade: 6,
    vestiarios: "Não",
    bebedouro: "Sim",
    estacionamento: "Não",
    localizacao: "Praça Central, 100 - Beira-Mar",
    telefone: "(41) 66666-6666",
    desconto: 20,
    arquibancada: "Não",
    aberto_fechado: "Aberto",
    tipo_piso: "Areia",
    acessibilidade: "Não",
    equipamentos_extras: "Bolas, Rede de Vôlei",
    wi_fi: "Não"
},
{
    id: 5,
    imagem_principal: "/imagens/quadra_basquete.jpg",
    nome: "Quadra de Basquete",
    imagem_primeira: "/imagens/quadra_basquete.jpg",
    imagem_secunda: "/imagens/quadra_basquete.jpg",
    imagem_terceira: "/imagens/quadra_basquete.jpg",
    imagem_quarta: "/imagens/quadra_basquete.jpg",
    preco: 180,
    avaliacoes: 4.8,
    disponibilidade: ["Segunda a Sábado - 9h às 22h"],
    dimensoes: "28x15m",
    iluminacao: "Sim",
    tipo_grama: "Não se aplica",
    capacidade: 12,
    vestiarios: "Sim",
    bebedouro: "Sim",
    estacionamento: "Sim",
    localizacao: "Rua dos Atletas, 321 - Zona Norte",
    telefone: "(51) 55555-5555",
    desconto: 12,
    arquibancada: "Sim",
    aberto_fechado: "Fechado",
    tipo_piso: "Madeira",
    acessibilidade: "Sim",
    equipamentos_extras: "Bolas, Tabelas",
    wi_fi: "Sim"
}
]);

  return (
    <main>

      <Carrossel/>

      <div className="layout-container text-center">

        <h2>Quadras em destaques</h2>

        <div className="flex justify-center">
          {
            locais.map((i, index)=> {
              if(index < 5) {
                return <Quadras key={i.id} id={i.id} imagem={i.imagem} nome={i.nome} avaliacoes={i.avaliacoes} preco={i.preco} localizacao={i.localizacao}/>
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
                return <Quadras key={i.id} id={i.id} imagem={i.imagem} nome={i.nome} avaliacoes={i.avaliacoes} preco={i.preco} />
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



