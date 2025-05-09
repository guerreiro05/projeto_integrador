"use client";

import { useEffect, useState, useRef, use } from "react";
import { useParams } from "next/navigation"; // Hook para pegar os parâmetros na URL
import Avaliacoes from "./components/page";

function Local() {
    const params = useParams(); // Obtém os parâmetros da URL
    const id_local = params.id; // Pegando o ID do local

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
    
    useEffect(() => {
        const encontrado = locais.find(i => i.id == id_local);
        if (encontrado) {
            alteraLocal(encontrado);
        }
    }, [id_local, locais]); // Atualiza quando o ID mudar

    const minhaDivRef = useRef(null);

    // Função para rolar até a div
    const rolarParaDiv = () => {
        if (minhaDivRef.current) {
            minhaDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!local) {
        return <p>Carregando...</p>;
    }

    return ( 
        <main>
            {/* Container geral */}
            <div className="layout-container p-3 rounded-lg bg-white">
                
                {/* Divisão conteudo principal/lateral */}
                <div className="flex">
                    {/* Divisão Principal */}
                    <section>
                        {/* Seção principal do produto */}
                        <div className="flex">
                    
                            {/* Galeria de imagens */}
                            <div className="p-3 max-w-24">
                                {local.imagem_pri != "" && <img className="max-w-24 border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagem_pri} />}

                                {local.imagem_seg != "" && <img className="max-w-24 border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagem_seg} />}

                                {local.imagem_ter != "" && <img className="max-w-24 border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagem_ter}/>}
                            </div>

                            {/* Imagem principal */}
                            <div className="p-3">
                                <img className="max-w-full rounded-md border-gray-300 border-solid border hover:border-black" src={local.imagem_pri} />
                            </div>
                            
                            {/* Seção de informações do produto */}
                            <div className="max-w-64 p-3">
                                <h2>{local.nome_local}</h2>
                                <h2>Quadra Society 25x15m Gramado Sintético - Iluminada |
                                    <br /> Ideal Para Futebol, Treinos e Eventos
                                </h2>
                                <p>⭐ {local.avaliacoes}</p>
                                <p>R$ {local.preco} <span>🏷️ {local.desconto} OFF</span></p>
                                <p>em até <strong>12x R$ 17,99</strong></p>
                                <a onClick={rolarParaDiv}>Ver os meios de pagamento</a>
                            </div>
                        </div>

                        {/* Caracteristicas do produto */}
                        <div className="px-3">

                            <hr/>

                            <h2>Informações - {local.nome_local}</h2>

                            {/* Div centralizadora */}
                            <div className="flex">
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
                    
                            <hr/>
                        </div>

                        {/* Avaliações geral */}
                        <div className="px-3 flex">
                            <div className="p-3 h-full bg-blue-300 w-80">
                                <h2>Opiniões do local</h2>
                                    <div className="flex">
                                        <h2>{local.avaliacoes}</h2>
                                        <p>⭐⭐⭐⭐</p>
                                    </div>
                                <hr/>
                                <hr/>
                                <hr/>
                                <hr/>
                            </div>

                            {/* Avaliações dos clientes */}
                            <div className="w-full">
                                {
                                    locais.map((i, index)=> {
                                        if(index < 5) {
                                            return <Avaliacoes key={i.id} id={i.id} imagem={i.imagem_quarta} nome={i.nome} comentario={i.comentario}/>
                                        }})
                                }
                            </div>
                            
                        </div>
                        
                    </section>


                    {/* Divisão lateral */}
                    <section className="max-w-64">
                        {/* Seção de pagamento */}
                        <div className="p-3 mt-1 border-gray-300 borda-fina m-3 flex flex-col ">
                            <small>Disponibilidade:</small>
                            <p>{local.disponibilidade}</p>
                            <button className="p-1 mt-auto">Alugar agora</button>
                            <br/>
                            <button className="p-1">Ver datas disponiveis</button>
                        </div>
                        {/* Meios de pagamento */}
                        <div className="p-3 mt-1 border-gray-300 borda-fina m-3 flex flex-col ">
                            <h2>Meios de pagamento</h2>
                            <div className="">
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
            </div>
        </main>
     );
}

export default Local;