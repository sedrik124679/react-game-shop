import React from 'react';
import './FilterBar.scss';
import { v4 as uuidv4 } from 'uuid';

const FilterBar = ({ filterValue, setFilterValue }) => {

    const genres = ['RPG', 'Open world', 'Souls like', 'Adventures', 'Fantasy', 'Comedy']

    return (
        <div className={'filterbar'}>
            <select
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
            >
                <option value="disabled" hidden>Choose a genre</option>
                {genres.map(genre => {
                    return <option key={ uuidv4() } value={`${genre}`}>{genre}</option>
                })}
            </select>
        </div>
    );
};

export default FilterBar;