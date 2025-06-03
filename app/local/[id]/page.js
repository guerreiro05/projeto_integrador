"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hook para pegar os parâmetros na URL
import axios from "axios";
import host from "@/app/lib/host";
import Estrelas from "@/app/components/Estrelas";

function Local() {

    const params = useParams(); // Obtém os parâmetros da URL
    const id_local = params.id; // Pegando o ID do local

    const [local, alteraLocal] = useState({});
    const [data, alteraData] = useState("");
    const [hora, alteraHora] = useState("");
    
    async function buscaLocais(){
        const response = await axios.get(host+"/quadras/"+id_local)
        console.log(response.data)
        alteraLocal(response.data)
    }

    useEffect(()=>{
        buscaLocais()
    },[])

    async function alugar() {

        if(data.length < 1 || hora.length < 1){
            alert("Digite corretamente a data e a hora")
            return
        }

        if(localStorage.getItem("usuario") == null){
            alert("Faça login para continuar")
            return
        }

        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario.id == null ){
            alert("Faça login para continuar")
            return
        }
        
        const idUsuario = usuario.id

        const obj = {
            id_usuario: idUsuario,
            id_quadra: local.id,
            data_hora: data+"T"+hora+":00.000Z"
        }

        try{
            const response = await axios.post(host+"/locacoes/", obj)
            window.location.href = "/pagamento"
        }catch(e){
            alert("Dados invalidos...")
        }       
    }

return ( 
    <main className="layout-container p-4 rounded-lg bg-white">          
        <section className="flex">
            {/* Galeria de imagens */}
            <div className="p-3 max-w-[100px]">
                {local.imagemPri != "" && <img className="max-w-[100px] border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagemPri} />}

                {local.imagemSeg != "" && <img className="max-w-[100px] border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagemSeg} />}

                {local.imagemTer != "" && <img className="max-w-[100px] border-solid border border-gray-300 rounded-md hover:border-black" src={local.imagemTer}/>}
            </div>

            {/* Imagem principal */}
            <div className="p-3">
                <img className="max-w-[450px] rounded-md border-gray-300 border-solid border hover:border-black" src={local.imagemPrincipal} />
            </div>
            
            <div className="p-4 border border-gray-300 rounded-lg shadow-md m-3 flex flex-col w-64">

                <Estrelas media={4.3} total={24} />

                <h2 className="text-xl font-bold mb-1"> {local.nomeLocal}</h2>
                <p className="text-gray-600"> Quadra de {local.tipoQuadra}</p>

                <p className="text-2xl text-green-600 font-semibold">R$ {local.preco}</p>

                <p className="text-gray-600">📍 Endereço: {local.localizacao}</p>

                <p>🗓️ Escolha a data e o horário:</p>
                
                <input type="date" onChange={e => alteraData(e.target.value)} className="border rounded px-3 py-2 outline-blue-500"/>

                <input type="time" onChange={e => alteraHora(e.target.value)} className="border rounded px-3 py-2 mt-4 outline-blue-500"/>
            </div>


            <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-md m-3 w-64">
                <h3 className="text-lg font-bold mb-3">✨ Estrutura Inclui:</h3>

                <div className="space-y-2">

                    <div className="flex justify-between border-b pb-2">
                        <span>💡 Iluminação</span>
                        <span className="font-semibold">{local.iluminacao ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>🚿 Vestiário</span>
                        <span className="font-semibold">{local.vestiario ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>🚰 Bebedouro</span>
                        <span className="font-semibold">{local.bebedouro ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>🅿️ Estacionamento</span>
                        <span className="font-semibold">{local.estacionamento ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>🎯 Arquibancada</span>
                        <span className="font-semibold">{local.arquibancada ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>🏟️ Cobertura</span>
                        <span className="font-semibold">{local.coberta ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>♿ Acessibilidade</span>
                        <span className="font-semibold">{local.acessibilidade ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>📶 Wifi</span>
                        <span className="font-semibold">{local.wifi ? "Sim" : "Não"}</span>
                    </div>

                    <button onClick={() =>alugar()}>Alugar</button>
                </div>
            </div>
        </section> 
    </main>
     );
}

export default Local;