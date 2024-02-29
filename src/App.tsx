import React from 'react';
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
