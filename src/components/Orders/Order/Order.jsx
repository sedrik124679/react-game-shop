import React from 'react';
import {toCurrency} from "../../../helpers/helpers";

const Order = ({ order }) => {
    return (
        <>
            <div className="order">
                <div className="order-info">
                    <div className="order-title">{order.title} {order.number}x</div>
                    <div className={'order-price'}>{toCurrency(order.number * order.price)}</div>
                </div>
                <div className="order-date">{order.date.split('T')[0]} | {order.date.split('T')[1].split('.')[0]}</div>
            </div>
            <hr/>
        </>
    );
};

export default Order;