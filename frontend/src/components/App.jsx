import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Signup from "./Signup/Signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/signup" Component={Signup}/>
            </Routes>
        </Router>
    );
}

export default App;
