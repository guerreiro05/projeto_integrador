'use client'

export default perfilUsuario;

import axios from "axios";
import { useEffect, useState } from "react";
import host from "../lib/host";
import Link from "next/link";

function perfilUsuario() { // É preciso instalar o pacote "axios", ele quem vai fazer a ligação do Beckend e Frontend

    const [quadras, setQuadras] = useState([]);
    const [usuarioLogado, setUsuarioLogado] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem("usuario"));
        }
        return null;
    });

    // Buscar usuário no localStorage ao carregar
    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        setUsuarioLogado(usuario);
    }, []);    

    // Buscar quadras do usuário
    useEffect(() => {
        async function carregarQuadras() {
            try {
                const res = await axios.get(`${host}/usuarios/${usuarioLogado.id}/quadras`);
                setQuadras(res.data);
            } catch (error) {
                console.error("Erro ao carregar quadras alugadas", error);
                setQuadras([]);
            }
        }

        if (usuarioLogado) {
            carregarQuadras();
        }
    }, [usuarioLogado]);

    // Redirecionamento se não estiver logado
    useEffect(() => {
        if (!usuarioLogado) {
            window.location.replace("/login");
        }
    }, [usuarioLogado]);

    // Função sair
    function sair() {
        localStorage.removeItem("usuario");
        setUsuarioLogado(null);
    }

    // Formatar CPF
    function formatarCPF(cpf) {
        if (!cpf) return "";
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } 

return ( 
    <main className="layout-container h-full p-3 content-center rounded-lg bg-white">
        <div className="max-w-4xl mx-auto my-10 flex justify-around bg-white rounded shadow">

            <section className="w-96 text-center content-center">

                {usuarioLogado && (
                    <h1 className="text-xl font-bold mb-4">Bem vindo, {usuarioLogado.nome}</h1>
                )}

                {usuarioLogado && (
                    <div className="my-10">
                        <p>
                            <span className="font-semibold">E-mail:</span> {usuarioLogado.email}
                        </p>
                    </div>
                )}

                {usuarioLogado && (
                    <div className="my-5">
                        <p>
                            <span className="font-semibold">
                                CPF: 
                            </span> {formatarCPF(usuarioLogado?.cpf)}
                        </p>
                    </div>
                )}

                <a onClick={()=>sair()} href="">Sair</a>   

            </section>
        
            <section className="p-4 rounded text-center w-[400px]">
                
                <h2 className="text-lg font-semibold ">Quadras Alugadas:</h2>

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
   