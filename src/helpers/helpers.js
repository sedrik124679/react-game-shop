export const toCurrency = (price, discount = 0) => {
    let newPrice = discount === 0 ? price : price - (price * discount)
    return new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency'
    }).format(newPrice)
}

export const computePrice = cart => {
    return cart.reduce((total, game) => total += game.price * game.number, 0)
}