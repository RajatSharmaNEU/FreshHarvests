import React from 'react';
import {Alert, Container, Table} from 'react-bootstrap';
import {arrayOf, func} from 'prop-types';
import itemShape from '../../proptypes/item';
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const emptyCartMessage = 'Your cart is empty. Please add items from home page!!!';

const Cart = (props) => {
    const {cart, setCart, setLoader, setNotify} = props;
    const subTotal = cart.reduce((sum, cartItem) => {
        return sum + (cartItem.quantity * cartItem.price);
    }, 0);

    const paymentOption = {"client-id": process.env.REACT_APP_PAYMENT};

    const handleCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: subTotal * 1.05 + 10,
                    },
                },
            ],
        });
    };

    const handleOnCancel = async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        setNotify("Transaction Incomplete by " + name);
    }

    const handleOnApprove = async (data, actions) => {
        setLoader(true);
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        setCart([]);
        setNotify("Transaction completed by " + name);
    }

    return (
        <Container className="d-flex flex-column mt-5">
            {
                cart && cart.length > 0 ?
                    <>
                        <Table variant='light' className="dark text-center" size='sm'>
                            <thead className='thead-light'>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity * item.price} $</td>
                                    </tr>
                                ))
                            }
                            <tr className='table-active'>
                                <td>Sub Total</td>
                                <td/>
                                <td>{subTotal}$</td>
                            </tr>
                            <tr className='table-active'>
                                <td>Shipping</td>
                                <td/>
                                <td>10$</td>
                            </tr>
                            <tr className='table-active'>
                                <td>Tax(5%)</td>
                                <td/>
                                <td>{subTotal * 0.05}$</td>
                            </tr>
                            <tr className='table-info'>
                                <td colSpan="2">Total Price</td>
                                <td>{subTotal * 1.05 + 10}$</td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-center">
                            <PayPalScriptProvider options={paymentOption}>
                                <PayPalButtons
                                    createOrder={handleCreateOrder}
                                    onApprove={handleOnApprove}
                                    onCancel={handleOnCancel}
                                    onError={handleOnCancel}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </> :
                    <Alert variant='info' className="text-center">
                        <Alert.Link href='/grocery/items'>
                            {emptyCartMessage}
                        </Alert.Link>
                    </Alert>
            }
        </Container>
    );
};

Cart.propTypes = {
    cart: arrayOf(itemShape).isRequired,
    setCart: func.isRequired,
    setLoader: func,
    setNotify: func,
};

export default Cart;
