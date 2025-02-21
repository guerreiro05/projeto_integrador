'use client'

import { useState } from "react";

import Cadastro from "../cadastro/page";
import Link from "next/link";

export default function Login() {
  
  
  const [cpf, alteraCpf] = useState("");
  const [senha, alteraSenha] = useState("");
  
  
  const [usuario, alteraUsuario] = useState([{
    
      id: 0,
      nome: "Vinicius",
      sobrenome: "Rodrigues",
      dataNascimento: "1992-05-15", 
      cpf: "189230828-21",
      senha: "12345678",
      email: "vinicius@example.com" 
    },
    {
      id: 1,
      nome: "Camila",
      sobrenome: "Ferreira",
      dataNascimento: "1996-07-20",
      cpf: "321654987-12",
      senha: "senhaCamila123",
      email: "camila@example.com"
    },
    {
      id: 2,
      nome: "Gustavo",
      sobrenome: "Almeida",
      dataNascimento: "1989-02-10",
      cpf: "456123789-99",
      senha: "guga@123",
      email: "gustavo@example.com"
    },
    {
      id: 3,
      nome: "Larissa",
      sobrenome: "Mendes",
      dataNascimento: "1994-04-05",
      cpf: "874521369-44",
      senha: "larism123",
      email: "larissa@example.com"
    },
    {
      id: 4,
      nome: "Bruno",
      sobrenome: "Costa",
      dataNascimento: "1997-11-23",
      cpf: "159357248-33",
      senha: "bruno_2024",
      email: "bruno@example.com"
    },
    {
      id: 5,
      nome: "Mariana",
      sobrenome: "Souza",
      dataNascimento: "1998-06-17",
      cpf: "785412369-77",
      senha: "mari@souza",
      email: "mariana@example.com"
    },
    {
      id: 6,
      nome: "Felipe",
      sobrenome: "Martins",
      dataNascimento: "1983-09-22",
      cpf: "741852963-55",
      senha: "felipeM@r",
      email: "felipe@example.com"
    },
    {
      id: 7,
      nome: "Eduarda",
      sobrenome: "Silva",
      dataNascimento: "2002-12-10",
      cpf: "369258147-88",
      senha: "edu@silva",
      email: "eduarda@example.com"
    },
    {
      id: 8,
      nome: "João",
      sobrenome: "Oliveira",
      dataNascimento: "1980-01-25",
      cpf: "987654321-00",
      senha: "joaoolive45",
      email: "joao@example.com"
    },
    {
      id: 9,
      nome: "Tatiane",
      sobrenome: "Pereira",
      dataNascimento: "1991-10-13",
      cpf: "159852753-11",
      senha: "tati_333",
      email: "tatiane@example.com"
    },
    {
      id: 10,
      nome: "Ricardo",
      sobrenome: "Gomes",
      dataNascimento: "1989-12-02",
      cpf: "753951456-22",
      senha: "rickygo36",
      email: "ricardo@example.com"
    },
    {
      id: 11,
      nome: "Amanda",
      sobrenome: "Lima",
      dataNascimento: "1994-08-16",
      cpf: "852147963-66",
      senha: "manda_lima",
      email: "amanda@example.com"
    },
    {
      id: 12,
      nome: "Carlos",
      sobrenome: "Santana",
      dataNascimento: "1975-03-01",
      cpf: "987321654-33",
      senha: "carlosS50",
      email: "carlos@example.com"
    },
    {
      id: 13,
      nome: "Patrícia",
      sobrenome: "Barbosa",
      dataNascimento: "1987-06-28",
      cpf: "321987654-44",
      senha: "paty_barb37",
      email: "patricia@example.com"
    },
  ]);

  
  

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
  
  function logar() {
    if (!validarCampos()) return;
    console.log(`Cpf: ${cpf}\nSenha: ${senha}`);
    
    usuario.map(i => {
      if (i.cpf == cpf && i.senha == senha) {
        console.log("Usuário encontrado:", i);
        i.senha = "";
        localStorage.setItem("usuario", JSON.stringify(i));
      }
      else {
         console.log("Usuário não encontrado.");
     }
    });
    

  }
  
  return (
    <div>
      <div className="p-2 rounded bg-green-700 text-white">
        <h1>Cadastro de Usuário</h1>
        <p>Preencha os campos abaixo para logar.</p>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-500">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">Bem-vindo ao PlayFute</h2>
          <h3 className="text-center text-lg mb-4">Login</h3>
          <input 
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72" 
            placeholder="CPF" 
            value={cpf} 
            onChange={(e) => alteraCpf(e.target.value)} />
          <input 
            className="p-2 mb-4 rounded bg-green-700 text-white placeholder-white w-72" 
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
      </div>
    </div>
  );
}
