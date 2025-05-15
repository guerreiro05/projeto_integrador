'use client'

import  React, { useState } from "react";
import Link from "next/link";


export default function Cadastro() {
 
  // const [nome, alteraNome] = useState("");
  // const [sobrenome, alteraSobrenome] = useState("");
  // const [idade, alteraIdade] = useState("");
  // const [cpf, alteraCpf] = useState("");
  // const [senha, alteraSenha] = useState("");

  const [confirmaSenha, alteraConfirmaSenha] = useState("");
  const [erro, alteraErro] = useState("");

  
  const [usuario, alteraUsuario] = useState({
    nome: "",
    nascimento: "",  
    email: "",
    cpf: "",
    senha: "",
  });

  function validarCampos() {
    if (usuario.senha.length < 8) {
      alteraErro("A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
    if (usuario.senha !== confirmaSenha) {
      alteraErro("As senhas digitadas não coincidem.");
      return false;
    }
    
    alteraErro("");
    return true;
  }

  function salvar  ()  {
    if (!validarCampos()) return;

    console.log(`Nome: ${usuario.nome}\nSobrenome: ${usuario.sobrenome}\nIdade: ${usuario.idade}\nCPF: ${usuario.cpf}\nSenha: ${usuario.senha}`);
    alert("Usuário cadastrado com sucesso!");
  }

  return (
    <div>
      <div className="p-2 rounded bg-green-700 text-white">
        <h1>Cadastro de Usuário</h1>
        <p>Preencha os campos abaixo para se cadastrar.</p>
      </div>

    
     <div className="flex justify-center items-center min-h-screen bg-green-500">   
        <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">Cadastre-se</h2>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Nome" 
            value={usuario.nome} 
            onChange={(e) => alteraUsuario({ ...usuario, nome: e.target.value })}/>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Sobrenome" 
            value={usuario.sobrenome} 
            onChange={(e) => alteraUsuario({ ...usuario, sobrenome: e.target.value })}/>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Data de nascimento" 
            type="date" 
            value={usuario.idade} 
            onChange={(e) => alteraUsuario({ ...usuario, idade: e.target.value })}/>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="E-mail" 
            type="email" 
            value={usuario.email} 
            onChange={(e) => alteraUsuario({ ...usuario, email: e.target.value })}/>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="CPF" 
            value={usuario.cpf} 
            onChange={(e) => alteraUsuario({ ...usuario, cpf: e.target.value })}/>

          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Senha" 
            type="password" 
            value={usuario.senha} 
            onChange={(e) => alteraUsuario({ ...usuario, senha: e.target.value })}/>

          <input 
            className="p-2 mb-4 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="Confirme a Senha" 
            type="password" 
            value={confirmaSenha} 
            onChange={(e) => alteraConfirmaSenha(e.target.value)}/>

          {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

          <div className="flex items-center my-2">
            <input
                id="link-checkbox" type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="link-checkbox" className="ml-2 text-sm text-gray-900">
                Eu concordo com os {''}
                <a href="#" className="text-blue-600 hover:underline">
                termos e condições
                </a>.
            </label>
          </div>

          <Link href="/login">
          <button 
            className="bg-gray-600 text-white my-2 p-2 rounded-full hover:bg-gray-700 w-24"
            onClick={salvar}>
            Cadastrar
          </button>  
              </Link>
        </div>
      </div>
    </div>
  );
}
