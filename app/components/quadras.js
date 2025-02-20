'use client'

export default function Quadras(attr) {
    return (
       
            <div onClick={()=> window.location.href="local/"+attr.id} className="border-solid w-80 p-4 m-2 rounded-lg">
                <img className="w-80" src={attr.imagem} />
                <p>{attr.nome}</p>
                <p>⭐ {attr.avaliacoes}</p>
                <p>R$ {attr.preco}</p>
            </div>
    );
}
