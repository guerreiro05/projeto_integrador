'use client'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Menu() {

    const [exibirCampoCep, alteraExibirCampoCep] = useState(false);

    return ( 
    <main>
        <div className="bg-green-500">
            
            <div className="layout-container pb-1 mb-4">


                <div className="flex justify-between">

                    <img src="/imagens/logo.jpg" onClick={() => window.location.href="/"} className="w-32" />

                    <div className="cursor-pointer items-center flex w-80">  
                        <div className="bg-white p-3 rounded-md ">
                            <input className="w-64 pb-2 outline-none border-none" placeholder="Digite o nome da quadra" />
                            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-2xl"/>
                        </div>
                    </div>
                </div>    
                
                {/* Navegação */}
                <nav>
                    <div>
                        <ul className="text-white flex justify-between list-none">
                            <li className="cursor-pointer" onClick={() => alteraExibirCampoCep(true)}>Informe seu CEP</li>
                            <li className="cursor-pointer" onClick={() => window.location.href = "categoria/"}>Todas as categorias</li>
                            <li className="cursor-pointer">Anuncie sua Quadra</li>
                        
                            <div className="flex">
                                <li onClick={() => window.location.href = "cadastro/"} className="cursor-pointer">Crie sua conta</li>
                                <li onClick={() => window.location.href = "login/"} className="cursor-pointer mx-10">Entre</li>
                            </div>
                        </ul>
                    </div>
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
                                <button onClick={() => window.location.href = "login/"} className="hover:bg-gray-300 rounded-xs p-3 w-64" >
                                    Fazer Login
                                </button>
                                <button onClick={() => window.location.href = "cadastro/"} className="hover:bg-gray-300 rounded-xs p-3 w-64">
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
