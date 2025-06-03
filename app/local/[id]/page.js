"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hook para pegar os parâmetros na URL
import axios from "axios";
import host from "@/app/lib/host";
import Estrelas from "@/app/components/Estrelas";
import { buscarAvaliacao } from "@/app/services/AvaliacaoService";

function Local() {

    const params = useParams(); // Obtém os parâmetros da URL
    const id_local = params.id; // Pegando o ID do local

    const [imagemSelecionada, setImagemSelecionada] = useState("");
    const [avaliacao, setAvaliacao] = useState({ media: 0, total: 0 });

    const [local, alteraLocal] = useState({});
    const [data, alteraData] = useState("");
    const [hora, alteraHora] = useState("");
    
    async function buscaLocais(){
        const response = await axios.get(host+"/quadras/"+id_local)
        console.log(response.data)
        alteraLocal(response.data)

        // 👉 Atualiza a imagem principal assim que buscar os dados
        setImagemSelecionada(response.data.imagemPrincipal);
    }

    useEffect(() => {
        buscarAvaliacao(id_local)
            .then(res => setAvaliacao(res))
            .catch(err => console.log(err));
    }, [id_local]);

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

        try {
            const response = await axios.post(host + "/locacoes/", obj)
            window.open("https://wa.me/5511999999999", "_blank")
        } catch (e) {
            alert("Dados inválidos...")
        }
        
        alert("Quadra alugada com sucesso!")
    }

return ( 
    <main className="layout-container p-4 rounded-lg bg-white">          
        <section className="flex">
            {/* Galeria de imagens */}
            <div className="p-3 max-w-[100px] flex flex-col gap-2">
                {local.imagemPrincipal !== "" && (
                    <img
                        className="max-w-24 border border-gray-300 rounded-md hover:border-black cursor-pointer"
                        src={local.imagemPrincipal}
                        onClick={() => setImagemSelecionada(local.imagemPrincipal)}
                    />
                )}
                
                {local.imagemPri !== "" && (
                    <img
                        className="max-w-24 border border-gray-300 rounded-md hover:border-black cursor-pointer"
                        src={local.imagemPri}
                        onClick={() => setImagemSelecionada(local.imagemPri)}
                    />
                )}

                {local.imagemSeg !== "" && (
                    <img
                        className="max-w-24 border border-gray-300 rounded-md hover:border-black cursor-pointer"
                        src={local.imagemSeg}
                        onClick={() => setImagemSelecionada(local.imagemSeg)}
                    />
                )}

                {local.imagemTer !== "" && (
                    <img
                        className="max-w-24 border border-gray-300 rounded-md hover:border-black cursor-pointer"
                        src={local.imagemTer}
                        onClick={() => setImagemSelecionada(local.imagemTer)}
                    />
                )}
            </div>

            {/* Imagem principal */}
            <div className="p-3">
                <img
                    className="max-w-[450px] rounded-md border border-gray-300 hover:border-black"
                    src={imagemSelecionada}
                />
            </div>
            
            <div className="p-4 border border-gray-300 rounded-lg shadow-md m-3 flex flex-col w-64">

                <Estrelas media={avaliacao.media} total={avaliacao.total} />


                <h2 className="text-textMain font-bold"> {local.nomeLocal}</h2>
                
                <p className="text-textMain mt-0"> Quadra de {local.tipoQuadra}</p>

                <p className="font-bold text-primary text-3xl m-0">
                    R$ {local.preco * 0.9}
                    <span className="text-textSecondary line-through text-base ml-2">
                        R$ {local.preco}
                    </span>
                </p>

                <p className="text-textMain">📍 Localização: {local.localizacao}</p>

                <p className="text-textMain">🗓️ Escolha a data e o horário:</p>
                
                <input type="date" onChange={e => alteraData(e.target.value)} className="border-divider p-2"/>

                <input type="time" onChange={e => alteraHora(e.target.value)} className="border-divider p-2 my-4"/>

                <button className="bg-primary hover:bg-primaryDark text-white p-2 border-divider" onClick={() =>alugar()}>Alugar</button>

                <p className="text-sm">Após alugar</p>
            </div>


            <div className="rounded-lg p-4 shadow-md m-3 w-64">
                <h3 className="text-textMain font-bold mb-3">✨ Estrutura Inclui:</h3>

                <div className="space-y-2">

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">💡 Iluminação</span>
                        <span className="font-semibold">{local.iluminacao ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">🚿 Vestiário</span>
                        <span className="font-semibold">{local.vestiario ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">🚰 Bebedouro</span>
                        <span className="font-semibold">{local.bebedouro ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">🅿️ Estacionamento</span>
                        <span className="font-semibold">{local.estacionamento ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">🎯 Arquibancada</span>
                        <span className="font-semibold">{local.arquibancada ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">🏟️ Cobertura</span>
                        <span className="font-semibold">{local.coberta ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-textMain">♿ Acessibilidade</span>
                        <span className="font-semibold">{local.acessibilidade ? "Sim" : "Não"}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-textMain">📶 Wifi</span>
                        <span className="font-semibold">{local.wifi ? "Sim" : "Não"}</span>
                    </div>
                </div>
            </div>
        </section> 
    </main>
     );
}

export default Local;