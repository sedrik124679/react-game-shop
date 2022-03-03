import './App.scss';
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import data from './data.json';
import {getDataFromJSON} from "./store/gamesSlice";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";
import CartPage from "./components/Pages/CartPage";
import OrdersPage from "./components/Pages/OrdersPage";
import NotFound from "./components/Pages/NotFound";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataFromJSON(data))
    }, [dispatch])

    const orders = useSelector(state => state.games.orders)

    const isLoading = useSelector(state => state.games.isLoading)
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('')

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Routes>
                    <Route path={'/'}
                           element={<Home
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                filterValue={filterValue}
                                setFilterValue={setFilterValue}/>}
                    />
                    <Route path={'/cart'} element={<CartPage />}/>
                    {orders.length ? <Route path={'/orders'} element={<OrdersPage />}/> : null}
                    <Route path={'*'} element={<NotFound />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
