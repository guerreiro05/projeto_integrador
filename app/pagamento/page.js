'use client'

import { useState } from "react";

export default function Pagamento() {

    const [pix, alteraPix] = useState(false);  // Estado inicial configurado como 'true'
    const [cartao, alteraCartao] = useState(false); 
    const [boleto, alteraBoleto] = useState(false); 

    function alteraPagamento(value){
        if(value == "pix"){
            alteraPix(true)
            alteraCartao(false)
            alteraBoleto(false)
        }
    }

    return ( 
        <main>
            <div className="flex justify-center">
                <div>
                    <h2>Método de pagamento: </h2>
                    <div>
                        <button onClick={() => alteraPagamento("pix")} className="border-none w-80 rounded-lg p-2">Pix</button>
                        <br/>

                        <button onClick={() => alteraCartao(true)} className="mt-2 mb-2 w-80 border-none rounded-lg p-2">Cartão de débito/crédito</button>
                        <br/>

                        <button onClick={() => alteraBoleto(true)} className="border-none w-80 rounded-lg p-2">Boleto</button>
                    </div>
                </div>
            </div>

            {
                pix == true ? 
                    <div className="flex justify-center">
                        <div className="ring-3 shadow-lg rounded-lg w-96 h-full flex justify-center ">
                            <div className="mt-5 text-center">
                                <h3>Pix</h3>
                                <img className="mb-5 w-64" src="./imagens/qrcode.png" alt="QR Code"></img>
                                <br/>

                                <button className="rounded-lg border-none mr-5 bg-blue-500 shadow-lg shadow-blue-500/50 text-white p-2 mb-3">
                                    Copiar
                                </button>

                                <input className="w-64" placeholder="A1B2C3D4E5F6789G0H1I2J3K4L5M6N7P8Q9R0S1T2U3V4W5X6Y7Z8A9"></input>
                            </div>
                        </div>
                    </div>
              :            
                    <div></div>
            
            }

            {
                cartao === true ?
                    <div className="flex justify-center">
                        <div>
                            <input placeholder="Nome do titular"></input>
                            <br/>
                            <input placeholder="Número do cartão"></input>
                            <br/>
                            <input placeholder="Data de Validade"></input>
                            <br/>
                            <input placeholder="CVV"></input>
                            <br/>
                            <button>Confirmar</button>
                        </div>
                    </div>
                :
                    <div></div>
            }

        </main>
    );
}
