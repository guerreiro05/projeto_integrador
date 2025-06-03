'use client'

import { useEffect, useState } from "react";
import Quadras from "../components/Quadras";
import axios from "axios";
import host from "../lib/host";

function Categoria() {

    const [ locais, alteraLocais ] = useState([]);
    const [ filtros, setFiltros ] = useState({
        tipoQuadra: "",
        vestiario: false,
        bebedouro: false,
        estacionamento: false,
        arquibancada: false,
        coberta: false,
        acessibilidade: false,
        wifi: false,
        preco_min: 100,
        preco_max: 300,
      });

      async function buscaLocais() {
        let url = host+"/quadras?";
        let params = "";
      
        if (filtros.vestiario) params += "vestiario=1&";
        if (filtros.bebedouro) params += "bebedouro=1&";
        if (filtros.estacionamento) params += "estacionamento=1&";
        if (filtros.arquibancada) params += "arquibancada=1&";
        if (filtros.coberta) params += "coberta=1&";
        if (filtros.acessibilidade) params += "acessibilidade=1&";
        if (filtros.wifi) params += "wifi=1&";
      
        if (filtros.tipoQuadra) params += `tipo_quadra=${filtros.tipoQuadra}&`;
      
        params += `preco_min=${filtros.preco_min}&`;
        params += `preco_max=${filtros.preco_max}`;
      
        const urlFinal = url + params;
      
        const response = await axios.get(urlFinal);
        alteraLocais(response.data);
    }   

    useEffect(()=>{
        buscaLocais()
    },[filtros])

    return ( 
        <main className="layout-container pt-4 h-[1000px] flex bg-white rounded-md">
            <div className="ml-5 p-10 max-w-[190px]">

                <h3 className="mb-4 text-textMain font-bold">
                    Selecione suas preferências
                </h3>

                <label className="flex flex-col text-sm text-gray-700 mb-4">
                    <select
                        className="border border-gray-300 rounded p-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filtros.tipoQuadra}
                        onChange={(e) => setFiltros({ ...filtros, tipoQuadra: e.target.value })}
                    >
                        <option value="">Filtre por esporte</option>
                        <option value="basquete">Basquete</option>
                        <option value="futsal">Futsal</option>
                        <option value="tenis">Tênis</option>
                        <option value="volei">Vôlei</option>
                    </select>
                </label>

                <label className="flex items-center justify-between">
                    Vestiário
                <input
                    type="checkbox"
                    name="vestiario"
                    checked={filtros.vestiario}
                    onChange={(e) =>
                    setFiltros({ ...filtros, vestiario: e.target.checked })
                    }
                    className="w-4 h-4 ml-2"
                />
                </label>

                <label className="flex items-center justify-between">
                Bebedouro
                <input
                    type="checkbox"
                    name="bebedouro"
                    checked={filtros.bebedouro}
                    onChange={(e) =>
                        setFiltros({ ...filtros, bebedouro: e.target.checked })
                    }
                    className="w-4 h-4 ml-2"
                />
                </label>

                <label className="flex items-center justify-between">
                Estacionamento
                <input
                    type="checkbox"
                    name="estacionamento"
                    checked={filtros.estacionamento}
                    onChange={(e) =>
                        setFiltros({ ...filtros, estacionamento: e.target.checked })
                    }
                    className="w-4 h-4 ml-2"
                />
                </label>

                <label className="flex items-center justify-between">
                    Arquibancada
                    <input 
                        type="checkbox" 
                        name="arquibancada" 
                        checked={filtros.arquibancada}
                        onChange={(e) =>
                            setFiltros({ ...filtros, arquibancada: e.target.checked })
                        }
                        className="w-4 h-4 ml-2"/>
                </label>

                <label className="flex items-center justify-between">
                    Cobertura
                    <input 
                        type="checkbox"
                        name="coberta" 
                        checked={filtros.coberta}
                        onChange={(e) =>
                            setFiltros({ ...filtros, coberta: e.target.checked })    
                        }
                        className="w-4 h-4 ml-2"/>
                </label>

                <label className="flex items-center justify-between">
                    Acessibilidade
                    <input 
                        type="checkbox" 
                        name="acessibilidade" 
                        checked={filtros.acessibilidade}
                        onChange={(e) =>
                            setFiltros({ ...filtros, acessibilidade: e.target.checked })
                        }
                        className="w-4 h-4 ml-2"/>
                </label>

                <label className="flex items-center justify-between">
                    Wifi
                    <input 
                        type="checkbox"
                        name="acessibilidade" 
                        checked={filtros.wifi}
                        onChange={(e) =>
                            setFiltros({ ...filtros, wifi: e.target.checked })
                        }
                        className="w-4 h-4 ml-2"/>
                </label>

                <div className="fixed-relative p-2 flex items-center gap-4">
                    {/* Preço Mínimo */}
                    <label className="flex flex-col text-sm text-gray-700">
                        Mínimo
                        <input
                        type="number"
                        min="0"
                        className="border border-gray-300 rounded max-w-[50px] p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filtros.preco_min}
                        onChange={(e) =>
                            setFiltros({
                            ...filtros,
                            preco_min: Number(e.target.value),
                            })
                        }
                        />
                    </label>

                    {/* Preço Máximo */}
                    <label className="flex flex-col text-sm text-gray-700">
                        Máximo
                        <input
                        type="number"
                        min="0"
                        className="border border-gray-300 rounded max-w-[50px] p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filtros.preco_max}
                        onChange={(e) =>
                            setFiltros({
                            ...filtros,
                            preco_max: Number(e.target.value),
                            })
                        }
                        />
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full rounded-lg">
                {
                locais.map((i, index) => {
                    if (index < 6) {
                        return (
                            <div key={index} className="flex m-4 max-h-[450px]">
                                <Quadras
                                    id={i.id}
                                    imagem={i.imagemPri}
                                    nomeLocal={i.nomeLocal}
                                    tipoQuadra={i.tipoQuadra}
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
        </main>
     );
}

export default Categoria;