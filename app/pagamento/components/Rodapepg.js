export default Rodapepg;

function Rodapepg(attr) {
    return ( 
        <main>
            <div className=" flex justify-center">
                <div className="w-[700px]">
                    <h3 className="text-center mt-10">Outras formas de pagamento</h3>
                    <div className="flex justify-around">
                        <button onClick={()=>alteraPagamento("pix")} className="p-2 w-64 rounded-sm border-grey-500 text-grey-500 bg-white"> {attr.texto}</button>
                        <button onClick={()=>alteraPagamento("cartao")} className="p-2 w-80 rounded-sm border-grey-500 text-grey-500 bg-white"> {attr.texto2} </button>
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
