export default Menu;

function Menu() {
    return ( 
    <main>
        <div className="w-100 bg-green-500 flex justify-between">
            <div>
                <img className="" width="100" src="./imagens/logo.jpg"/>
            </div>

            <div className="pesquisar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text"/>
            </div>

            <p>
                <button className="botaoModelo">Crie a sua conta</button>
                <button className="botaoModelo ml-5 mr-5">Entre</button>
                <button className="botaoModelo">Calendário</button>
            </p>
        </div> 
    </main>
    );
}

