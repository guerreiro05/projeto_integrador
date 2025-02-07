'use client'

import { useState } from "react";

export default function Pagamento() {

    const [pix, alteraPix] = useState(false);  // Estado inicial configurado como 'true'
    const [cartao, alteraCartao] = useState(false); 
    const [boleto, alteraBoleto] = useState(false); 
    const [boletoGerado, alteraBoletoGerado] = useState(false); 

    function alteraPagamento(value){
        if(value == "pix"){
            alteraPix(true)
            alteraCartao(false)
            alteraBoleto(false)
            alteraBoletoGerado(false)
        }
        if(value == "cartao"){
            alteraCartao(true)
            alteraPix(false)
            alteraBoleto(false)
            alteraBoletoGerado(false)
        }
        if(value == "boleto"){
            alteraBoleto(true)
            alteraCartao(false)
            alteraPix(false)
            alteraBoletoGerado(false)
        }
        if(value == "boletoGerado"){
            alteraBoletoGerado(true)
            alteraBoleto(false)
        }
    }

    return ( 
        <main>
            <div className="flex justify-center">
                <div>
                    <h2>Método de pagamento: </h2>
                    <div>
                        <button onClick={()=>alteraPagamento("pix")} className="border-none w-80 rounded-lg p-2">Pix</button>
                        <br/>

                        <button onClick={()=>alteraPagamento("cartao")} className="mt-2 mb-2 w-80 border-none rounded-lg p-2">Cartão de débito/crédito</button>
                        <br/>

                        <button onClick={()=>alteraPagamento("boleto")} className="border-none w-80 rounded-lg p-2">Boleto</button>
                    </div>
                </div>
            </div>

            {
                pix == true ? 
                    <div className="mt-5 flex justify-center">
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
                    <div className="mt-5 flex justify-center">
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

            {
                boleto === true ?
                    <div className="mt-5 border-dotted border-2 rounded-md p-5">
                        <h2>Pagamento da fatura no boleto</h2>
                        
                        <p>
                            A fatura só será paga após a <strong>compensação do boleto</strong>, caso queira a ativação instantânea, selecione o pagamento <strong>via cartão de crédito ou PIX</strong>.
                        </p>

                        <button onClick={()=>alteraPagamento("boletoGerado")} className="ml-2 rounded-sm mb-5 p-2 w-64 bg bg-gray-600 text-white border-none">📄 Gerar boleto</button>

                        <div className="">
                            <h3 className="mt-10">Outras formas de pagamento</h3>

                            <div className="flex justify-around">
                                <button onClick={()=>alteraPagamento("pix")} className="p-2 w-64 rounded-sm border-grey-600 text-grey-600">🔲 Gerar Pix</button>
                                <button onClick={()=>alteraPagamento("cartao")} className="p-2 w-80 rounded-sm border-grey-600 text-grey-600">💳 Cartão de crédito</button>
                            </div>

                                <p className="italic">
                                    <small>
                                        Prefira pagar no cartão ou no PIX para seu acesso ser liberado imediatamente. O pagamento no boleto pode levar até 72hs para ser aprovado.
                                    </small>
                                </p>
                        </div>

                    </div>
                :
                    <div></div>
            }

            {
                boletoGerado === true ?
                    <div className="mt-5 text-center border-dotted border-2 rounded-md p-5">

                        <h2>Boleto gerado com sucesso!</h2>
                        <p>
                            <small>O vencimento do boleto é no dia 02 de Maio de 2022</small>
                        </p>

                        <p>Utilize o número do código de barras para realizar o pagamento da sua fatura</p>

                        <img src="https://placehold.co/350x80?text=||||||||+||||||||+||||||||+||||||+||||||"></img>

                        <p>3839789730000013980000019141000001374150801</p>

                        <p>
                            <a href="#">Copiar código de barras</a>  
                            <a href="#">Imprimir boleto</a>
                        </p>

                        <h3>Outras formas de pagamento</h3>

                        <button onClick={()=>alteraPagamento("pix")} className="p-2 w-80 bg-white rounded-md border-grey-600 text-grey-600">🔲 Gerar Pix</button>
                        <br/>
                        <br/>
                        <button onClick={()=>alteraPagamento("cartao")} className="p-2 w-80 bg-white rounded-md border-grey-600 text-grey-600">💳 Cartão de crédito</button>

                        <p className="italic">
                            <small>
                                Prefira pagar no cartão ou no PIX para seu acesso ser liberado imediatamente. O pagamento no boleto pode levar até 72hs para ser aprovado.
                            </small>
                        </p>

                    </div>
                :
                    <div></div>
            }

        </main>
    );
}
