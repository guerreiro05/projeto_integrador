export default Sobre;

function Sobre() {
    return (
        <main className="layout-container bg-white text-center p-1 rounded-md">
            <div className="layout-container max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Nós</h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    No mundo do esporte e do lazer, encontrar a quadra perfeita para jogar com amigos, treinar ou realizar eventos esportivos pode ser um desafio.
                    Pensando nisso, criamos <span className="font-semibold text-blue-600">PlayFute</span>, uma plataforma inovadora que conecta donos de quadras a esportistas e organizadores, tornando o processo de aluguel mais fácil, rápido e acessível.
                </p>

                <img 
                    src="/imagens/time_futebol.png" 
                    alt="Pessoas jogando em uma quadra moderna"
                    className="w-[700px] rounded-lg shadow-md mb-8"
                />

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Nosso objetivo é oferecer visibilidade para os proprietários de quadras, ajudando-os a preencher horários vagos e otimizar seus negócios,
                    enquanto os usuários encontram os melhores espaços com apenas alguns cliques. Com um sistema intuitivo e prático, buscamos revolucionar a forma como quadras esportivas são alugadas.
                </p>

                <img 
                    src="/imagens/interface-reserva.jpg" 
                    alt="Interface de reserva online"
                    className="w-full rounded-lg shadow-md mb-8"
                />

                <p className="text-lg text-gray-600 leading-relaxed">
                    Seja você um dono de quadra buscando mais clientes ou um apaixonado por esportes à procura do espaço ideal, estamos aqui para facilitar sua jornada.
                    <span className="block mt-4 font-semibold text-blue-600">Junte-se a nós e descubra uma nova maneira de conectar pessoas ao esporte!</span>
                </p>
            </div>
        </main>
    );
}
