import React from 'react';
import './Cart.scss';
import {useSelector} from "react-redux";
import CartGame from "./CartGame/CartGame";
import { v4 as uuidv4 } from 'uuid';
import {computePrice, toCurrency} from "../../helpers/helpers";

const Cart = () => {

    const cart = useSelector(state => state.games.cart)

    if(cart.length === 0) {
        return <div className={'cart-title-empty'}>Your cart is empty</div>
    }

    return (
        <>
            <h2 className={'amount'}>Amount to be paid {toCurrency(computePrice(cart))}</h2>
            <div className={'cart-container'}>
                {cart.map(game => {
                    return <CartGame key={uuidv4()} game={game}/>
                })}
            </div>
        </>
    );
};

export default Cart;