export default Menu;

function Menu() {
    return ( 
    <main>
        <div className="bg-green-500 flex content-center justify-between">
            
            <img className="w-24" src="./imagens/logo.jpg"/>

            <div className="mt-10 mb-5 bg-red-500">
                <input className="w-80 h-6 border-none rounded-lg w-80" type="text"/>
            </div>

            <div className="">
                <button className="botaoModelo">Crie a sua conta</button>
                <button className="botaoModelo ml-5 mr-5">Entre</button>
                <button className="botaoModelo">Calendário</button>
            </div>
        </div> 
    </main>
    );
}

