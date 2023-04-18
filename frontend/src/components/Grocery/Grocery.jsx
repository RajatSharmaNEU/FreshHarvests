import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Items from './Items';
import Cart from './Cart';
import {Container} from "react-bootstrap";
import Navigation from "./Navigation";
import Loader from "./Loader";
import Notify from "./Notify";
import axios from "../../configs/axiosConfig";

const Grocery = () => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    });
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [notify, setNotify] = useState(null);

    useEffect(() => {
        setLoader(true);
        axios.get("store/getAll")
            .then((result) => {
                setItems(result.data[0].items);
                setLoader(false);
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
            <Navigation cart={cart}/>
            {loader && <Loader/>}
            {notify && <Notify variant={notify.variant} message={notify.message}/>}
            <Routes>
                <Route exact path="items"
                       element={<Items cart={cart} items={items} addItem={addItem} removeItem={removeItem}/>}
                />
                <Route exact path="cart"
                       element={<Cart cart={cart} setCart={setCart} setLoader={setLoader} setNotify={setNotify}/>}/>
                <Route path="*" element={<Navigate to="items"/>}/>
            </Routes>
        </Container>
    );
};

export default Grocery;
