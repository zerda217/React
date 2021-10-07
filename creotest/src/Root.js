import React from 'react'
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ScrollTop from './ScrollTop';

const Root = () => {
    return (
        <BrowserRouter>
        <ScrollTop />
            <App />
        </BrowserRouter>
    )
}

export default Root
