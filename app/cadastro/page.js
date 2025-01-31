import Usuario from "./components/usuario";

export default function Cadastro() {
  return (
    <div>
     
      <div className="p-2 rounded bg-green-700 text-white">

      <h1>Cadastro de Usuário</h1>
      <p>Preencha os campos abaixo para se cadastrar.</p>

      </div>
      

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-[#00f2fe] bg-green-500">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Cadastre-se:</h2>
    
        <input className="p-2 rounded bg-green-700 text-white placeholder-white w-72" placeholder="Nome" />
        <input className="p-2 rounded bg-green-700 text-white placeholder-white w-72" placeholder="Sobrenome" />
        <input className="p-2 rounded bg-green-700 text-white placeholder-white w-72" placeholder="Idade" type="number" />
        <input className="p-2 rounded bg-green-700 text-white placeholder-white w-72" placeholder="CPF" />

        <button className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 w-24">
          Cadastrar
        </button>
 
 
 
  </div>
</div>


      
     
      
   
    </div>

  );
}