import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import fetchMarketItems from '../../API/fetchMarketItems';
import Items from './Items';
import Cart from './Cart';
import {Container} from "react-bootstrap";

const Grocery = () => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    });
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchMarketItems().then((result) => {
            setItems(result);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => {
        const itemExist = cart.find(cartItem => cartItem.name === item.name);
        if (itemExist) {
            itemExist.quantity++;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity: 1}]);
        }
    };
    const removeItem = (item) => {
        const itemExist = cart.find(cartItem => cartItem.name === item.name);
        if (itemExist && itemExist.quantity > 1) {
            itemExist.quantity--;
            setCart([...cart]);
        } else {
            setCart(cart.filter(cartItem => cartItem.name !== item.name));
        }
    };

    console.log('App Re-rendered');
    return (
        <Container fluid className="p-0">
            <Routes>
                <Route exact path="items"
                       element={<Items items={items} addItem={addItem} removeItem={removeItem}/>}
                />
                <Route exact path="cart"
                       element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="*" element={<Navigate to="items"/>}/>
            </Routes>
        </Container>
    );
};

export default Grocery;
