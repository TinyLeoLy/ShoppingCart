const _products = [
    {id: 1, title: 'MacBook Air', total: 10, price: 8999},
    {id: 2, title: 'MacBook Pro', total: 5, price: 12999},
    {id: 3, title: 'iPhone X', total: 2, price: 7999}
]

export default {
    getProduct(callback) {
        callback(_products)
    }
}
