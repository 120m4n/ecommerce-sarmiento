import firebase from "firebase";
import "firebase/firestore";
import { saveOrder } from "../../services/Firebase";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from 'react-router-dom';

import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPriceCart, setOrderId } = useContext(CartContext);
	const [formData, setFormData] = useState({});
	const history = useHistory()

  function createOrder() {
    // if (!validated) return;

    let newOrder = {
      buyer: formData,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPriceCart(),
    };

    const items = cart.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.quantity;
      const quantity = cartItem.quantity;

      return { id, title, price, quantity };
    });
    newOrder.items = items;

    saveOrder(newOrder)
      .then((res) => {
        if (res.status === "success") {
			setOrderId(res.orderId);
			history.push('/order')

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-form">
      <Formik
        initialValues={{
          name: "",
          email: "",
          email2: "",
          phone: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Direccion de email invalida";
          }
          if (!values.email2) {
            errors.email2 = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email2)
          ) {
            errors.email2 = "Direccion de email invalida";
			}
			

			if (!values.phone) {
				errors.phone = "Required";
			} else if (
				!/^[0-9]{10,}$/i.test(values.phone)
			) {
				errors.phone = "El telefono debe contener minimo 10 digitos";
			}
          return errors;
        }}
        onSubmit={(values) => {
			setFormData(values);
			createOrder();
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <label htmlFor="name">Nombre y apellido</label>
            <Field
              type="text"
              autoComplete="off"
              id="name"
              name="name"
              placeholder="Nombre y apellido"
            />
            <ErrorMessage
              name="name"
              component={() => <div className="error">{errors.name}</div>}
            />
            <label htmlFor="phone">Telefono</label>
            <Field
              type="text"
              autoComplete="off"
              id="phone"
              name="phone"
              placeholder="1234567890"
					  />
			<ErrorMessage
              name="phone"
              component={() => <div className="error">{errors.phone}</div>}
            />
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              autoComplete="off"
              id="email"
              name="email"
              placeholder="email@email.com"
			/>
			<ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            />
            <label className="form__label" htmlFor="email2">
              Repetir Email
            </label>
            <Field
              type="text"
              autoComplete="off"
              id="email2"
              name="email2"
              placeholder="email@email.com"
					  />
			<ErrorMessage
              name="email2"
              component={() => <div className="error">{errors.email2}</div>}
            />
            <button type="submit">Finalizar compra</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
