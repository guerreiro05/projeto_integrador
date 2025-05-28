'use client'

export default perfilUsuario;

import axios from "axios";
import { useEffect, useState } from "react";
import host from "../lib/host";
import Link from "next/link";

function perfilUsuario() { // É preciso instalar o pacote "axios", ele quem vai fazer a ligação do Beckend e Frontend

    const [ dados, alteraDados] = useState("")
    const [ quadras, setQuadras ] = useState([])
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

    async function buscaLocais(){ // Toda função que demorar para receber uma resposta coloque "await" e "async", porque ai o site consegue carregar inteiro e depois essa função, caso contrario o site todo não carregar até todas as informações chegarem
        const response = await axios.get(host+"/usuarios");
        console.log(response);
           
        alteraDados(response.data[0]);
    }

    function sair(){
        localStorage.removeItem("usuario")
        window.location.href="/"
    }

    function formatarCPF(cpf) {
    if (!cpf) return "";
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

    useEffect(()=>{
        buscaLocais()
      },[])

    useEffect(() => {
    async function carregarQuadras() {
        try {
        const res = await axios.get(`${host}/usuarios/${usuarioLogado.id}/quadras`);
        setQuadras(res.data);
        } catch (error) {
        console.error("Erro ao carregar quadras alugadas", error);
        setQuadras([]); // ou mensagem de erro
        }
    }

    if (usuarioLogado && usuarioLogado.id) {
        carregarQuadras();
    }
    }, []);

return ( 
   <main className="layout-container h-[540px] p-3 rounded-lg bg-white">
      <div className="max-w-4xl mx-auto mt-10 flex justify-around p-4 bg-white rounded shadow">

         <section className=" w-96 text-center content-center">
            <h1 className="text-xl font-bold mb-4">Perfil do Usuário</h1>

            <div className="mb-2">
                <p className="font-semibold">Nome:</p>
                <p>{dados.nome}</p>
            </div>

            <div className="mb-2">
                <p className="font-semibold">Email:</p>
                <p> {dados.email} </p>
            </div>

            <div className="mb-4">
                <p className="font-semibold">CPF:</p>
                <p>{formatarCPF(dados?.cpf)}</p>
            </div>

            <a onClick={()=>sair()} href="">Sair</a>   

         </section>
      
         <section className="p-4 rounded text-center w-[400px]">
            
         <h2 className="text-lg font-semibold ">Quadras que já aluguei</h2>

         {
            quadras.length === 0 ? (
            <div className="bg-gray-100 p-2 rounded">
               <p>Nenhuma quadra alugada ainda.</p>
            </div>
         ) : (
            quadras.map((quadra) => (

            <Link key={quadra.id} href={`/local/${quadra.id}`} className="no-underline text-inherit">
               <div key={quadra.id} className="p-2 bg-gray-100 border flex rounded mb-2">
                  <img src={quadra.imagemPrincipal} alt={quadra.nomeLocal} className="max-w-24 rounded" />
                  <div className="ml-2 w-96">
                     <div className="flex justify-between">
                        <h3>{quadra.nomeLocal}</h3>
                        <p className="mt-5">Preço: R$ {quadra.preco}</p>
                     </div>
               
                     <p className="m-0 mx-auto">Alugada: {new Date(quadra.criado_em).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                     }).replace(',',' às')}
                     </p>
                  </div>
               </div>
            </Link>
            ))
         )}
         </section>
      </div>
   </main>
   );
}
   