import Menu from "./components/Menu";
import Navegacao from "./components/Navegacao";
import RodaPe from "./components/Rodape";

export default function Home() {
  return (
    <main>
      
    <Menu/>
    <Navegacao/>

    <div className="primeirasImagens">

        <i className="configIcon iconRight fa-solid fa-angle-left"></i>
        <i className="configIcon iconLeft fa-solid fa-chevron-right"></i>
        
        <img width="800" src="./imagens/campinho_aberto.jpg" alt=""/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor, debitis consequuntur ratione quisquam incidunt 
            quibusdam consectetur ex voluptas veniam odit nemo harum, 
            eius placeat pariatur ullam, numquam suscipit asperiores 
            autem.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor, debitis consequuntur ratione quisquam incidunt 
            quibusdam consectetur ex voluptas veniam odit nemo harum, 
            eius placeat pariatur ullam, numquam suscipit asperiores 
            autem.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor, debitis consequuntur ratione quisquam incidunt 
            quibusdam consectetur ex voluptas veniam odit nemo harum, 
            eius placeat pariatur ullam, numquam suscipit asperiores 
            autem.
        </p>
        

    </div>
    
    <h2>Quadras em destaques</h2>

    <div className="cardPreview">
        <div className="card">

            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>

            <img width="300" src="./imagens/campinho_aberto.jpg" alt=""/>
            <img width="300" height="200px" src="./imagens/quadra_tenis.jpg" alt=""/>
            <img width="300" src="./imagens/campinho_aberto.jpg" alt=""/>
            <img width="300" src="./imagens/campinho_aberto.jpg" alt=""/>
        </div>
        <div className="card">
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>

            <img width="300" src="./imagens/campinho_aberto.jpg" alt=""/>
            <img width="300" height="200px" src="./imagens/quadra_descobera.jpg" alt=""/>
            <img width="300" height="200px" src="./imagens/quadra_descobera.jpg" alt=""/>
            <img width="300" src="./imagens/campinho_aberto.jpg" alt=""/>
        </div>
    </div>

    <button>Ver mais</button>

    <RodaPe/>

    </main>
  );
}
