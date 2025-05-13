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
                                <p>R$ {local.preco}</p>
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
                                        <li className="barraCinza rounded-t-lg">Iluminação:{local.iluminacao} </li>
                                        <li className="barraBranca">Vestiário: {local.vestiarios}</li>
                                        <li className="barraCinza">Bebedouro: {local.bebedouro}</li>
                                        <li className="barraBranca">Estacionamento: {local.estacionamento}</li>
                                        <li className="barraCinza">Arquibancada: {local.arquibancada}</li>
                                        <li className="barraBranca">Cobertura: {local.coberta}</li>
                                        <li className="barraCinza rounded-b-lg">Acessibilidade:{local.acessibilidade}</li>
                                        <li className="barraBranca">Wifi: {local.wi_fi}</li>
                                    </ul>
                                </div>
                            </div>
                    
                            <hr/>
                        </div>

                        
                    </section>


                    {/* Divisão lateral */}
                    <section className="max-w-64">
                        {/* Seção de pagamento */}
                        <div className="p-3 mt-1 border-gray-300 borda-fina m-3 h-32 flex flex-col ">
    
                            <a href="https://wa.me/5516997676179" target="_blank"> <button>Veja datas disponiveis</button></a>

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