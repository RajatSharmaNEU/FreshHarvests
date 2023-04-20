import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Item from './Item';
import {arrayOf, func} from 'prop-types';
import itemShape from "../../proptypes/item";

const Items = (props) => {
    const {items, addItem, removeItem, cart} = props;
    console.log('Items Re-rendered');
    return (
        items && items.length > 0 ?
            <Row className="mx-0">
                {
                    items.map(item => {
                            const itemCount = cart.filter(cartItem => cartItem.name === item.name)[0]?.quantity;
                            return (
                                <Col md={3} key={item.name}>
                                    <Item itemCount={itemCount} item={item} addItem={addItem} removeItem={removeItem}/>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
            : <h3 className="text-center text-danger">No Grocery Items available</h3>
    );
};


Items.propTypes = {
    items: arrayOf(itemShape).isRequired,
    cart: arrayOf(itemShape).isRequired,
    addItem: func.isRequired,
    removeItem: func.isRequired,
};

export default Items;
