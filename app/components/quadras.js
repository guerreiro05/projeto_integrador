'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Quadras(attr) {
    return (
       
        <main className="border border-gray-300 shadow-lg w-80 py-2 px-1 m-2 rounded-lg hover:scale-105 transition-transform duration-300">
            
            <div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">⭐⭐⭐ {attr.avaliacoes}</p>
                    <FontAwesomeIcon icon={faHeart}
                    className="hover:text-red-600 text-gray-300 transition-colors text-2xl cursor-pointer"/>
                </div>

                <img
                    className="w-full h-48 object-cover"
                    src={attr.imagem}/>

                <div className="items-center">
                    <p className="text-lg h-[60px] font-semibold">{attr.nome}</p>
                   
                    <p className="font-bold text-green-600">R$ {attr.preco}</p>
                    
                    <p className="text-sm h-[40px] text-gray-500">{attr.localizacao}</p>
                </div>

                <button className="w-5/6 bg-white rounded-sm hover:bg-gray-300 p-1"
                        onClick={() => window.location.href = "local/" + attr.id} >Alugar
                </button>
            </div>
        </main>

      
    );
}
