import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

export default function SideDrawer({show,click}) {
    const sidedrawerClass = ["sidedrawer"];

    if(show) {
        sidedrawerClass.push("show");
    }

    return <div className={sidedrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart
                        <span className="sidedrawer__cartbadge">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    shop
                </Link>
            </li>
        </ul>
    </div>;
}
