'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Quadras(attr) {
    return (
       
        <main className="w-80 py-2 px-2 m-2 rounded-lg border-solid border-gray-300 border"> 
        
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">⭐⭐⭐ {attr.avaliacoes}</p>
                    <FontAwesomeIcon icon={faHeart}
                    className="hover:text-red-600 text-gray-300 transition-colors text-2xl cursor-pointer"/>
                </div>

                <img
                    className="w-full h-48 object-cover"
                    src={attr.imagem}/>

                <div className="items-center">
                    <p className="text-lg h-[60px] font-semibold m-0">{attr.nome}</p>
                    
                    <p className="font-bold text-gray-500 line-through m-0">R$ {attr.preco}</p>
                    <p className="font-bold text-green-600 text-2xl font-bold m-0">R$ {attr.preco}</p>
                    
                    <p className="text-sm h-[40px] text-gray-500 mt-2">{attr.localizacao}</p>
                </div>

                <button className="cursor-pointer w-5/6 bg-white rounded-sm hover:bg-gray-300 p-1"
                        onClick={() => window.location.href = "local/" + attr.id} >Alugar
                </button>
        </main>

      
    );
}
