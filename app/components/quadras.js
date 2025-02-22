'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Quadras(attr) {
    return (
       
        <main
            onClick={() => window.location.href = "local/" + attr.id}
            className="border border-gray-300 shadow-lg w-80 py-2 px-1 m-2 rounded-lg hover:scale-105 transition-transform duration-300"
            >
            
            <div className="flex justify-between items-center">
                <p className="text-gray-700">⭐⭐⭐ ({attr.avaliacoes})</p>

                <FontAwesomeIcon icon={faHeart} 
                className="hover:text-red-600 text-gray-300 transition-colors text-2xl cursor-pointer"/>
            </div>

            <img
                className="w-full h-48 object-cover"
                src={attr.imagem}/>

            <div className="pt-4">
                <p className="text-xl font-semibold">{attr.nome}</p>

                <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-bold text-green-600">R$ {attr.preco}</p>
                </div>
                    <div className="mt-2 text-sm text-gray-500">
                    <p>{attr.localizacao}</p>
                </div>
            </div>
        </main>

      
    );
}
