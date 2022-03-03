import {createSlice} from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: "games",
    initialState: {
        games: [],
        cart: [],
        orders: [],
        selectedGame: [],
        isLoading: false
    },
    reducers: {
        getDataFromJSON(state, action) {
            state.isLoading = true
            state.games = action.payload
            state.isLoading = false
        },
        addGameToCart(state, action) {
            const index = state.cart.findIndex(i => i.id === action.payload.id)
            if(index >= 0) {
                state.cart[index].number++
            } else {
                state.cart.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.discount > 0
                        ? action.payload.price - action.payload.discount * action.payload.price
                        : action.payload.price
                    ,
                    img: action.payload.img,
                    number: 1
                })
            }
        },
        increaseNumbers(state, action) {
            state.cart[state.cart.findIndex(i => i.id === action.payload)].number++
        },
        decreaseNumbers(state, action) {
            const index = state.cart.findIndex(i => i.id === action.payload)
            state.cart[index].number--
            if(state.cart[index].number === 0) {
                state.cart[index].number--
                state.cart.splice(index, 1)
            }
        },
        deleteFromCart(state, action) {
            state.cart.splice(state.cart.findIndex(i => i.id === action.payload), 1)
        },
        addToOrders(state, action) {
            const index = state.cart.findIndex(i => i.id === action.payload)
            const game = state.cart.splice(index, 1)
            game[0].date = new Date().toISOString();
            state.orders.push(...game)
        }
    }
})

export const {getDataFromJSON, addGameToCart, increaseNumbers, decreaseNumbers, deleteFromCart, addToOrders} = gamesSlice.actions;

export default gamesSlice.reducer