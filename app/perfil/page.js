'use client'

export default Teste;

import axios from "axios";
import { useState } from "react";

function Teste() { // É preciso instalar o pacote "axios", ele quem vai fazer a ligação do Beckend e Frontend

    const [ dados, alteraDados] = useState("")

    async function testar(){ // Toda função que demorar para receber uma resposta coloque "await" e "async", porque ai o site consegue carregar inteiro e depois essa função, caso contrario o site todo não carregar até todas as informações chegarem
        const response = await axios.get("http://localhost:4000/usuarios");
        console.log(response);

        alteraDados(response.data[0]);
    }

    return ( 
        <main>
            <div className="layout-container bg-white text-center p-1 rounded-md">
                <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
                    <h1 className="text-xl font-bold mb-4">Perfil do Usuário</h1>

                    <div className="mb-2">
                        <p className="font-semibold">Nome:</p>
                        <p>Gabriel Dias</p>
                    </div>

                    <div className="mb-2">
                        <p className="font-semibold">Email:</p>
                        <p>gabriel@email.com</p>
                    </div>

                    <div className="mb-4">
                        <p className="font-semibold">CPF:</p>
                        <p>123.456.789-00</p>
                    </div>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Quadras que já aluguei</h2>
                    {/* Você pode renderizar a lista de quadras aqui futuramente */}
                    <div className="bg-gray-100 p-2 rounded">
                        <p>Nenhuma quadra alugada ainda.</p>
                </div>
            </div>
                <h1>Teste</h1>
                <button onClick={()=>testar()}>Testar a API</button>
                <p>Resultado é: {dados.nome}</p>
                <p>Resultado é: {dados.criado_em}</p>
                <p>Resultado é: {dados.email}</p>
                <p>Resultado é: {dados.cpf}</p>
            </div>
        </main>
     );
}
