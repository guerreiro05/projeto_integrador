import { useState } from "react";

export default function Rodapepg(attr) {
    const [pix, alteraPix] = useState(false)  // Estado do PIX
    const [cartao, alteraCartao] = useState(false);  // Estado do Cartão
    const [boleto, alteraBoleto] = useState(false);  // Estado do Boleto

    // Função para alternar entre os métodos de pagamento
    const alternarPagamento = (pagamento) => {
        if (pagamento == "pix") {
            alteraPix(true);
            alteraCartao(false);
            alteraBoleto(false);
        } else if (pagamento == "cartao") {
            alteraPix(false);
            alteraCartao(true);
            alteraBoleto(false);
        } else if (pagamento == "boleto") {
            alteraPix(false);
            alteraCartao(false);
            alteraBoleto(true);
        }
    };

    return (
        <main>
            <div className="flex justify-center">
                <div className="w-[700px]">
                    <h3 className="text-center mt-10">Outras formas de pagamento</h3>
                    <div className="flex justify-around">
                        {/* Botão para PIX */}

                        {
                        pix == true ?
                            <button 
                                onClick={() => attr.alteraPagamento && attr.alteraPagamento("pix")}  
                                className="p-2 w-64 rounded-sm border-grey-500 text-grey-500 bg-white">
                                {attr.texto2}
                            </button>
                        
                        : 
                            <button 
                            onClick={() => attr.alteraPagamento && attr.alteraPagamento("cartao")} 
                                className="p-2 w-80 rounded-sm border-grey-500 text-grey-500 bg-white">
                                {attr.texto}
                            </button>
                        }

                        {
                            cartao == true ?
                                <button 
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("pix")}  
                                    className="p-2 w-64 rounded-sm border-grey-500 text-grey-500 bg-white">
                                    {attr.texto}
                                </button>
                        
                        : 
                                <button 
                                onClick={() => attr.alteraPagamento && attr.alteraPagamento("boleto")} 
                                    className="p-2 w-80 rounded-sm border-grey-500 text-grey-500 bg-white">
                                    {attr.texto2}
                                </button>
                        }

                    </div>

                    <p className="italic">
                        <small>
                            Prefira pagar no cartão ou no PIX para seu acesso ser liberado imediatamente. O pagamento no boleto pode levar até 72hs para ser aprovado.
                        </small>
                    </p>
                </div>
            </div>
        </main>
    );
}
