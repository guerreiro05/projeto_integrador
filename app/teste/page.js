'use client'

export default Teste;

import axios from "axios";

function Teste() { // É preciso instalar o pacote "axios", ele quem vai fazer a ligação do Beckend e Frontend

    async function testar(){ // Toda função que demorar para receber uma resposta coloque "await" e "async", porque ai o site consegue carregar inteiro e depois essa função, caso contrario o site todo não carregar até todas as informações chegarem
        const response = await axios.get("http://localhost:3001/mensagem");
        console.log(response);
    }

    return ( 
        <div>
            <h1>Teste</h1>

            <button onClick={()=>testar()}>Testar a API</button>
        </div>
     );
}
