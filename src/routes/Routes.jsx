//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Home from '../page/Homepage';

import Pesanan from "../page/pesanan";
import GeminiAIComponent from "../page/Gemini";
import NotFound from "../page/NotFound";
import Blog from "../page/Blog";
import Blogdetail from "../page/Blog-Detail";
import DetailPage from "../page/detailPage/detailPage";
import { useState } from "react";
import About from "../page/About";

function RoutesIndex() {

    const [cartItems, setCartItems] = useState([])


    const addProduct = (item) => {
        const existingProduct = cartItems.find(cartItem => cartItem.id === item.id)

        if (existingProduct) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ))
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    }

    const removeProduct = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            if (existingItem.quantity > 1) {
                setCartItems(cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                ));
            } else {
                setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
            }
        }
    };
    return (
        <Routes>

            {/* route "homepage" */}
            <Route path="/" element={<Home />} />


             {/* route "homepage" */}
             <Route path="/pesan" element={<Pesanan addProduct={addProduct} removeProduct={removeProduct} cartItems={cartItems} setCartItems={setCartItems}/>} />

             <Route path="/ai" element={<GeminiAIComponent />} />

             <Route path="/blog" element={<Blog />} />

             <Route path="/blog/detail" element={<Blogdetail />} />

             <Route path="/about" element={<About />} />



            <Route path="/detail/:id" element={<DetailPage addProduct={addProduct} removeProduct={removeProduct} cartItems={cartItems} />} />

             <Route path="*" element={<NotFound />} />


        </Routes>
    )
}

export default RoutesIndex

