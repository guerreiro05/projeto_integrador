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
    <main>
      <div className="bg-green-500">
        <div className="layout-container pb-1 mb-4">
          <div className="flex justify-between">
            <img src="/imagens/logo.jpg" onClick={() => window.location.href="/"} className="w-32" />

            <div className="cursor-pointer items-center flex w-80">  
              <div className="bg-white p-3 rounded-md ">
                <input className="w-64 pb-2 outline-none border-none" placeholder="Digite o nome da quadra" />
                <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-2xl"/>
              </div>
            </div>
          </div>    
          
          {/* Navegação */}
          <nav>
            <div>
              <ul className="text-white flex justify-between list-none">
                <li className="cursor-pointer" onClick={() => window.location.href = "/categoria/"}>Todas as categorias</li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  className="text-white cursor-pointer no-underline hover:underline">
                    Anuncie sua quadra
                </a>
                <div className="flex">
                  {
                    user.id === undefined && (
                    <li onClick={() => window.location.href = "/cadastro"} className="cursor-pointer">
                      Crie sua conta
                    </li>
                      )
                      }
                  {
                    user.id === undefined ? (
                    <li onClick={() => window.location.href = "/login"} className="cursor-pointer mx-10">
                      Entre
                    </li>
                    ) : (
                    <li onClick={() => window.location.href = "/perfil"} className="cursor-pointer mx-10">
                    Perfil
                    </li>
                    )
                  }
                </div>
              </ul>
            </div>
          </nav>  
        </div>
      </div> 
    </main>
  );
}
