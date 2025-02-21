'use client'

export default Navegacao

function Navegacao() {
    return ( 
    <main>
        <nav>
            <ul className="bg-green-700 text-white flex justify-between list-none m-0 mb-5">
                <li>Categorias ↓ </li>
                <li>Ofertas</li>
                <li>Planos e Pacotes</li>
                <li>Eventos e Torneios</li>
                <li>Primeira Partida Grátis</li>
                <li>Anuncie sua Quadra</li>
                <div className="flex">
                    <li onClick={()=> window.location.href="cadastro/"} className="cursor-pointer">Crie sua conta</li>
                    <li onClick={()=> window.location.href="login/"}className="cursor-pointer ml-5 mr-5">Entre</li>
                </div>
            </ul>
        </nav>
    </main>
    );
}
