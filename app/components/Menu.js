'use client'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return ( 
    <main>
        <div className="bg-green-500 flex justify-between ">
            
            <img onClick={() => window.location.href="/"} className="w-24 ml-2" src="./imagens/logo.jpg" alt="Logo"/>

            <div className="flex justify-center items-center">
                <div className="cursor-pointer bg-white flex justify-center items-center mr-2">
                    <input placeholder="Digite o nome da quadra" className="w-80 p-3 border-none"/>
                    <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-2xl p-2" />
                </div>
            </div>
        </div> 
    </main>
    );
}
