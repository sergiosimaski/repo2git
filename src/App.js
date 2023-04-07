import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";


function App() {

  

  return (
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola Mundo"/>
      
      </div>
    
      
     </>
  );
}

export default App;
