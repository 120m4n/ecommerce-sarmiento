
import {Route} from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart.jsx";
import Checkout from "../Cart/Checkout.jsx";
import NotFound from '../NotFound/NotFound.jsx';



const routes = [
    <Route key={1}  exact path="/" component={ItemListContainer} />,
    <Route key={2}  path="/categoria/:idCategoria" component={ItemListContainer}/>,
    <Route key={3}  path="/item/:idProducto" component={ItemDetailContainer} />,
    <Route key={4}  path="/cart" component={Cart}/>,
    <Route key={5}  path='/checkout' component={Checkout} />,
    <Route key={6}  path="*" component={props => <NotFound {...props} description="Pagina no encontrada"/>} />
];

export default routes;
