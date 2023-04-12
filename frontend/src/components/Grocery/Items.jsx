import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Item from './Item';
import {arrayOf, func} from 'prop-types';
import itemShape from "../../proptypes/item";

const Items = (props) => {
    const {items, addItem, removeItem} = props;
    console.log('Items Re-rendered');
    return (
        items && items.length > 0 &&
        <Row className="mx-0">
            {
                items.map(item => (
                    <Col md={3} key={item.name}>
                        <Item item={item} addItem={addItem} removeItem={removeItem}/>
                    </Col>
                ))
            }
        </Row>
    );
};


Items.propTypes = {
    items: arrayOf(itemShape).isRequired,
    addItem: func.isRequired,
    removeItem: func.isRequired,
};

export default Items;
