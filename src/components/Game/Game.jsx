import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from "react-redux";
import {addGameToCart} from "../../store/gamesSlice";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Game.scss'
import {toCurrency} from "../../helpers/helpers";
import discountIcon from './discount-icon.svg';

const Game = ({game, setFilterValue}) => {

    const {img, price, discount, title, genres, id} = game;

    const dispatch = useDispatch();

    const addToCart = (game) => {
        confirmAlert({
            title: `Do you want to buy a ${game.title}?`,
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(addGameToCart(game))
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
                <img src={`${img}`} alt={`${img}`}/>
            </div>

            {discount
                ? <div className="discount-block">
                    <small>{discount * 100}</small>
                    <img className={'discount-icon'} src={discountIcon} alt={'discount'}></img>
                </div>
                : null
            }

            <div className="game-price">
                {discount
                    ? <small>{(toCurrency(price, discount))} </small>
                    : null
                }
                <small style={discount
                    ? {'textDecoration': 'line-through'}
                    : null
                }>{toCurrency(price)}</small>
            </div>

            <div className="game-info">
                <div className={'game-title'}>{title}</div>
                <div className="game-genres">
                    {genres.map(genre => {
                        return <div className={'genre'}
                                    onClick={() => setFilterValue(genre)}
                                    key={uuidv4()}
                        >{genre}</div>
                    })}
                </div>

                <div className="game-btn" onClick={() => addToCart(game)}>Buy</div>
            </div>
        </div>
    );
};

export default Game;