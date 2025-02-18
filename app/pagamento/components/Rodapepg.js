'use client'

import { useState } from "react";

export default function Rodapepg(attr) {

    const [pix, alteraPix] = useState(false);  // Estado do PIX
    const [cartao, alteraCartao] = useState(false);  // Estado do Cartão
    const [boleto, alteraBoleto] = useState(true);  // Estado do Boleto

    // Função para alternar entre os métodos de pagamento
    const alternarPagamento = (pagamento) => {
        if (pagamento == "pix") {
            alteraPix(true);
            alteraCartao(false);
            alteraBoleto(false);
        } else if (pagamento == "cartao") {
            alteraCartao(true);
            alteraPix(false);
            alteraBoleto(false);
        } else if (pagamento == "boleto") {
            alteraBoleto(true);
            alteraPix(false);
            alteraCartao(false);
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
                        pix == true &&
                            <div>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("boleto")}
                                    className="botaoPagamento">
                                    {attr.texto}
                                </button>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("cartao")}
                                    className="botaoPagamento">
                                    {attr.texto2}
                                </button>
                            </div>
                        }

                        {
                        cartao == true &&
                            <div>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("pix")}
                                    className="botaoPagamento">
                                    {attr.texto}
                                </button>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("boleto")}
                                    className="botaoPagamento">
                                    {attr.texto2}
                                </button>
                            </div>                    
                        }

                        {
                        boleto == true &&
                            <div>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("pix")}
                                    className="botaoPagamento">
                                    {attr.texto}
                                </button>
                                <button
                                    onClick={() => attr.alteraPagamento && attr.alteraPagamento("cartao")}
                                    className="botaoPagamento">
                                    {attr.texto2}
                                </button>
                            </div>                   
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
