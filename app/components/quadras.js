'use client'

export default function Quadras(attr) {
    return (
       
        <main
            onClick={() => window.location.href = "local/" + attr.id}
            className="border border-gray-300 shadow-lg w-80 p-6 m-2 rounded-lg hover:scale-105 transition-transform duration-300"
            >
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={attr.imagem}/>

            <div className="pt-4">
                    <p className="text-xl font-semibold">{attr.nome}</p>
                    <div className="flex items-center space-x-2 mt-1">
                    <span className="text-yellow-500">⭐</span>
                    <p className="text-gray-700">{attr.avaliacoes}</p>
                </div>
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
