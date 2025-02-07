'use client'

import { useState } from "react";
import Menu from "./componentes/Menu";

export default function Login() {
  const [username, alteraUsername] = useState("");
  const [senha, alteraSenha] = useState("");
  const [erro, alteraErro] = useState("");

  function validarCampos() {
    if (!username || !senha) {
      alteraErro("Todos os campos são obrigatórios.");
      return false;
    }
    if (senha.length < 8) {
      alteraErro("A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
    alteraErro("");
    return true;
  }

  function logar() {
    if (!validarCampos()) return;
    console.log(`Username: ${username}\nSenha: ${senha}`);
  }

  return (
    <div>

    <div className="p-2 rounded bg-green-700 text-white">
        <h1>Cadastro de Usuário</h1>
        <p>Preencha os campos abaixo para entrar.</p>
      </div>

  
   
  
<div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-500">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Bem-vindo ao PlayFute</h2>
        <h3 className="text-center text-lg mb-4">Login</h3>
     

        <input 
          className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => alteraUsername(e.target.value)} />
        <input 
          className="p-2 mb-4 rounded bg-green-700 text-white placeholder-white w-72" 
          placeholder="Senha" 
          type="password" 
          value={senha} 
          onChange={(e) => alteraSenha(e.target.value)} />

        <button 
          className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24"
          onClick={logar}>
          Logar
        </button>
      </div>
    </div>
            </div>
  );
}
