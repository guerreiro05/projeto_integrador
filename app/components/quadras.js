export default Quadras;
function Quadras( attr ) {
    return ( 
    <main>

        <div className="text-center">
            <h3>{attr.titulo}</h3>

            <div className="flex justify-around bg-green-100 w-[300px]">
                <img className="w-full" src="./imagens/campinho_aberto.jpg"/>
                <img className="w-full" src="./imagens/quadra_tenis.jpg"/>
                <img className="w-full" src="./imagens/quadra_descobera.jpg"/>
                <img className="w-full" src="./imagens/campinho_aberto.jpg"/>
            </div>

            <button className="botaoModelo mb-10">Ver mais</button> 

            <hr/>

        </div>
    </main>
     );
}
