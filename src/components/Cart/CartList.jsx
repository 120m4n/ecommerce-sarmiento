import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Button, Col, Card, Row} from 'react-bootstrap';

const CartList = () => {
    const {cart, removeItem, clearCart,totalPriceCart} = useContext(CartContext);
    return (
        <>
            {
            cart.map((producto) => {
                return(            
                <Card key={producto.item.id} style={{ marginTop:'5px' }}>
                    <Card.Header as="h5">
                        <Row>
                            <Col>{producto.item.title}</Col>
                            <Col xs="auto"><i className="fas fa-trash-alt" onClick={(e) => removeItem(producto.item.id)}></i></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs="auto">
                                <div className='cartPicContainer'>
                                    <Link to={`/item/${producto.item.id}`}>
                                        <Card.Img src={producto.item.pictureUrl} />
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                {/* <Card.Text>{producto.item.description}</Card.Text> */}
                                <Card.Text>Precio: ${producto.item.price}</Card.Text>
                                <Card.Text>Cantidad: {producto.quantity}</Card.Text>
                                <Card.Text>SUBTOTAL: ${producto.quantity * producto.item.price}</Card.Text>        
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                )
            }) // end map
         }
        <Card.Footer className="cartFooter">
            <Row>
                <Col xs="auto">
                    <h4>Total: $ {totalPriceCart()}</h4>
                </Col>

                <Col xs="auto">
                    <Button variant="danger" disabled={cart.length > 0 ? false : true }
                        onClick={(e) => clearCart()}>
                    Vaciar Carrito</Button>
                </Col>
            </Row>
        </Card.Footer>
        </>
    );
}

export default CartList;
