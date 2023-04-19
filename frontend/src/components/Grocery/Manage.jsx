import React, { useState } from 'react';
import axios from "../../configs/axiosConfig";
import {Container, Form} from "react-bootstrap";
import {Button} from "@mui/material";

function App() {
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/admin/uploadGroceryItems', formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleFileSubmit}>
                <Form.Group controlId="formFile">
                    <Form.Label>Choose Grocery Item</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>
                <Button variant="primary">
                    Upload
                </Button>
            </Form>
        </Container>
    );
}

export default App;
