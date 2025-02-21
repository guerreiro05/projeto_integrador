'use client'

export default Menu;

function Menu() {
    return ( 
    <main>
        <div className="bg-green-500 flex content-center ">
            
            <img onClick={()=> window.location.href="/"} className="w-24" src="./imagens/logo.jpg"/>

            <div className="flex justify-center items-center">
                <input placeholder="Digite o nome da quadra" className="w-[800px] p-3 border-none" type="text"/>
            </div>

            <div className=" justify-between content-center flex bg-red-300">
                <div className="flex">
                    <h2>Assine a partir de R$ 99,00/mês</h2>
                    <p>Economize em cada jogo!</p>
                </div>
                    <button className="">Assinar clube</button>
            </div>
        </div> 
    </main>
    );
}

