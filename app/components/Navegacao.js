'use client'

import { useState } from "react";

export default Navegacao

function Navegacao() {

    const redirecionarParaLogin = () => {
        alteraExibirCampoCep(false)
        if (typeof window !== "undefined") {
          window.location.href = "login/";
        }
    };

    const [ exibirCampoCep, alteraExibirCampoCep ] = useState(false);

    return ( 
    <main>
        <nav>
            <ul className="bg-green-700 p-1 text-white flex justify-between list-none m-0 mb-5">
                <p onClick={()=> alteraExibirCampoCep(true)}>Informe seu CEP</p>
                <li>Todas as categorias</li>
                <li>Planos e Pacotes</li>
                <li>Eventos e Torneios</li>
                <li>Primeira Partida Grátis</li>
                <li>Anuncie sua Quadra</li>
                <div className="flex">
                    <li onClick={()=> window.location.href="cadastro/"} className="cursor-pointer">Crie sua conta</li>
                    <li onClick={()=> window.location.href="login/"}className="cursor-pointer ml-5 mr-5">Entre</li>
                </div>
            </ul>
        </nav>

        { 
      exibirCampoCep == true &&
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-[350px] h-[300px] rounded-lg items-center justify-center flex p-4 bg-white">
            <div className="text-center">

              <button onClick={()=> alteraExibirCampoCep(false)} className="flex justify-start cursor-pointer text-xl bg-white border-none">
                ✖
              </button>

              <p>Inseira seu CEP para encontrar quadras perto de você!</p>

              <form action="#">
                <div><input pattern="^\d{5}-\d{3}$" required className="border-2 p-3 w-64" placeholder="Digite seu CEP"/></div>
                <br/>
                <button className="rounded-xs w-64 p-3">continuar</button>
              </form>

              <p>Já tem conta?</p>
              <button className="hover:bg-gray-300 rounded-xs p-3 w-64" onClick={redirecionarParaLogin}>
                Fazer Login
              </button>
            </div>
          </div>
        </div>
        }
    </main>
    );
}
