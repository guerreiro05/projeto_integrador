'use client'

import { useState } from "react";

import Quadras from "../components/Quadras";

function Categoria() {

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
            wi_fi: "Sim"
          },
          {
            id: 2,
            nome_local: "Centro Esportivo Águia",
            tipo_quadra: "Quadra de vôlei de praia",
            localizacao: "Av. Atlântica, 500 - Bairro Sul",
            imagem_principal: "/imagens/quadra_volei_1.png",
            imagem_pri: "/imagens/quadra_volei_2.png",
            imagem_seg: "/imagens/quadra_volei_3.png",
            imagem_ter: "/imagens/quadra_volei_4.png",
            telefone: "(11) 98888-2222",
            disponibilidade: ["Todos os dias - 8h às 20h"],
            preco: 120,
            dimensoes: "16x8m",
            iluminacao: "Não",
            vestiarios: "Não",
            bebedouro: "Sim",
            estacionamento: "Sim",
            arquibancada: "Sim",
            coberta: "Aberto",
            acessibilidade: "Não",
            wi_fi: "Não"
          },
          {
            id: 3,
            nome_local: "Quadra Raquete Club",
            tipo_quadra: "Quadra de tênis rápida",
            localizacao: "Rua das Palmeiras, 800 - Jardim Verde",
            imagem_principal: "/imagens/quadra_tenis_1.png",
            imagem_pri: "/imagens/quadra_tenis_2.png",
            imagem_seg: "/imagens/quadra_tenis_3.png",
            imagem_ter: "/imagens/quadra_tenis_4.png",
            telefone: "(11) 97777-7777",
            disponibilidade: ["Segunda a Sexta - 7h às 22h"],
            preco: 200,
            dimensoes: "23.77x10.97m",
            iluminacao: "Sim",
            vestiarios: "Sim",
            bebedouro: "Sim",
            estacionamento: "Sim",
            arquibancada: "Sim",
            coberta: "Fechada",
            acessibilidade: "Sim",
            wi_fi: "Sim"
          },
          {
            id: 4,
            nome_local: "Esporte Clube Montanha",
            tipo_quadra: "Quadra de futebol society",
            localizacao: "Rua dos Trilhos, 321 - Alto da Serra",
            imagem_principal: "/imagens/quadra_society_1.png",
            imagem_pri: "/imagens/quadra_society_2.png",
            imagem_seg: "/imagens/quadra_society_3.png",
            imagem_ter: "/imagens/quadra_society_4.png",
            telefone: "(11) 96666-4444",
            disponibilidade: ["Sábado e Domingo - 9h às 23h"],
            preco: 180,
            dimensoes: "30x50m",
            iluminacao: "Sim",
            vestiarios: "Sim",
            bebedouro: "Sim",
            estacionamento: "Não",
            arquibancada: "Não",
            coberta: "Aberto",
            acessibilidade: "Sim",
            wi_fi: "Não"
          },
          {
            id: 5,
            nome_local: "Clube Estrela Norte",
            tipo_quadra: "Quadra poliesportiva",
            localizacao: "Av. Central, 89 - Vila Nova",
            imagem_principal: "/imagens/quadra_poliesportiva_1.png",
            imagem_pri: "/imagens/quadra_poliesportiva_2.png",
            imagem_seg: "/imagens/quadra_poliesportiva_3.png",
            imagem_ter: "/imagens/quadra_poliesportiva_4.png",
            telefone: "(11) 95555-1111",
            disponibilidade: ["Todos os dias - 6h às 22h"],
            preco: 160,
            dimensoes: "20x35m",
            iluminacao: "Sim",
            vestiarios: "Sim",
            bebedouro: "Sim",
            estacionamento: "Sim",
            arquibancada: "Sim",
            coberta: "Fechada",
            acessibilidade: "Sim",
            wi_fi: "Sim"
          }
    ]);

    return ( 
        <main>
            <div className="layout-container text-center flex">

                <div className="p-10 bg-green-300">
                    <p>Campo de Futebol</p>
                    <p>Quadra de Tênis</p>
                </div>

                <div className="flex w-full justify-center">
                    {
                    locais.map((i, index) => {
                        if (index < 3) {
                            return (
                                <Quadras
                                    key={i.id}
                                    id={i.id}
                                    imagem={i.imagem_principal}
                                    nome={i.nome_local}
                                    preco={i.preco}
                                />
                            );
                        }
                    })
                    }     
                </div>
            </div>
        </main>
     );
}

export default Categoria;