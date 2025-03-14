'use client'

export default Teste;

import axios from "axios";
import { useState } from "react";

function Teste() { // É preciso instalar o pacote "axios", ele quem vai fazer a ligação do Beckend e Frontend

    const [ dados, alteraDados] = useState("")

    async function testar(){ // Toda função que demorar para receber uma resposta coloque "await" e "async", porque ai o site consegue carregar inteiro e depois essa função, caso contrario o site todo não carregar até todas as informações chegarem
        const response = await axios.get("http://localhost:3001/usuario");
        console.log(response);

        alteraDados(response.data[0]);
    }

    return ( 
        <main>
            <div className="layout-container">
                <div>
                    
                </div>
                <h1>Teste</h1>
                <button onClick={()=>testar()}>Testar a API</button>
                <p>Resultado é: {dados.nome}</p>
                <p>Resultado é: {dados.nascimento}</p>
                <p>Resultado é: {dados.email}</p>
                <p>Resultado é: {dados.cpf}</p>
            </div>
        </main>
     );
}
