import React from 'react';
import {Badge, Button, ButtonGroup, Card} from 'react-bootstrap';
import {func, number} from 'prop-types';
import itemShape from "../../proptypes/item";

const Item = (props) => {
    const {item, addItem, removeItem, itemCount=0} = props;
    const itemCountClass = itemCount > 0 ? "bg-success" : "bg-secondary";
    const itemImage = require(`../../images/${item.name.toLowerCase()}.svg`);
    return (
        <Card className="my-3 mx-0" bg="light">
            <Card.Img src={itemImage} className="mx-auto w-25 pt-3"/>
            <Card.Body className="text-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price - {item.price}$</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="text-center">
                    <Badge className={`${itemCountClass} mb-1`} >{itemCount}</Badge>
                </div>
                <ButtonGroup className="d-flex justify-content-around" aria-label="Number of items selector">
                    <Button variant="primary" onClick={() => addItem(item)}>+</Button>
                    <Button variant="primary" onClick={() => removeItem(item)}>-</Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    );
};

Item.propTypes = {
    item: itemShape.isRequired,
    itemCount: number,
    addItem: func.isRequired,
    removeItem: func.isRequired,
};

export default Item;
