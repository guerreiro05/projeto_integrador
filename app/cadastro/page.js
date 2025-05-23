'use client'

import  React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";


export default function Cadastro() {
 
  const [ locais, alteraLocais ] = useState([]);

  async function buscaLocais(){
    const response = await axios.get("http://localhost:4000/usuarios")
    console.log(response.data)
    alteraLocais(response.data)
  }

  useEffect(()=>{
    buscaLocais()
  },[])

  const [confirmaSenha, alteraConfirmaSenha] = useState("");
  const [erro, alteraErro] = useState("");

  
  const [usuario, alteraUsuario] = useState({
    nome: "",
    sobrenome: "",
    idade: "",
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

async function salvar  ()  {
    if (!validarCampos()) return;

    console.log(`Nome: ${usuario.nome}\nSobrenome: ${usuario.sobrenome}\nIdade: ${usuario.idade}\nCPF: ${usuario.cpf}\nSenha: ${usuario.senha}`);

    const res= await axios.post('http://localhost:4000/usuarios', {
      nome: usuario.nome,
      nascimento: usuario.nascimento,
      email: usuario.email,
      cpf: usuario.cpf,
      senha: usuario.senha
    })

    alert("Usuário cadastrado com sucesso!");

    window.location.href = "/login";
  }

  return (
    <main className="layout-container bg-white text-center p-1 rounded-md">  

      <div className="flex justify-center items-center">  
        <form 
          className="bg-green-500 p-6 rounded-lg w-80 shadow-lg"
          onSubmit={(e) => {
          e.preventDefault();
          salvar();
          }}>

          <h1 className="text-white">Cadastro de Usuário</h1>
          <p className="text-white" >Preencha os campos abaixo para se cadastrar.</p>
          
          <input 
            required
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="Nome" 
            value={usuario.nome} 
            onChange={(e) => alteraUsuario({ ...usuario, nome: e.target.value })}/>

          <input 
            required
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="Sobrenome" 
            value={usuario.sobrenome} 
            onChange={(e) => alteraUsuario({ ...usuario, sobrenome: e.target.value })}/>
            
          <input
            required 
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="Data de Nascimento" 
            type="date" 
            value={usuario.nascimento} 
            onChange={(e) => alteraUsuario({ ...usuario, nascimento: e.target.value })}/>

          <input 
            required
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="E-mail" 
            type="email" 
            value={usuario.email} 
            onChange={(e) => alteraUsuario({ ...usuario, email: e.target.value })}/>

          <input 
            required
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="CPF" 
            value={usuario.cpf} 
            onChange={(e) => alteraUsuario({ ...usuario, cpf: e.target.value })}/>

          <input 
            required
            className="p-2 mb-2 rounded placeholder-black w-72" 
            placeholder="Senha" 
            type="password" 
            value={usuario.senha} 
            onChange={(e) => alteraUsuario({ ...usuario, senha: e.target.value })}/>

          <input 
            required
            className="p-2 mb-4 rounded placeholder-black w-72" 
            placeholder="Confirme a Senha" 
            type="password" 
            value={confirmaSenha} 
            onChange={(e) => alteraConfirmaSenha(e.target.value)}/>

          {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

          <button 
            type="submit"
            className="bg-gray-600 text-white my-2 p-2 rounded-full hover:bg-gray-700 w-24">
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
