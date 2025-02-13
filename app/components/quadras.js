export default Quadras;

function Quadras(attr) {
    return ( 
        <main>
            <div className="text-center">
                <h3>{attr.titulo}</h3>

                {/* Container flex para centralizar */}
                <div className="flex justify-evenly bg-green-100 p-4">
                    {/* Imagens com largura fixa */}
                    <img className="w-64" src="https://placehold.co/200" alt="Campinho Aberto"/>
                    <img className="w-64" src="https://placehold.co/200" alt="Quadra de Tênis"/>
                    <img className="w-64" src="https://placehold.co/200" alt="Quadra Descoberta"/>
                    <img className="w-64" src="https://placehold.co/200" alt="Campinho Aberto"/>
                </div>

                <button className="botaoModelo mb-10">Ver mais</button> 

                <hr/>
            </div>
        </main>
    );
}
