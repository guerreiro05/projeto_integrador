'use client'

import { useState } from "react";
import Usuario from "./components/usuario";

export default function Cadastro() {
  const [nome, alteraNome] = useState("");
  const [sobrenome, alteraSobrenome] = useState("");
  const [idade, alteraIdade] = useState("");
  const [cpf, alteraCpf] = useState("");
  const [senha, alteraSenha] = useState("");
  const [confirmaSenha, alteraConfirmaSenha] = useState("");
  const [erro, alteraErro] = useState("");

  function validarCampos() {
    if (senha.length < 8) {
      alteraErro("A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
    if (senha !== confirmaSenha) {
      alteraErro("As senhas digitadas não coincidem.");
      return false;
    }
    alteraErro("");
    return true;
  }

  function salvar() {
    if (!validarCampos()) return;

    console.log(`Nome: ${nome}\nSobrenome: ${sobrenome}\nIdade: ${idade}\nCPF: ${cpf}\nSenha: ${senha}`);
  
  }

  return (
    <div>
      <div className="p-2 rounded bg-green-700 text-white">
        <h1>Cadastro de Usuário</h1>
        <p>Preencha os campos abaixo para se cadastrar.</p>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-[#00f2fe] bg-green-500">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">Cadastre-se</h2>

          {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Nome" 
            value={nome} 
            onChange={(e) => alteraNome(e.target.value)}/>
          
          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Sobrenome" 
            value={sobrenome} 
            onChange={(e) => alteraSobrenome(e.target.value)}/>
          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Idade" 
            type="number" 
            value={idade} 
            onChange={(e) => alteraIdade(e.target.value)}/>
          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="CPF" 
            value={cpf} 
            onChange={(e) => alteraCpf(e.target.value)}/>
          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Senha" 
            type="password" 
            value={senha} 
            onChange={(e) => alteraSenha(e.target.value)} />
          <input 
            className="p-2 mb-4 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Confirme a Senha" 
            type="password" 
            value={confirmaSenha} 
            onChange={(e) => alteraConfirmaSenha(e.target.value)}/>

          <button 
            className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24"
            onClick={salvar}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
