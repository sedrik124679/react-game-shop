import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ searchValue, setSearchValue }) => {
    return (
        <div className={'search'}>
            <input
                type="search"
                placeholder={'Search something'}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}/>
        </div>
    );
};

export default SearchBar;