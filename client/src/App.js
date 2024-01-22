import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
// import Products from './components/Products/Products'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

import AppState from "./utils/context";

function App() {
    return(
        <BrowserRouter>
            <AppState>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/categories/:id" element={<Category />}  />
                    <Route path="/products/:id" element={<SingleProduct />}  />
                </Routes>
                <Newsletter />
                <Footer />
            </AppState>
        </BrowserRouter>
    );
}

export default App;
