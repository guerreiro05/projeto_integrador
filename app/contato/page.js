'use client'
 
import React, { useState } from 'react';
import Link from 'next/link';
 
const Contato = () => {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
 
  function validarCampos() {
    if (!email || !telefone || !mensagem) {
      setErro("Todos os campos são obrigatórios.");
      return false;
    }
    setErro("");
    return true;
  }
 
  function enviarContato() {
    if (!validarCampos()) return;
    console.log(`Email: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
    alert("Mensagem enviada com sucesso!");
    setEmail("");
    setTelefone("");
    setMensagem("");
  }
 
  return (
<div>
<div className="p-2 rounded bg-green-700 text-white">
<h1>Formulário de Contato</h1>
<p>Preencha os campos abaixo para entrar em contato conosco.</p>
</div>
<div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-500">
<div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
<h2 className="text-center text-2xl font-semibold mb-6">Entre em Contato</h2>
          {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}
<input
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
<input
            className="p-2 mb-2 rounded bg-green-700 text-white placeholder-white w-72"
            placeholder="Seu Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
<textarea
            className="p-2 mb-4 rounded bg-green-700 text-white placeholder-white w-72"
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
<button
            className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24"
            onClick={enviarContato}
>
            Enviar
</button>
<hr />
<Link href="/">
<button className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24">
              Voltar
</button>
</Link>
</div>
</div>
</div>
  );
};
 
export default Contato;