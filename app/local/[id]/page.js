"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hook para pegar os parâmetros na URL
import axios from "axios";
import host from "@/app/lib/host";

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
    <main className="layout-container flex h-[540px] p-3 rounded-lg bg-white">          
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
            
            <div className="p-3 mt-1 border-gray-300 borda-fina m-3  flex flex-col ">

                <div className="max-w-64 p-3">
                    <h2>{local.nomeLocal}</h2>
                    
                    <p>⭐ {local.avaliacoes}</p>
                    <p>R$ {local.preco}</p>
                    <p>em até <strong>12x R$ 17,99</strong></p>
                
                    <input type="date" onChange={e=> alteraData(e.target.value)} />
                    <input type="time" onChange={e=> alteraHora(e.target.value)}/>

                    <button onClick={() => {alugar()}}>Alugar</button>

                </div>
            </div>

            <div>
                <h3 className="ml-10">Estrutura Inclui:</h3>
                
                <ul className="list-none rounded-lg flex-wrap ">
                    <li className="barraCinza rounded-t-lg">Iluminação:{local.iluminacao ? "Sim" : "Não"} </li>
                    <li className="barraBranca">Vestiário: {local.vestiario ? "Sim" : "Não"}</li>
                    <li className="barraCinza">Bebedouro: {local.bebedouro ? "Sim" : "Não"}</li>
                    <li className="barraBranca">Estacionamento: {local.estacionamento ? "Sim" : "Não"}</li>
                    <li className="barraCinza">Arquibancada: {local.arquibancada ? "Sim" : "Não"}</li>
                    <li className="barraBranca">Cobertura: {local.coberta ? "Sim" : "Não"}</li>
                    <li className="barraCinza rounded-b-lg">Acessibilidade:{local.acessibilidade ? "Sim" : "Não"}</li>
                    <li className="barraBranca">Wifi: {local.wifi ? "Sim" : "Não"}</li>
                </ul>
            </div>
        </section>                                       
    </main>
     );
}

export default Local;