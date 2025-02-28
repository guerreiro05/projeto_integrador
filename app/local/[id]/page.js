'use client'

import Carrossel from "@/app/components/Carrossel";
import { useState } from "react";

function Local(attr) {

    const [ local, alteraLocal ] =  useState({});
    const [ locais, alteraLocais ] = useState([
        {
            id: 1,
            imagem_principal: "/imagens/quadra_descobera.jpg",
            imagem_primeira: "/imagens/quadra_descobera.jpg",
            imagem_secunda: "/imagens/quadra_descobera.jpg",
            imagem_terceira: "/imagens/quadra_descobera.jpg",
            imagem_quarta: "/imagens/quadra_descobera.jpg",
            nome: "Campo de futebol",
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
            imagem: "https://placehold.co/300",
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
            imagem: "https://placehold.co/300",
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
            imagem: "https://placehold.co/300",
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
            {/* div geral */}
            <div className="layout-container">
                <section className="flex">
                    {/* conteiner imagens */}
                    <container className="hover:bg-red-300 p-3">
                        <img className="w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_primeira}></img>
                        <br/>
                        <img className="w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_secunda}></img>
                        <br/>
                        <img className="w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_terceira}></img>
                        <br/>
                    </container>

                    {/* Imagem principal */}
                    <div className="hover:bg-blue-300 p-3">
                        <img className="w-[500px] rounded-md border-solid border-2 hover:border-gray-300" src={local.imagem_principal}>
                        </img>
                    </div>

                    {/* Informações do produto */}
                    <div className="w-80 container hover:bg-red-500 p-3">
                        <p>🏆 MAIS ALUGADA | 5º em Quadras</p>
                        <h2>{local.nome}</h2>

                        <h2>Quadra Society 25x15m Gramado Sintético - Iluminada |
                        <br/> Ideal Para Futebol, Treinos e Eventos</h2>
                        <p >⭐ {local.avaliacoes}</p>
                        <p >R$ {local.preco} <span>🏷️ {local.desconto} OFF</span></p>
                        <p>em até <strong>12x R$ 17,99</strong></p>
                        <a href="">Ver os meios de pagamento</a>
                    <div/>

                        <div>
                            <strong>Dimensões Disponíveis:</strong>
                            <ul>
                                <li>{local.dimensoes}</li>
                            </ul>
                        </div>
                    

                            <h3>Estrutura Inclui:</h3>
                        <ul>
                            <li>✅ Tipo de gramado: {local.tipo_grama}</li>
                            <li>✅ Posui iluminação: {local.iluminacao}</li>
                            <li>✅ Vestiários: {local.vestiarios}</li>
                            <li>✅ Arquibancada: {local.arquibancada}</li>
                            <li>✅ Bebedouro e estacionamento 🚗</li>
                        </ul>
                    </div>

                    {/* Parte de pagamento */}
                    <div className="border-solid bg-green-500 ml-5">
                        <button>Alugar agora</button>
                        <br/>
                        <button>Agendar data</button>
                    </div>

                </section>

                {/* Caracteristicas do produto */}
                <section>
                    <div>
                        <h2>Características do produto</h2>

                        {/* Div centralizadora */}
                        <div className="flex justify-start">
                            {/* Características principais */}
                            <div>
                                <h3 className="ml-10">Estrutura Inclui:</h3>
                                <ul className="list-none rounded-lg">
                                    <li className="barraCinza rounded-t-lg">Tipo de gramado: {local.tipo_grama}</li>
                                    <li className="barraBranca">Bebedouro: {local.bebedouro}</li>
                                    <li className="barraCinza">Wifi: {local.wi_fi}</li>
                                    <li className="barraBranca">Vestiário: {local.vestiarios}</li>
                                    <li className="barraCinza">Estacionamento: {local.estacionamento}</li>
                                    <li className="barraBranca">Arquibancada: {local.arquibancada}</li>
                                    <li className="barraCinza rounded-b-lg">Acessibilidade:{local.acessibilidade}</li>
                                    
                                </ul>
                            </div>
                    
                            {/* Informações Tecnicas */}
                            <div>
                                <h3 className="ml-10">Informações Técnicas</h3>
                                <ul className="list-none rounded-lg">
                                    <li className="barraCinza rounded-t-lg">Iluminação:{local.iluminacao} </li>
                                    <li className="barraBranca">Capacidade: {local.capacidade} </li>
                                    <li className="barraCinza">Dimensões: {local.dimensoes}</li>
                                    <li className="barraBranca">Equipamentos extras: {local.equipamentos_extras}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meios de pagamento */}
                <section>
                    <div className="">
                        <h2>Meios de pagamento</h2>

                        <div className="flex justify-around">

                            <div>
                                <p className="">Linha de Crédito</p>
                                <img src="/imagens/imagens.svg/mercadopago.svg"/>
                            </div>
                            
                            <div>
                                <p>Cartões de crédito</p>
                                <p className="text-xs">Pague em até 12x!</p>
                                <img className="w-[70px]" src="/imagens/imagens.svg/mastercard.svg"/>
                                <img className="w-[70px]" src="/imagens/imagens.svg/visa.svg"/>
                                <br/>
                                <img className="w-[70px]" src="/imagens/imagens.svg/hipercard.svg"/>
                                <img className="w-[70px]" src="/imagens/imagens.svg/elo.svg"/>
                            </div>

                            <div>
                                <p>Cartões de débito</p>
                            
                                <img src="/imagens/imagens.svg/caixa.svg"/>
                                <img src="/imagens/imagens.svg/santander.svg"/>
                            </div>
                            <div>
                                <p>Pix</p>
                                <img src="/imagens/imagens.svg/pix.svg"/>
                            </div>
                            <div>
                                <p>Boleto bancário</p>
                                <img src="/imagens/imagens.svg/boleto.svg"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
     );
}

export default Local;