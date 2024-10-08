import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Item from './Item';
import {arrayOf, func} from 'prop-types';
import itemShape from "../../proptypes/item";
import Loader from "./Loader";

const Items = (props) => {
    const {items, addItem, removeItem, cart} = props;
    return (
        <>
            {
                (items === undefined || items === null) ? <Loader/> :
                    <>
                        {
                            items.length > 0 ?
                                <Row className="mx-0">
                                    {
                                        items.map(item => {
                                                const itemCount = cart.filter(cartItem => cartItem.name === item.name)[0]?.quantity;
                                                return (
                                                    <Col md={3} key={item.name}>
                                                        <Item itemCount={itemCount} item={item} addItem={addItem}
                                                              removeItem={removeItem}/>
                                                    </Col>
                                                )
                                            }
                                        )
                                    }
                                </Row>
                                : <h3 className="text-center text-danger">No Grocery Items available</h3>
                        }
                    </>
            }
        </>
    )
};


Items.propTypes = {
    items: arrayOf(itemShape),
    cart: arrayOf(itemShape).isRequired,
    addItem: func.isRequired,
    removeItem: func.isRequired,
};

export default Items;
