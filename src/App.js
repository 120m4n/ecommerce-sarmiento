import logo from "./assets/logo_aria.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar logo={logo}>
          <CartWidget count={4} />
        </Navbar>
      </header>

      <ItemListContainer greeting={'Hola Soy ItemListContainer'} />
      <ItemDetailContainer greeting={'Hola Soy ItemDetailContainer'}/>

    </div>

  );
}

export default App;
