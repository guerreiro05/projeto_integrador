export default Rodapepg;

<<<<<<< Updated upstream
function Rodapepg({texto, texto2, alteraPagamento}) {
=======
function Rodapepg(texto, texto2) {
    
>>>>>>> Stashed changes
    return ( 
        <main>
            <div className=" flex justify-center">
                <div className="w-[700px]">
                    <h3 className="text-center mt-10">Outras formas de pagamento</h3>
                    <div className="flex justify-around">
<<<<<<< Updated upstream
                        <button onClick={()=>alteraPagamento("pix")} className="p-2 w-64 rounded-sm border-grey-500 text-grey-500 bg-white"> {texto}</button>
                        <button onClick={()=>alteraPagamento("cartao")} className="p-2 w-80 rounded-sm border-grey-500 text-grey-500 bg-white"> {texto2} </button>
=======
                        <button onClick={()=>alteraPagamento("pix")} className="p-2 w-64 rounded-sm border-gray-500 bg-white"> {texto}</button>
                        <button onClick={()=>alteraPagamento("cartao")} className="p-2 w-80 rounded-sm border-gray-500 bg-white"> {texto2} </button>
>>>>>>> Stashed changes
                    </div>
                    <p className="italic">
                        <small>Prefira pagar no cartão ou no PIX para seu acesso ser liberado imediatamente. O pagamento no boleto pode levar até 72hs para ser aprovado.</small>
                    </p>
                    
                </div>
            </div>
        </main>
     );
}
