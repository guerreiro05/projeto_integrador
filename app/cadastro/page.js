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
   
      <div className="flex justify-around">
       
        <input name="nome" placeholder="Nome" required />
        <input name="sobrenome" placeholder="Sobrenome" required />
        <input name="idade" type="number" placeholder="Idade" required />
        <input name="cpf" placeholder="CPF" required />
        <button className="botao" type="submit">Cadastrar</button>
      

      </div>
      </form>
    </div>
  );
}
       






     


