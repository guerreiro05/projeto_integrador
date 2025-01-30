export default Menu;

function Menu() {
    return ( 
    <main>
        <div className="w-100 bg-red-300 flex justify-between">
            <div>
                <img className="" width="100" src="./imagens/logo.jpg"/>
            </div>

            <div className="pesquisar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text"/>
            </div>

            <p>
                <button>Crie a sua conta</button>
                <button>Entre</button>
                <button>Calendário</button>
            </p>
        </div> 
    </main>
    );
}

