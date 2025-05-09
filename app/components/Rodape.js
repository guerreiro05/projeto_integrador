'use client'

export default RodaPe;
function RodaPe() {
    return ( 
    <main>
        <div className="w-100 bg-green-700 flex justify-around text-white">
            <div>
                <h3>Conheça-nos</h3>
                <p onClick={() => window.location.href="/sobre"}>Sobre a PlayFute</p>
            </div>
            <div>
                <h3>Ganhe dinheiro conosco</h3>
                <a href="https://wa.me/5511999999999" target="_blank" className="text-blue-500 underline">
                    Anuncie sua quadra 
                </a>
            </div>
            <div>
                <h3>Vamos te ajudar</h3>
                <p onClick={() => window.location.href="/perfil"}>Sua conta</p>
                <p>Cancelamento e reembolsos</p>
                <p>Ajuda e Suporte</p>
            </div>
        </div>

        <hr/>

    </main>
     );
}
