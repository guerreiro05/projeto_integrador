"use client";

import { useEffect, useState, useRef, use } from "react";
import { useParams } from "next/navigation"; // Hook para pegar os parâmetros na URL

function Local() {
    const params = useParams(); // Obtém os parâmetros da URL
    const id_local = params.id; // Pegando o ID do local

    const [local, alteraLocal] = useState({});
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
        wi_fi: "Não",
        comentario: "Excelente local muito bom mesmo!"
    },
    {
        id: 2,
        imagem_principal: "/imagens/quadra_descoberta.jpg",
        nome: "Quadra Poliesportiva Coberta",
        imagem_primeira: "/imagens/quadra_descoberta.jpg",
        imagem_secunda: "/imagens/quadra_descoberta.jpg",
        imagem_terceira: "/imagens/quadra_descoberta.jpg",
        imagem_quarta: "/imagens/quadra_descoberta.jpg",
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
        wi_fi: "Sim",
        comentario: "Excelente local muito bom mesmo!"
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
        wi_fi: "Sim",
        comentario: "Excelente local muito bom mesmo!"
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
        wi_fi: "Não",
        comentario: "Excelente local muito bom mesmo!"
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
        wi_fi: "Sim",
        comentario: "Excelente local muito bom mesmo!"
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
                            <div className="p-3">
                                <img className="max-w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_primeira} />
                                <br />
                                <img className="max-w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_secunda} />
                                <br />
                                <img className="max-w-24 border-solid border-2 rounded-md hover:border-gray-300" src={local.imagem_terceira} />
                                <br />
                            </div>

                            {/* Imagem principal */}
                            <div className="p-3">
                                <img className="max-w-full rounded-md border-solid border-2 hover:border-gray-300" src={local.imagem_principal} />
                            </div>
                            
                            {/* Seção de informações do produto */}
                            <div className="max-w-64 p-3">
                                <h2>{local.nome}</h2>
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
                        <div className="p-3">

                            <hr/>

                            <h2>Informações - {local.nome}</h2>

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

                            {/* Avaliações do clientes */}
                            <div ref={minhaDivRef}>

                                <h2>Opiniões do local</h2>
                            
                                <div className="flex">
                                    <div className="w-64 p-3 bg-blue-300">
                                        <div className="flex">
                                            <h2>{local.avaliacoes}</h2>
                                            <p>⭐⭐⭐⭐</p>
                                        </div>

                                        <hr/>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                    </div>
                            
                                    <div className="w-full p-3 bg-yellow-300">

                                        <div className="flex justify-between">
                                            <p>{local.nome}</p>
                                            {/* Data de criação */}
                                            <p>26/12/2024</p>
                                        </div>
                                        
                                        {/* Imagem do usuario */}
                                        <img className="max-w-24" src={local.imagem_quarta}/> 

                                        <p>{local.comentario}</p>
                                    </div>
                                </div>
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