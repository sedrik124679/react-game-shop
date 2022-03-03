import React, { useMemo } from 'react';
import './Games.scss';
import Game from "../Game/Game";
import {v4 as uuidv4} from 'uuid';
import {useSelector} from "react-redux";

const Games = ({searchValue, filterValue, setFilterValue}) => {
    const games = useSelector(state => state.games.games)

    const filterGames = useMemo(() => {
        if (games) {
            if (filterValue) {
                return games.filter((game) => game.genres.includes(filterValue))
            }
        }
        return games
    }, [filterValue, games])

    const searchBar = useMemo(() => {
        if (games) {
            return filterGames.filter(game => game.title.toLowerCase().includes(searchValue.toLowerCase()))
        }
    }, [filterGames, searchValue])

    return (
        <>
            {filterValue && <h3 className={'genre-name'}>Genre: {filterValue}</h3>}
            <div className={'games-container'}>
                {games
                    ? searchBar.length
                        ? searchBar.map(game => <Game key={uuidv4()} setFilterValue={setFilterValue} game={game}/>)
                        : <h2>Empty</h2>
                    : <h2>Shop is empty</h2>
                }
            </div>
        </>
    );
};

export default Games;