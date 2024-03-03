import React, {useEffect, useState} from 'react';
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {About} from "./components/About";
import {Contacts} from "./pages/Contacts";
import {Reviews} from "./pages/Reviews";
import {ScrollToTop} from "./components/ScrollToTop";
import {Cart} from "./pages/Cart";

function App() {

    const [visibleJumper, setVisibleJumper] = useState<boolean>(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            setVisibleJumper(true);
        } else {
            setVisibleJumper(false);
        }
    });

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div className="wrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/reviews" element={<Reviews/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                    {visibleJumper && <ScrollToTop/>}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
