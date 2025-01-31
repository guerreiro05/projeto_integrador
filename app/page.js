import Carrossel from "./components/Carrossel";
import Menu from "./components/Menu";
import Navegacao from "./components/Navegacao";
import RodaPe from "./components/Rodape";
import Quadras from "./components/quadras";



export default function Home() {
  return (
    <main>
      
    <Menu/>
    <Navegacao estrela=""/>

    <Carrossel/>
    
    <h2 className="text-center">Quadras em destaques</h2>

    <Quadras titulo="Quadras de tênis"/>
    <Quadras titulo="Campo aberto"/>
    <Quadras titulo="Quadras abertas"/>

    <RodaPe/>

    </main>
  );
}
