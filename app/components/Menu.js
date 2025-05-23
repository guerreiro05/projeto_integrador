'use client'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Menu() {
  const [user, alteraUser] = useState({});

  useEffect(()=>{
      if(localStorage.getItem("usuario") == null)
          return
      
      const u = JSON.parse( localStorage.getItem("usuario")  )
  
      if(u.id != null){
        alteraUser(u)
      }
  
    } , [])

  return ( 
    <main className="bg-green-500">
      <nav className="layout-container flex">   

        <img src="/imagens/logo.jpg" onClick={() => window.location.href="/"} className="w-32" />

        <ul className="text-white justify-around flex w-screen items-end list-none">
          <li className="cursor-pointer text-xl hover:underline" onClick={() => window.location.href = "/categoria/"}>
            Todas as categorias
          </li>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="text-white text-xl cursor-pointer no-underline hover:underline">
              Anuncie sua quadra
          </a>

          <div className="flex">
            {
              user.id === undefined && (
              <li onClick={() => window.location.href = "/cadastro"} className="text-xl cursor-pointer hover:underline">
                Crie sua conta
              </li>
                )
            }

            {
                user.id === undefined ? (
                <li onClick={() => window.location.href = "/login"} className="text-xl cursor-pointer mx-10 hover:underline">
                  Entre
                </li>
                ) : (
                <li onClick={() => window.location.href = "/perfil"} className="text-xl cursor-pointer mx-10 hover:underline">
                Perfil
                </li>
                )
              }
          </div>
        </ul>
      </nav>  
    </main>
  );
}
