import RodaPe from "../components/Rodape";
import Menu from "../components/Menu";

function Local() {
    return ( 
        <main>
            {/* <Menu/> */}

            <div className="flex justify-center">
                <div className="flex">
                    {/* conteiner imagens */}
                    <div>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                        <img className="border-double" src="https://placehold.co/50"></img>
                        <br/>
                    </div>

                    <div>
                        <img  className="mx-5 border-double" src="https://placehold.co/400"></img>
                    </div>
                </div>

                <div>
                   
                <div class="container">
                    <div class="title">🏆 MAIS ALUGADA | 5º em Quadras</div>
                    <h2>Quadra Society 25x15m Gramado Sintético - Iluminada |
                    <br/> Ideal Para Futebol, Treinos e Eventos</h2>
                    <div class="rating">⭐ 4.8 (2.345 avaliações)</div>
                    <p class="price">R$ 179,90/hora <span class="discount">🏷️ 10% OFF</span></p>
                    <p>em até <strong>12x R$ 17,99</strong></p>
                    <p><a href="#">Ver os meios de pagamento</a></p>
                    <div class="dimensions">
                        <strong>Dimensões Disponíveis:</strong>
                        <ul>
                            <li>✅ 25m x 15m</li>
                            <li>✅ 30m x 20m</li>
                        </ul>
                    </div>
                </div>

                        <h3>Estrutura Inclui:</h3>
                    <ul>
                        <li>✅ Gramado sintético de alta qualidade ⚽</li>
                        <li>✅ Iluminação profissional para jogos noturnos 💡</li>
                        <li>✅ Vestiários com chuveiros 🚿</li>
                        <li>✅ Arquibancada para espectadores 🏟️</li>
                        <li>✅ Bebedouro e estacionamento 🚗</li>
                    </ul>
                </div>

                <div className="ml-5">
                    <button>Comprar agora</button>
                    <br/>
                    <button>Adicionar ao Carrrinho</button>
                </div>
            </div>

            {/* <RodaPe/> */}
        </main>
     );
}

export default Local;