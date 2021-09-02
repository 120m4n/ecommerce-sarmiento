import logo from "./assets/logo_aria.png";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//create a list of products that
//will be used to populate the item list
const products = [
    {
    id: 1,
    name: "Product 1",
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    quantity: 3
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    quantity: 1
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    quantity: 4
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar logo={logo}>
          <CartWidget count={4} />
        </Navbar>
      </header>
      <ItemListContainer items={products} />
    </div>
  );
}

export default App;
