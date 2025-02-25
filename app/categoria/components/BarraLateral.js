'use client'

function BarraLateral() {
        return (
          <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-6">Menu</h1>
            <nav className="flex flex-col space-y-4 ">
              <a href="#" className="hover:bg-gray-700 text-white p-2 rounded-lg">Início</a>
              <a href="#" className="hover:bg-gray-700 text-white p-2 rounded-lg">Sobre</a>
              <a href="#" className="hover:bg-gray-700 text-white p-2 rounded-lg">Contato</a>
            </nav>
          </div>
        );
      };

export default BarraLateral;