'use client'

export default RodaPe;

function RodaPe() {
    return (
        <div className="bg-green-700">
            <footer className="text-white layout-container flex justify-around">
                <div>
                    <h3 className="font-bold mb-2 text-2xl">Conheça-nos</h3>
                    <p className="cursor-pointer hover:underline" onClick={() => window.location.href = "/sobre"}>
                        Sobre a PlayFute
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-2xl">Ganhe dinheiro conosco</h3>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        className="text-white cursor-pointer no-underline hover:underline">
                        Anuncie sua quadra
                    </a>
                </div>
                <div>
                    <h3 className="font-bold mb-2 cursor-pointer text-2xl">Vamos te ajudar</h3>
                    <p className="hover:underline cursor-pointer" onClick={() => window.location.href = "/perfil"}>
                        Sua conta
                    </p>
                    <p className="hover:underline cursor-pointer ">Cancelamento e reembolsos</p>
                    <p className="hover:underline cursor-pointer">Ajuda e Suporte</p>
                </div>
            </footer>
        </div>
    );
}
