import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Container, Button, Col, Card, Row} from 'react-bootstrap';

const CartList = () => {
    const {cart, removeItem, clearCart,totalPriceCart} = useContext(CartContext);
    return (
        <>
        <Container>
            <Row>
                <Col md={9}>Articulo</Col>
                <Col md={1}>Precio</Col>
                <Col md={1}>Cantidad</Col>
                <Col md={1}>Total</Col>
            </Row>
            {
                
            cart.map((producto) => {
                return(            
                <Card key={producto.item.id} style={{ marginTop:'5px' }}>
                    {/* <Card.Header as="h5">
                        <Row>
                            <Col>{producto.item.title}</Col>
                            <Col xs="auto"><i className="fas fa-trash-alt" onClick={(e) => removeItem(producto.item.id)}></i></Col>
                        </Row>
                    </Card.Header> */}
                    <Card.Body>
                            <Row>
                                
                                <Col md={2}>
                                    <div className='cartPicContainer'>
                                        <Link to={`/item/${producto.item.id}`}>
                                            <Card.Img src={producto.item.pictureUrl} />
                                        </Link>
                                    </div>
                                </Col>
                                <Col md={7}>{producto.item.title}</Col>
                                <Col md={1}>
                                    <Card.Text>${producto.item.price}</Card.Text>
                                </Col>

                                <Col md={1}>
                                    <Card.Text>{producto.quantity}</Card.Text>
                                </Col>
                                <Col md={1}>
                                    <Card.Text>${producto.quantity * producto.item.price}</Card.Text>        
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
                    <Link to={"/checkout"}>
                        <Button variant="success" disabled={cart.length > 0 ? false : true }>
                        Procesar Pedido </Button>
                    </Link>
                </Col>

                <Col xs="auto">
                    <Button variant="danger" disabled={cart.length > 0 ? false : true }
                        onClick={(e) => clearCart()}>
                    Vaciar Carrito</Button>
                </Col>
            </Row>
        </Card.Footer>
        </Container>
    </>
    );
}

export default CartList;
