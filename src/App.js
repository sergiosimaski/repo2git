import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemCount } from "./componentes/ItemCount/ItemCount";
import { Pika } from "./componentes/Pika/Pika";
function App() {

  

  return (
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola Mundo"/>
      <ItemCount/>
      <Pika/>
      </div>
    
      
     </>
  );
}

export default App;
