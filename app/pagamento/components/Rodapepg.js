'use client'

import { useState } from "react";

export default function Rodapepg(attr) {

    const [pix, alteraPix] = useState(false);  // Estado do PIX
    const [cartao, alteraCartao] = useState(false);  // Estado do Cartão
    const [boleto, alteraBoleto] = useState(true);  // Estado do Boleto

    // Função para alternar entre os métodos de pagamento
    const alteraPagamento = (pagamento) => {
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
                <div>
                    <h2 className="mb-2 text-lg font-semibold">Método de pagamento:</h2>
                    
                    {/* Container dos botões */}
                    <div className="flex flex-col gap-3">
                    
                    {/* PIX */}
                    <label className="relative block">
                        {/* O input fica oculto, mas é 'peer' para que o 'span' seja estilizado quando marcado */}
                        <input
                        type="radio"
                        name="metodoPagamento"
                        value="pix"
                        className="peer sr-only"
                        onClick={() => attr.alteraPagamento("pix")}
                        />

                        {/* O span que mostra o texto e muda de cor ao marcar o input */}
                        <span
                        className="
                        p-3 border rounded-md cursor-pointer transition-colors
                        peer-checked:bg-indigo-50 peer-checked:text-indigo-900
                        peer-checked:ring-2 peer-checked:ring-indigo-200"
                        >
                        Pix
                        </span>
                    </label>

                    {/* Cartão de débito/crédito */}
                    <label className="relative block">
                        <input
                        type="radio"
                        name="metodoPagamento"
                        value="cartao"
                        className="peer sr-only"
                        onClick={() => attr.alteraPagamento("cartao")}
                        />

                        <span
                        className="
                            p-3 border rounded-md cursor-pointer transition-colors
                            peer-checked:bg-indigo-50 peer-checked:text-indigo-900
                            peer-checked:ring-2 peer-checked:ring-indigo-200"
                        >
                        Cartão de débito/crédito
                        </span>
                    </label>

                    {/* Boleto */}
                    <label className="relative block">
                        <input
                            type="radio"
                            name="metodoPagamento"
                            value="boleto"
                            className="peer sr-only"
                            onClick={() => attr.alteraPagamento("boleto")}
                        />
                        <span
                            className="
                            p-3 border rounded-md cursor-pointer transition-colors
                            peer-checked:bg-indigo-50 peer-checked:text-indigo-900
                            peer-checked:ring-2 peer-checked:ring-indigo-200"
                        >
                        Boleto
                        </span>
                    </label>
                    </div>

                </div>
            </div>

            <p className="italic">
                <small>
                    Prefira pagar no cartão ou no PIX para seu acesso ser liberado imediatamente. O pagamento no boleto pode levar até 72hs para ser aprovado.
                </small>
            </p>
        </main>
    );
}

