'use client'

import { useEffect, useState } from "react";

import Cadastro from "../cadastro/page";
import Link from "next/link";
import axios from "axios";
import host from "../lib/host";

export default function Login() {
  
  
  const [cpf, alteraCpf] = useState("");
  const [senha, alteraSenha] = useState("");
  
  const [usuario, alteraUsuario] = useState([]);

  async function buscaUsuario(){
    const res = await axios.get(host+"/usuarios")
    console.log(res.data)
    alteraUsuario(res.data)
  }

  useEffect(()=>{

    if(localStorage.getItem("usuario") == null) return

    const user = JSON.parse( localStorage.getItem("usuario")  )

    if(user.id != undefined)
      window.location.href = '/'
    
    buscaUsuario()
  } , [])


  const [erro, alteraErro] = useState("");
  
  function validarCampos() {
    if (!cpf || !senha) {
      alteraErro("É necessário preencher todos os campos.");
      return false;
    }
    if (senha.length < 8) {
      alteraErro("A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
    
    alteraErro("");
    return true;
  }
  
  async function logar() {
    if (!validarCampos()) return;
    
    const obj = {
      cpf: cpf,
      senha: senha
    }

    try {    
      const res = await axios.post(host+"/autenticar",obj)
      console.log(res)
      
      if (!res.data || !res.data.id) {
        alteraErro("CPF ou senha incorretos.");
        return;
    }

      localStorage.setItem("usuario", JSON.stringify(res.data))
      window.location.href = "/"

    } catch(error) {
      console.error("Erro na requisição:", error);
      if (error.response) {
        // Erro vindo do backend
        alteraErro(error.response.data.message || "Erro ao conectar, tente novamente.");
      } else {
        // Erro de rede ou servidor offline
        alteraErro("Servidor indisponível no momento.");
      }
    }
  }
  
  return (
    <main className="layout-container h-[560px] flex justify-center items-center bg-white text-center p-1 rounded-md">
    
          <div className="p-6 rounded-lg w-80 shadow-lg">

              <h2 className="text-center  text-2xl font-semibold mb-6">Bem-vindo a PlayFut</h2>
              <h3 className="text-center  text-lg mb-4">Faça seu login:</h3>

              <input 
                className="p-2 mb-2 rounded placeholder-black w-72" 
                placeholder="CPF" 
                value={cpf} 
                onChange={(e) => alteraCpf(e.target.value)} />

              <input 
                className="p-2 mb-4 rounded placeholder-black w-72" 
                placeholder="Senha" 
                type="password" 
                value={senha} 
                onChange={(e) => alteraSenha(e.target.value)} />

              {erro && (
                <div className="text-red-500 text-sm mb-2">
                  {erro}
                </div>
              )}

              <button 
                className="bg-green-600 p-2 w-full hover:bg-gray-700"
                onClick={()=> logar()}>
                Logar
              </button>

              <hr/>

              <Link href="/cadastro">
                <button 
                  className="w-full transition-colors duration-100 p-2 hover:bg-gray-300 border-none"
                  onClick={Cadastro}>
                  Criar conta
                </button>
              </Link>      
          </div>
    </main>
  );
}
