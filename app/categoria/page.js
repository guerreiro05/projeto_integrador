'use client'

import { useEffect, useState } from "react";

import Quadras from "../components/Quadras";
import axios from "axios";

function Categoria() {

    const [ locais, alteraLocais ] = useState([ ]);

    async function buscaLocais(){
        const response = await axios.get("http://localhost:4000/quadras?estacionamento=true&preco_min=100&preco_max=300")
        console.log(response.data)
        alteraLocais(response.data)
    }

    useEffect(()=>{
        buscaLocais()
    },[])

    return ( 
        <main className="">
            <div className="layout-container text-center flex bg-red-300">

                <div className="p-10 bg-green-300 justify-between">

                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Escolhar o tipo de quadra</h3>

                    <label className="flex items-center justify-between">
                        Vestiário
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Bebedouro
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Estacionamento
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Arquibancada
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Cobertura
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Acessibilidade
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                    <label className="flex items-center justify-between">
                        Wifi
                        <input type="checkbox"name="acessibilidade" className="w-4 h-4 mr-2"/>
                    </label>
                </div>

                <div className="flex flex-wrap justify-center items-center h-screen gap-">
                    {
                    locais.map((i, index) => {
                        if (index < 4) {
                            return (
                                <div key={index} className="w-[22%] min-w-[200px] bg-red-600">
                                    <Quadras
                                        id={i.id}
                                        imagem={i.imagem_principal}
                                        nome={i.nome_local}
                                        preco={i.preco}
                                        estacionamento={i.estacionamento}
                                    />
                                </div>
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