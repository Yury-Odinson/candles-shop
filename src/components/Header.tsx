import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {links} from "../tools/utils";
import headerLogo from "../assets/img/headerLogo.png";
import {getCartItems, itemsInCart} from "../tools/store";

export const Header = () => {

    const [candles, setCandles] = useState<number>(itemsInCart.length);

    useEffect(() => {
        const data = getCartItems();
        setCandles(data.length);
    }, [candles]);

    const count = () => {
        if (candles <= 0) return " ";
        if (candles >= 10) return "9+";
        return candles;
    };

    console.log("render");

    const renderLinks = (obj: any) => {
        return Object.keys(obj).map((key) => (
            <li key={key}>
                <NavLink to={`/${key}`} className="header-wrapper__link">
                    {obj[key]}
                </NavLink>
            </li>
        ));
    };

    return (
        <div className="header">
            <div className="header-wrapper">

                <Link to="/">
                    <div className="header-wrapper-logo">
                        <img src={headerLogo} alt="logo" width={42} height={42}/>
                        <p>Candles shop</p>
                    </div>
                </Link>

                <div>
                    <nav>
                        <ul>
                            {renderLinks(links)}
                        </ul>
                    </nav>

                    <Link to="/cart">
                        <div className="header-basket">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="10" cy="20.5" r="1"/>
                                <circle cx="18" cy="20.5" r="1"/>
                                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/>
                            </svg>
                            <div className="header-basket-counter">
                                <span>{count()}</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
};
