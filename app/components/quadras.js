'use client'

export default function Quadras(attr) {
    return (
       
            <div className="bg-red-300 w-80 p-4 m-2 rounded-lg">
                <img src={attr.imagem} />
                <p>{attr.nome}</p>
                <p>⭐ {attr.avaliacoes}</p>
                <p>R$ {attr.preco}</p>
            </div>
    );
}
