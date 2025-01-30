import Menu from "./components/menu";


export default function Cadastro() {
  return (
    <div>

      <div className="corPrincipal">


      <h1>Cadastro de Usuario</h1>
      <p>Preencha os campos abaixo para se cadastrar.</p>

      </div>
      <hr />

      <form>
   
      <div className="container">
      <div className="panel">
       
     

      <input name="nome" placeholder="Nome" className="placeholder-white" />
        <input name="sobrenome" placeholder="Sobrenome" className="placeholder-white" />
        <input name="idade" type="number" placeholder="Idade" className="placeholder-white" />
        <input name="cpf" placeholder="CPF" className="placeholder-white"  />
        <button className="botao" type="submit" >Cadastrar</button>
       </div>
      
  

      </div>
      </form>
      </div>
  );
}
       






     


