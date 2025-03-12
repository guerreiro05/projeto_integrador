'use client'

import { useState } from "react";
import Rodapepg from "./components/Rodapepg";

export default function Pagamento() {

    const [pix, alteraPix] = useState(false);  // Estado inicial configurado como 'true'
    const [cartao, alteraCartao] = useState(false); 
    const [boleto, alteraBoleto] = useState(true); 
    const [boletoGerado, alteraBoletoGerado] = useState(false); 
    const [pagamentoConfirmado, alteraPagamentoConfirmado] = useState(false); 

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
        if(value == "pagamentoConfirmado"){
            alteraPagamentoConfirmado(true)
            alteraBoleto(false)
            alteraCartao(false)
            alteraPix(false)
            alteraBoletoGerado(false)
        }
    }

    const copiarCodigo = ()=> {
        const codigo = "A1B2C3D4E5F6789G0H1I2J3K4L5M6N7P8Q9R0S1T2U3V4W5X6Y7Z8A9"; // Substitua pelo código real
        navigator.clipboard.writeText(codigo);
        alert("Código de barras copiado!");
      };
      

    return ( 
        <main>
             
            {
                pix == true &&
                    <div className="flex justify-center ">
                        <div className="w-[700px] mt-5 text-center border-dotted border-2 rounded-md p-5">
                            <div>
                                <h3>Escanear QrCode</h3>
                                <img className="w-40" src="./imagens/qrcode.png" alt="QR Code"></img>
                                <br/>
                                <p>A1B2C3D4E5F6789G0H1I2J3K4L5M6N7P8Q9R0S1T2U3V4W5X6Y7Z8A9</p>
                                <button onClick={()=>alteraPagamento("pagamentoConfirmado")} className="botaoModelo">
                                    Confirmar pagamento
                                </button>
                            </div>
                                        
                            <Rodapepg alteraPagamento={alteraPagamento} />
                        </div>
                    </div>
            }

            {
                cartao == true &&
                    <div className="flex justify-center">
                        <div className="w-[700px] mt-5 text-center border-dotted border-2 rounded-md p-5">
                            <input className="w-[285px] p-2 m-1" placeholder="Número do cartão"></input>
                            <br/>
                            <input className="w-[285px] p-2 m-1" placeholder="Nome do titular"></input>
                            <br/>
                            <input className="w-32 p-2 m-1" placeholder="Data de Validade"></input>
                                
                            <input className="w-32 p-2 m-1" placeholder="CVV"></input>
                            <br/>
                            
                            <button onClick={()=>alteraPagamento("pagamentoConfirmado")} className="botaoModelo">
                                Confirmar pagamento
                            </button>

                            <Rodapepg alteraPagamento={alteraPagamento}/>
                        </div>
                    </div>
            }

            {
                boleto == true &&
                    <div className="flex justify-center">
                        <div className="w-[700px] mt-5 text-center border-dotted border-2 rounded-md p-5">
                            <h2>Pagamento da fatura no boleto</h2>
                        
                            <p>
                                A fatura só será paga após a <strong>compensação do boleto</strong>, caso queira a ativação instantânea, selecione o pagamento <strong>via cartão de crédito ou PIX</strong>.
                            </p>
                            <button onClick={()=>alteraPagamento("boletoGerado")} className="ml-2 rounded-sm mb-5 p-2 w-64 bg bg-gray-600 text-white border-none">📄 Gerar boleto</button>
                            
                            <Rodapepg alteraPagamento={alteraPagamento}/>
                        </div>
                    </div>
            }

            {
                boletoGerado == true &&
                    <div className="justify-center flex">
                        <div className="w-[700px] mt-5 text-center border-dotted border-2 rounded-md p-5">
                            <h2>Boleto gerado com sucesso!</h2>
                            <p>
                                <small>O vencimento do boleto é no dia 02 de Maio de 2022</small>
                            </p>
                            <p>Utilize o número do código de barras para realizar o pagamento da sua fatura</p>
                            
                            <img src="https://placehold.co/350x80?text=||||||||+||||||||+||||||||+||||||+||||||"></img>

                            <a className="flex justify-center my-5" onClick={copiarCodigo}>
                                <button className="cursor-pointer border-none rounded-lg">
                                    Copiar
                                </button>
                                
                                <p className="cursor-pointer mx-5"> 
                                    3839789730000013980000019141000001374150801
                                </p>
                            </a>

                            <a href="./imagens/boleto_simulado.pdf" target="_blank">Imprimir boleto</a>
                            <br/>
                            
                            <button className="botaoModelo mt-5" onClick={()=>alteraPagamento("pagamentoConfirmado")} >
                                    Confirmar pagamento
                            </button>

                            <Rodapepg alteraPagamento={alteraPagamento}/>
                        </div>
                    </div>
            }

            {
                pagamentoConfirmado == true &&

                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <h1>Pagamento Confirmado!</h1>

                        <p>
                            Seu foi processado com sucesso. Obrigado pela sua compra! 
                            <br/> 
                            Você receberá um e-mail de confirmação com os detalhes do seu pedido.
                            <br/> 
                            <br/> 
                            <a href="./">Voltar para a Página Inicial</a>
                        </p>
                    </div>
                </div>

            }

        </main>
    );
}
