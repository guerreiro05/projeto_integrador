'use client'

import { useEffect, useState } from "react";

import Cadastro from "../cadastro/page";
import Link from "next/link";
import axios from "axios";

export default function Login() {
  
  
  const [cpf, alteraCpf] = useState("");
  const [senha, alteraSenha] = useState("");
  
  
  const [usuario, alteraUsuario] = useState([]);

  async function buscausuario(){
    const res = await axios.get("http://localhost:4000/usuarios")
    console.log(res.data)
    alteraUsuario(res.data)
  }

  useEffect(()=>{

    if(localStorage.getItem("usuario") == null) return

    const user = JSON.parse( localStorage.getItem("usuario")  )

    if(user.id != undefined)
      window.location.href = '/'
    
    buscausuario()
  } , [])


  const [erro, alteraErro] = useState("");
  
  function validarCampos() {
    if (!cpf || !senha) {
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
  
   async function logar() {
    if (!validarCampos()) return;
    
    const obj = {
      cpf: cpf,
      senha: senha
    }
    const res = await axios.post("http://localhost:4000/autenticar",obj)
    console.log(res)
    
    if(res.data.id == null){
      alert("usuario ou senha incorretos")
      return
    }

    localStorage.setItem("usuario", JSON.stringify(res.data))
    window.location.href = "/"

  }

  // function logar() {
  //   if (!validarCampos()) return;
  //   console.log(`Cpf: ${cpf}\nSenha: ${senha}`);
    
  //   usuario.map(i => {
  //     if (i.cpf == cpf && i.senha == senha) {
  //       console.log("Usuário encontrado:", i);
  //       i.senha = "";
  //       localStorage.setItem("usuario", JSON.stringify(i));
  //       window.location.href = '/'
  //     }
  //     else {
  //        console.log("Usuário não encontrado.");
  //    }
  //   });
    

  // }
  
  return (
    <main className="layout-container h-[560px] flex justify-center items-center bg-white text-center p-1 rounded-md">
    
          <div className="bg-green-500 p-6 rounded-lg w-80 shadow-lg">

              <h2 className="text-center text-white text-2xl font-semibold mb-6">Bem-vindo ao PlayFute</h2>
              <h3 className="text-center text-white text-lg mb-4">Faça seu login:</h3>

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

              <button 
                className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24"
                onClick={()=> logar()}>
                Logar
              </button>

              <hr/>

              <Link href="/cadastro">
                <button 
                  className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24"
                  onClick={Cadastro}>
                  Cadastrar
                </button>
              </Link>
              
          </div>
    </main>
  );
}
