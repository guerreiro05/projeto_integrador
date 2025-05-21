'use client'

export default RodaPe;

function RodaPe() {
    return (
        <footer className="w-full bg-green-700 text-white flex justify-around">
            <div>
                <h3 className="font-bold mb-2">Conheça-nos</h3>
                <p className="cursor-pointer hover:underline" onClick={() => window.location.href = "/sobre"}>
                    Sobre a PlayFute
                </p>
            </div>

            <div>
                <h3 className="font-bold mb-2">Ganhe dinheiro conosco</h3>
                <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    className="text-white cursor-pointer no-underline hover:underline"
                >
                    Anuncie sua quadra
                </a>
            </div>

            <div>
                <h3 className="font-bold mb-2">Vamos te ajudar</h3>
                <p className="cursor-pointer hover:underline" onClick={() => window.location.href = "/perfil"}>
                    Sua conta
                </p>
                <p className="hover:underline">Cancelamento e reembolsos</p>
                <p className="hover:underline">Ajuda e Suporte</p>
            </div>
        </footer>
    );
}
