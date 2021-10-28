import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Button, Col, Card, Row } from 'react-bootstrap';
import { formatEuro, formatTax, formatIncludeTax } from '../../utils/CashFormat';
import './CartList.css';




const CartList = () => {
    const { cart, removeItem, clearCart, totalPriceCart } = useContext(CartContext);
    
     

    return (
        <>
        <Container className="w-75 mt-3">
            <Row className="text-title ps-1 pe-2">
                <Col md={9}>Articulo</Col>
                <Col className="text-center ps-1 pe-1" md={1}>Precio</Col>
                <Col className="text-center ps-1 pe-1" md={1}>Cantidad</Col>
                <Col className="text-center ps-1 pe-1" md={1}>Total</Col>
            </Row>
            {
                
            cart.map((producto) => {
                return(            
                <Card key={producto.item.id} style={{ marginTop:'5px' }}>
                    <Card.Body>
                        <Row>
                            <Col md={2}>
                                <div className='cartPicContainer'>
                                    <Link to={`/item/${producto.item.id}`}>
                                        <Card.Img src={producto.item.pictureUrl} />
                                    </Link>
                                </div>
                            </Col>
                            <Col className="text-start" md={7}>
                                <span className="product-item-name">{producto.item.title}</span>
                            </Col>
                            <Col className="text-center ps-1 pe-1" md={1}>
                                <span className="price">${formatEuro(producto.item.price)}</span>
                            </Col>

                            <Col className="text-center ps-1 pe-1" md={1}>
                                <span className="price quantity">{producto.quantity}</span>
                            </Col>
                            <Col className="text-center ps-1 pe-1" md={1}>
                                <span className="price">${formatEuro(producto.quantity * producto.item.price)}</span>        
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                                <Col className="action" xs="auto">
                                    <Link to={`/item/${producto.item.id}`}>
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                    &nbsp;
                                    <i className="fas fa-trash-alt" onClick={(e) => removeItem(producto.item.id)}></i>
                                </Col>
                        </Row>
                    </Card.Body>
                </Card>
                )
            }) // end map
            }
                {<Card.Footer className="cartFooter">
                    <Row>
                        <Col xs="auto">
                            <Button variant="danger" disabled={cart.length > 0 ? false : true }
                                onClick={(e) => clearCart()}>
                            Vaciar Carrito</Button>
                        </Col>
                    </Row>
                </Card.Footer> }
            </Container>
        <Container className="w-25 mt-3">
                <Row className="cart-summary">
                    <strong className="summary title">Título</strong>
                    <div className="cart-totals">
                        <div className="table-wrapper">
                            <table className="data table totals">
                                {/* <caption className="table-caption">Total</caption> */}
                            <tbody>
                                <tr className="totals sub">
                                    <th className="mark" scope="row">Subtotal</th>
                                    <td className="amount">
                                        <span className="price">$&nbsp;{formatEuro(totalPriceCart())}</span>
                                    </td>
                                </tr>

                                <tr className="totals-tax">
                                    <th data-bind="text: title" className="mark" colSpan="1" scope="row">Impuestos</th>
                                    <td className="amount">
                                            <span className="price">$&nbsp;{formatTax(totalPriceCart()) }</span>
                                    </td>
                                </tr>

                                <tr className="grand totals">
                                    <th className="mark" scope="row">
                                        <strong>Total de tu compra</strong>
                                    </th>
                                    <td className="amount">
                                        <strong><span className="price" >${formatIncludeTax(totalPriceCart())}</span></strong>
                                    </td>
                                </tr>

                            </tbody>
                            </table>
                        </div>
                    </div>
                    <Col md={ 12}>
                    <Link to={"/checkout"}>
                        <Button className="w-100" variant="success" disabled={cart.length > 0 ? false : true }>
                        Procesar Pedido </Button>
                    </Link>
                </Col>
{/* 
                <Col xs="auto">
                    <Button variant="danger" disabled={cart.length > 0 ? false : true }
                        onClick={(e) => clearCart()}>
                    Vaciar Carrito</Button>
                </Col> */}
            </Row>
        </Container>
    </>
    );
}

export default CartList;
