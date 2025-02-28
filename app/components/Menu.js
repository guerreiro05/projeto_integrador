'use client'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Menu() {

    const [exibirCampoCep, alteraExibirCampoCep] = useState(false);
    
    const redirecionarParaCadastro = () => {
        alteraExibirCampoCep(false);
        router.push('/cadastro');
    };

    return ( 
    <main className="">
        <div className="bg-green-500 px-10">
            
            <div className="bg-red-300 mx-20">
                <div className="flex justify-between">
                    <img onClick={() => window.location.href="/"} className="w-24" src="/imagens/logo.jpg" alt="Logo"/>
                
                    <div className="cursor-pointer bg-white flex">
                    <input placeholder="Digite o nome da quadra" className="w-80 p-3 border-none" />
                        <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-2xl p-3"/>
                    </div>
                </div>
                {/* Navegação */}
                <nav className="layout-container">
                    <ul className="text-white flex justify-between list-none">
                        <li onClick={() => alteraExibirCampoCep(true)}>Informe seu CEP</li>
                        <li>Todas as categorias</li>
                        <li>Planos e Pacotes</li>
                        <li>Eventos e Torneios</li>
                        <li>Primeira Partida Grátis</li>
                        <li>Anuncie sua Quadra</li>
                        <div className="flex">
                            <li onClick={() => router.push('/cadastro')} className="cursor-pointer">Crie sua conta</li>
                            <li onClick={() => router.push('/login')} className="cursor-pointer ml-5 mr-5">Entre</li>
                        </div>
                    </ul>
                </nav>
                
                {
                    exibirCampoCep && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-10 flex items-center justify-center">
                        <div className="w-[350px] h-[300px] rounded-lg items-center justify-center relative flex p-4 bg-white">
                            <div className="text-center">
                                <button onClick={() => alteraExibirCampoCep(false)} className="absolute top-3 right-3  cursor-pointer text-xl bg-white border-none">
                                    ✖
                                </button>
                                <p>Insira seu CEP para encontrar quadras perto de você!</p>
                                <input
                                    type="text"
                                    placeholder="Digite seu CEP"
                                    className="border p-2 rounded"
                                    maxLength={8}
                                />
                                <p>Já tem conta?</p>
                                <button className="hover:bg-gray-300 rounded-xs p-3 w-64" >
                                    Fazer Login
                                </button>
                                <button className="hover:bg-gray-300 rounded-xs p-3 w-64" onClick={redirecionarParaCadastro}>
                                    Fazer Cadastro
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div> 
    </main>
    );
}
