import logo from "./assets/logo_aria.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart.jsx"
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar logo={logo}>
              <CartWidget count={4} />
            </Navbar>
          </header>
          <Switch>
            <Route exact path="/" >
              <ItemListContainer />
            </Route>
            <Route  path="/categoria/:idCategoria">
              <ItemListContainer/>
            </Route> 

            <Route  path="/item/:idProducto">
              <ItemDetailContainer />
            </Route>

            <Route  path="/cart">
              <Cart/>
            </Route>

          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
