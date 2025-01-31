import Menu from "./componentes/menu";



export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-grenn-500 to-[#00f2fe] bg-green-500">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Bem vindo ao playfute<br/><br/>login:</h2>
        
        <Menu
          login="Login" 
          senha="senha" 
          username="username" 
          Logar="Logar"
        />
      </div>
    </div>
  );
}
