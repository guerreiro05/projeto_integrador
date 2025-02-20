'use client'

import RodaPe from "../../components/Rodape";
import Menu from "../../components/Menu";
import { useState } from "react";

function Local(attr) {

    const [ local, alteraLocal ] =  useState({});
    const [ locais, alteraLocais ] = useState([
        {
            id: 1,
            imagem: "https://placehold.co/300",
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
            arquibancada: "não",
            localizacao: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29590.16543521822!2d-47.8937088!3d-22.020096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773405555553%3A0x5a3287d7a70d1681!2sIguatemi%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1740012240753!5m2!1spt-BR!2sbr"
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
            <div className="flex justify-center">
                <div className="flex">
                    {/* conteiner imagens */}
                    <container className="bg-red-300">
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                    </container>

                    {/* Imagem principal */}
                    <div className="bg-blue-300">
                        <img className="w-[500px] mx-5 border-double" src={local.imagem}>
                        </img>
                    </div> 

                    {/* Informações do produto */}
                    <div class="w-80 container bg-red-500">
                        <p>🏆 MAIS ALUGADA | 5º em Quadras</p>
                        <h2>{local.nome}</h2>

                        <h2>Quadra Society 25x15m Gramado Sintético - Iluminada |
                        <br/> Ideal Para Futebol, Treinos e Eventos</h2>
                        <p >⭐ {local.avaliacoes}</p>
                        <p >R$ {local.preco} <span>🏷️ {local.desconto} OFF</span></p>
                        <p>em até <strong>12x R$ 17,99</strong></p>
                        <p><a href="#">Ver os meios de pagamento</a></p>
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
                </div>

                    

                    {/* Parte de pagamento */}
                    <div >
                        <div className="border-solid bg-green-500 ml-5">
                            <button>Alugar agora</button>
                            <br/>
                            <button>Agendar data</button>
                        </div>

                        {/* Meios de pagamento */}
                        <div className="pl-5">
                            <h2>Meios de pagamento</h2>

                            <p className="">Linha de Crédito</p>
                            <img src="/imagens/imagens.svg/mercadopago.svg"/>

                            <p>Cartões de crédito</p>
                            <p className="text-xs">Pague em até 12x!</p>
                        
                                <div>
                                    <img className="w-[70px]" src="/imagens/imagens.svg/mastercard.svg"/>
                                    <img className="w-[70px]" src="/imagens/imagens.svg/visa.svg"/>
                                    <br/>
                                    <img className="w-[70px]" src="/imagens/imagens.svg/hipercard.svg"/>
                                    <img className="w-[70px]" src="/imagens/imagens.svg/elo.svg"/>
                                </div>
                                                    
                                <p>Cartões de débito</p>
                                
                                <img src="/imagens/imagens.svg/caixa.svg"/>
                                <img src="/imagens/imagens.svg/santander.svg"/>

                                <p>Pix</p>
                                <img src="/imagens/imagens.svg/pix.svg"/>

                                <p>Boleto bancário</p>
                                <img src="/imagens/imagens.svg/boleto.svg"/>
                        </div>
                    </div>
            </div>

            
        </main>
     );
}

export default Local;