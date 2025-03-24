export default Avaliacoes;

function Avaliacoes(local) {
    return ( 
        <main>
            <div className="flex">
                <div className="w-full p-3 bg-red-300">
                    <div className="flex justify-between">
                        <p>{local.nome}</p>
                        {/* Data de criação */}
                        <p>26/12/2024</p>
                    </div>
            
                    {/* Imagem do usuario */}
                    <img className="max-w-24" src={local.imagem_quarta}/>
                    <p>{local.comentario}</p>
                </div>
            </div>

            <br/>
        </main>
     );
}
