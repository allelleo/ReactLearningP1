import React, { Component } from 'react'

import Home from '../../pages/Home';
import About from '../../pages/About';
import Login from '../../pages/Login';
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
} from "react-router-dom";
export default class Menu extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
