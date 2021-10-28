import logo from "./assets/logo_aria.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import { CartProvider } from "./context/CartContext";
import { FavProvider } from "./context/FavContext";
import Routes from "./components/Routes/Routes.js";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar logo={logo}>
              <CartWidget />
            </Navbar>
          </header>
          <FavProvider>
            <Switch>{Routes}</Switch>
          </FavProvider>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
