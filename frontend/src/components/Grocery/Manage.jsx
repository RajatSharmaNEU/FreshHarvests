import React, {useState} from 'react';
import axios from "../../configs/axiosConfig";
import {Container, Form} from "react-bootstrap";
import {Button} from "@mui/material";
import Snackbar from "../SnackBar/SnackBar";

function App() {
    const [file, setFile] = useState(null);
    const [notify, setNotify] = useState("");
    const [open, setOpen] = useState(false);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleFileSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('/admin/uploadGroceryItems', formData);
            setNotify("Items updated successfully !!!");
            setOpen(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <div>
                {
                    open &&
                    <Snackbar handleClose={handleClose} status={true} message={notify}
                              openStatus={open}/>
                }
            </div>
            <Form>
                <Form.Group controlId="formFile">
                    <Form.Label>Choose Grocery Item</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload}/>
                </Form.Group>
                <Button onClick={handleFileSubmit}>
                    Upload
                </Button>
            </Form>
        </Container>
    );
}

export default App;
