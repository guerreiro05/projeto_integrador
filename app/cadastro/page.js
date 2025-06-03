'use client'

import  React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import host from "../lib/host";

export default function Cadastro() {
 
  const [ locais, alteraLocais ] = useState([]);

  const [ cpf, alteraCpf ] = useState("");

  async function buscaLocais(){
    try {
      const response = await axios.get(host+"/usuarios")
      console.log(response.data);
      alteraLocais(response.data);
    } catch(error) {
      console.error("Erro na busca", error);
    }
  }

  useEffect(()=>{
    buscaLocais()
  },[])

  const [confirmaSenha, alteraConfirmaSenha] = useState("");
  const [erro, alteraErro] = useState("");
  
  const [usuario, alteraUsuario] = useState({
    nome: "",
    sobrenome: "",
    nascimento: "",  
    telefone: "",
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

    if (usuario.cpf.length < 11) {
      alteraErro("CPF inválido");
      alert("CPF inválido")
      return false;
    }
    
    alteraErro("");
    return true;
  }

async function salvar  ()  {
    if (!validarCampos()) return;

    console.log(`Nome: ${usuario.nome}\nIdade: ${usuario.idade}\nCPF: ${usuario.cpf}\nSenha: ${usuario.senha}`);

    const res = await axios.post(host+'/usuarios', {
      nome: usuario.nome,
      nascimento: new Date(usuario.nascimento),
      email: usuario.email,
      telefone: usuario.telefone,
      cpf: usuario.cpf,
      senha: usuario.senha
    })

    alert("Usuário cadastrado com sucesso!");

    window.location.href = "/login";
  }

  return (
    <main className="layout-container flex justify-center items-center bg-white text-center rounded-md">  

      <form 
        className="p-6 rounded-lg my-5 w-80 shadow-lg"
        onSubmit={(e) => {
        e.preventDefault();
        salvar();
        }}>

        <h1 className="text-textMain font-bold">Cadastro de Usuário</h1>

        <p className="text-textMain font-bold" >Preencha os campos abaixo para se cadastrar.</p>
        
        <input 
          required
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Nome Completo*" 
          value={usuario.nome} 
          onChange={(e) => alteraUsuario({ ...usuario, nome: e.target.value })}/>

        <input
          required 
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Data de Nascimento*" 
          type="date" 
          value={usuario.nascimento} 
          onChange={(e) => alteraUsuario({ ...usuario, nascimento: e.target.value })}/>

        <input 
          required
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Digite seu e-mail*" 
          type="email" 
          value={usuario.email} 
          onChange={(e) => alteraUsuario({ ...usuario, email: e.target.value })}/>

        <input 
          required
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Telefone celular*" 
          type="tel"
          value={usuario.telefone} 
          onChange={(e) => {
            let value = e.target.value;

            // Remove tudo que não é número
            value = value.replace(/\D/g, '');

            // Limita a 11 dígitos
            if (value.length > 11) value = value.slice(0, 11);

            // Formata
            if (value.length > 6) {
              value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
              value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else {
              value = value.replace(/^(\d{0,2})/, '($1');
            }

            alteraUsuario({ ...usuario, telefone: value });
          }}
        />


        <input 
          type="text"
          required
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Digite seu CPF*" 
          value={usuario.cpf} 
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

            alteraUsuario({ ...usuario, cpf: value });
          }}
        />


        <input 
          required
          className="p-2 mb-2 border-divider text-textSecondary w-72" 
          placeholder="Crie sua senha*" 
          type="password" 
          value={usuario.senha} 
          onChange={(e) => alteraUsuario({ ...usuario, senha: e.target.value })}/>

        <input 
          required
          className="p-2 mb-4 border-divider text-textSecondary w-72" 
          placeholder="Confirme a Senha*" 
          type="password" 
          value={confirmaSenha} 
          onChange={(e) => alteraConfirmaSenha(e.target.value)}/>

        {
          erro && <p className="text-red-500 text-sm m-2">{erro}</p>
        }

        <button 
          type="submit"
          className="bg-primary hover:bg-primaryDark text-white mt-2 border-divider p-2 w-full mb-4">
          Cadastrar
        </button>

        <Link href="/login" className="text-textSecondary text-sm">
          Já tem conta?
        </Link>

      </form>
    </main>
  );
}
