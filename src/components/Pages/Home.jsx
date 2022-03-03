import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import Games from "../Games/Games";

const Home = ({ searchValue, setSearchValue, filterValue, setFilterValue }) => {

    return (
        <>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <FilterBar
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
            <Games searchValue={searchValue}
                   filterValue={filterValue}
                   setFilterValue={setFilterValue}
            />
        </>
    );
};

export default Home;