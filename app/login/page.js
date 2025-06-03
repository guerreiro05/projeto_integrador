'use client'

import { useEffect, useState } from "react";

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
    <main className="layout-container min-h-[500px] flex justify-center items-center bg-white text-center p-1 rounded-md">
    
      <div className="p-6 rounded-lg w-80 shadow-lg">

        <h2 className="text-center text-textMain font-bold">Bem-vindo a PlayFute</h2>
        <h3 className="text-center text-textMain font-bold">Faça seu login:</h3>

        <input 
          className="p-2 mb-2 border-divider text-textSecondary w-48" 
          placeholder="Digite seu CPF" 
          value={cpf} 
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 9) {
              value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
            } else if (value.length > 6) {
              value = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
            } else if (value.length > 3) {
              value = value.replace(/(\d{3})(\d+)/, "$1.$2");
            }
          
          alteraCpf(value)
          }} 
        />

        <input 
          className="p-2 mb-4 border-divider roundedtext-textSecondaryx w-48" 
          placeholder="Digite sua senha" 
          type="password" 
          value={senha} 
          onChange={(e) => alteraSenha(e.target.value)} />

        {erro && (
          <div className="text-red-500 text-sm mb-2">
            {erro}
          </div>
        )}

        <button 
          className="bg-primary hover:bg-primaryDark text-white border-divider p-2 w-full mb-4"
          onClick={()=> logar()}>
          Logar
        </button>
        
        <Link href="/cadastro" className="text-textSecondary text-sm">
          Novo por aqui? Crie uma conta
        </Link>
      </div>
    </main>
  );
}
