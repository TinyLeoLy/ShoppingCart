// 商品模块
import shop from '../../api/shop'

const products = {
    namespaced: true,
    state: {
        all: [] // 所有的商品
    },
    getters: {},
    mutations: {
        getProduct(state) {
            shop.getProduct(product => {
                state.all = product;
            });
        },
        // 增减操作
        doProductList(state, {id, type}) {
            const product = state.all.find(product => product.id === id)
            if (type === 'up') {
                product.total++;
            } else if (type === 'down') {
                product.total--;
            }
        }
    },
    actions: {}
}

export default products;
