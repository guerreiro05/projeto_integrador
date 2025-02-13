'use client'

import { useState } from "react";
import Rodapepg from "./components/Rodapepg";

export default function Pagamento() {

    const [pix, alteraPix] = useState(false);  // Estado inicial configurado como 'true'
    const [cartao, alteraCartao] = useState(true); 
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
                pix === true ? 
                            <div className="flex justify-center">
                                <div className="w-[700px] mt-5 border-dotted border-2 rounded-md p-5">
                                    <div className="text-center">
                                        <h3>Escanear QrCode</h3>
                                        <img className="w-40" src="./imagens/qrcode.png" alt="QR Code"></img>
                                        <br/>
                                        <p>A1B2C3D4E5F6789G0H1I2J3K4L5M6N7P8Q9R0S1T2U3V4W5X6Y7Z8A9</p>
                                        <button className="botaoModelo">
                                            Copiar
                                        </button>
                                    </div>
                                        
                                    <Rodapepg texto="Gerar Boleto" texto2="Cartão de Débito/Crédito" alteraPagamento={alteraPagamento}/>
                                </div>
                            </div>
                :            
                    <div></div>
            
            }

            {
                cartao === true ?
                        <div className="flex justify-center">
                            <div className="w-[700px] mt-5 border-dotted border-2 rounded-md p-5">
                                <input className="w-[285px] p-2 m-1" placeholder="Número do cartão"></input>
                                <br/>
                                <input className="w-[285px] p-2 m-1" placeholder="Nome do titular"></input>
                                <br/>
                                <input className="w-32 p-2 m-1" placeholder="Data de Validade"></input>
                                
                                <input className="w-32 p-2 m-1" placeholder="CVV"></input>
                                <br/>
                                <button className="botaoModelo">Confirmar</button>

                                <Rodapepg texto="Gerar Pix" texto2="Gerar Boleto"/>
                            </div>
                        </div>
                :
                    <div></div>
            }

            {
                boleto === true ?
                    <div className="flex justify-center">
                        <div className="w-[700px] mt-5 border-dotted border-2 rounded-md p-5">
                            <h2>Pagamento da fatura no boleto</h2>
                        
                            <p>
                                A fatura só será paga após a <strong>compensação do boleto</strong>, caso queira a ativação instantânea, selecione o pagamento <strong>via cartão de crédito ou PIX</strong>.
                            </p>
                            <button onClick={()=>alteraPagamento("boletoGerado")} className="ml-2 rounded-sm mb-5 p-2 w-64 bg bg-gray-600 text-white border-none">📄 Gerar boleto</button>
                            
                            <Rodapepg texto="Gerar Pix" texto2="Cartão de Débito/Crédito"/>
                        </div>
                    </div>
                :
                    <div></div>
            }

            {
                boletoGerado === true ?
                    <div className="justify-center flex">
                        <div className="w-[700px] mt-5 text-center border-dotted border-2 rounded-md p-5">
                            <h2>Boleto gerado com sucesso!</h2>
                            <p>
                                <small>O vencimento do boleto é no dia 02 de Maio de 2022</small>
                            </p>
                            <p>Utilize o número do código de barras para realizar o pagamento da sua fatura</p>
                            <img src="https://placehold.co/350x80?text=||||||||+||||||||+||||||||+||||||+||||||"></img>
                            <p>3839789730000013980000019141000001374150801</p>
                            <p>
                                <a className="mr-5" href="#">Copiar código de barras</a>
                                <a href="#">Imprimir boleto</a>
                            </p>
                            <Rodapepg texto="Gerar Pix" texto2="Cartão de Débito/Crédito"/>
                        </div>
                    </div>
                :
                    <div></div>
            }

                <h1>Pagamento Confirmado!</h1>
                <p>Seu pagamento foi processado com sucesso. Obrigado pela sua compra!</p>
                <p>Você receberá um e-mail de confirmação com os detalhes do seu pedido.</p>
                <a href="/">Voltar para a Página Inicial</a>

        </main>
    );
}
