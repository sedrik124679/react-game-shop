import React from 'react';
import './Orders.scss';
import {useSelector} from "react-redux";
import Order from "./Order/Order";
import { v4 as uuidv4 } from 'uuid';

const Orders = () => {

    const orders = useSelector(state => state.games.orders)

    if(orders.length === 0) <h2>Loading...</h2>

    return (
        <div className={'orders-container'}>
            {orders.map(order => <Order key={uuidv4()} order={order} />)}
        </div>
    );
};

export default Orders;