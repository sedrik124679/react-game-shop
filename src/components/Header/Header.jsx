import React from 'react';
import './Header.scss';
import {useSelector} from "react-redux";
import {computePrice, toCurrency} from "../../helpers/helpers";
import cartLogo from './cart.svg';
import {Link} from "react-router-dom";

const Header = () => {

    const cart = useSelector(state => state.games.cart)
    const orders = useSelector(state => state.games.orders)

    return (
        <header>
            <Link to={'/'} className="logotype">EugeneKrabs logo</Link>
            {orders.length ? <Link to={'orders'} className={'orders-link'}>Your orders</Link> : null}
            <Link to={'/cart'} className={'cart'}>
                <img src={cartLogo} alt="cartlogo"/>
                {cart.length > 0
                    ? <div>{toCurrency(computePrice(cart))}</div>
                    : null
                }
            </Link>
        </header>
    );
};

export default Header;