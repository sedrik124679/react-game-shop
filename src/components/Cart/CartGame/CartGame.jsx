import React from 'react';
import {toCurrency} from "../../../helpers/helpers";
import {addGameToCart, addToOrders, decreaseNumbers, deleteFromCart, increaseNumbers} from "../../../store/gamesSlice";
import {useDispatch, useSelector} from "react-redux";
import {confirmAlert} from "react-confirm-alert";

const CartGame = ({ game }) => {

    const dispatch = useDispatch()

    const {img, price, number, id, title} = game;

    const addToOrder = (id) => {
        confirmAlert({
            title: `To pay ${toCurrency(number * price)}`,
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(addToOrders(id))
                },
                {
                    label: 'No',
                }
            ],
        });
    }


    return (
        <div className="game">
            <div className="game-img">
                <img src={img} alt="game"/>
            </div>
            <div className={'delete-from-cart'} onClick={() => dispatch(deleteFromCart(id))}>&times;</div>
            <div className="game-info">
                <div className={'game-info-title'}>{title}</div>
                <div className={'game-info-numbers'}>
                    <div className="numbers">In your cart: {number}</div>
                    <div className="numbers-buttons">
                        <div onClick={() => dispatch(decreaseNumbers(id))}>-</div>
                        <div onClick={() => dispatch(increaseNumbers(id))}>+</div>
                    </div>
                </div>
            </div>
            <div className="game-price">{toCurrency(number * price)}</div>
            <div className="game-button" onClick={() => addToOrder(id)}>Confirm purchase</div>
        </div>
    );
};

export default CartGame;