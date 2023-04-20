import React from 'react';
import {Badge, Button, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {arrayOf} from 'prop-types';
import itemShape from '../../proptypes/item';
import CartIcon from '../../images/cart.svg';
import logoImage from "../../images/agronomy.png";
import localStorageService from '../../configs/localStorageService';

const Navigation = (props) => {
    const {cart} = props;
    const cartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <Navbar bg="info" expand>
            <Link to="/">
                <Navbar.Brand>
                    <img
                        src={logoImage}
                        width="30"
                        height="30"
                        className="m-3"
                        alt="Fresh Harvest"
                    />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <Link to="/grocery/" className="nav-link">Store</Link>
                </Nav>
                {
                    localStorageService.getUser()?.userType === 'admin' &&
                    <Nav className="mr-auto">
                        <Link to="/grocery/manage" className="nav-link">Manage</Link>
                    </Nav>
                }
                <Nav className="mr-auto">
                    <Link to="/grocery/profile" className="nav-link">Profile</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link to="/grocery/logout" className="nav-link"
                          onClick={() => localStorageService.removeSessionData()}>Logout</Link>
                </Nav>
                <Nav>
                    <Link to="/grocery/cart">
                        <Button variant="tertiary">
                            <Badge variant="light">{cartItems}</Badge>
                            <img
                                src={CartIcon}
                                width="30"
                                height="30"
                                alt="Cart"
                            />
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

Navigation.propTypes = {
    cart: arrayOf(itemShape).isRequired,
};

export default Navigation;
