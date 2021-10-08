import firebase from "firebase";
import 'firebase/firestore';
import {saveOrder} from '../../services/Firebase';

import {Form, Button, Row, Col} from 'react-bootstrap';

import { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const {cart, totalPriceCart, clearCart} = useContext(CartContext);
	const [validated, setValidated] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [formData, setFormData]   = useState({});



    // function validationForm(){
    //     return true;
    // }
    function createOrder(){
        if (!validated) return;

        let newOrder  = {
            buyer: formData,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total : totalPriceCart()
        };

        const items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;
			const quantity = cartItem.quantity;

            return {id, title, price, quantity};
        })
        newOrder.items = items;

        console.log(newOrder);

        saveOrder(newOrder)
        .then(res =>{
			if (res.status === "success") {
			setOrderId(res.orderId);
			clearCart();
			console.log(res);
			}
        })
        .catch(err =>{
            console.log(err);
        })

    }

    function handleOnChange(e) {
		
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

	const handleSubmit = (event) => { 
		event.preventDefault();
		// console.log(event);

		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			setValidated(true);	
		//   event.stopPropagation();
		}else{
			setValidated(false);

		}
	
		
		createOrder();
	  };

    return (
        <div className="container-form">
			{orderId ? (
				<Form.Group>
					<Form.Label>Orden Registrada:</Form.Label>
					<Form.Control type="text" placeholder='' value={orderId || ''} readOnly/>
				</Form.Group>) : (

				<Form validated={validated} 
			onSubmit={handleSubmit}
			onChange={handleOnChange}>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="validationCustom01">
				<Form.Label>Nombre completo</Form.Label>
				<Form.Control
					required
					name="name"
					type="text"
					placeholder="Nombre completo"
				/>
				<Form.Control.Feedback type="invalid">
				El usuario tiene que tener minimo 4 digitos.
				</Form.Control.Feedback>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col}  controlId="validationCustom02">
				<Form.Label>Número de contacto</Form.Label>
				<Form.Control
					required
					type="tel"
					name="phone"
					pattern="[0-9]*"
					placeholder="1234567890"
				/>
				<Form.Control.Feedback type="invalid">
					No telefono valido.
				</Form.Control.Feedback>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="validationCustom03">
				<Form.Label>Email</Form.Label>
				<Form.Control 
				type="email" 
				placeholder="Email"
				name="email"
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
				required />
				<Form.Control.Feedback type="invalid">
					No es un email valido.
				</Form.Control.Feedback>
				</Form.Group>
			</Row>

			<Button type="submit">Finalizar compra</Button>
			</Form>
			)}

        </div>
    

    );
}

export default Checkout;
