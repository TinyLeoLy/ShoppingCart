//购物车模块
import shop from '../../api/shop'

const cart = {
    namespaced: true,
    state: {
        items: [], // 选中的商品
    },
    mutations: {
        // 将选中的商品添加到购物车中(没有添加过)
        pushProuctToCart(state, {id}) {
            state.items.push({
                id,
                num: 1
            });
        },
        // 删除其中的一项
        delCartListItem(state, {id}) {
            const prodIndex = state.items.findIndex(item => item.id === id);
            state.items.splice(prodIndex, 1)
        },
        //将选中的商品添加到购物车中(添加过)
        groupUpProuctToCart(state, {id}) {
            const prod = state.items.find(item => item.id === id);
            prod.num++;
        },
        //将选中的商品添加到购物车中(添加过)
        groupDownProuctToCart(state, {id}) {
            const prod = state.items.find(item => item.id === id);
            prod.num--;
        }
    },
    actions: {
        addProduct({state, commit}, product) {
            // 如果超出上线以后不能添加
            if (product.total === 0) {
                return
            }
            // 更新购物车,判断本次添加是否是第一次添加
            const extProduct = state.items.find(item => item.id === product.id);
            if (extProduct) { // 存在
                commit('groupUpProuctToCart', extProduct)
            } else { // 不存在
                commit('pushProuctToCart', {
                    id: product.id
                })
            }
            // product中的数据也要相应的减一
            commit('product/doProductList', {id: product.id, type: 'down'}, {root: true})
        },
        // 移除购物车
        removeProduct({state, commit}, product) {
            const extProduct = state.items.find(item => item.id === product.id);

            commit('groupDownProuctToCart', extProduct)
            commit('product/doProductList', {id: product.id, type: 'up'}, {root: true})
            // 如果超出下线以后不能减少
            if (product.num === 1) {
                commit('delCartListItem', {id: product.id})
                return
            }
        }
    },
    getters: {
        // 计算购物车商品
        cartProduct(state, getter, rootState) {
            return state.items.map(item => {
                const product = rootState.product.all.find(val => {
                    return item.id === val.id
                });
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    num: item.num
                }
            });
        },
        // 计算总金额
        cartTotol(state, getter) {
            return getter.cartProduct.reduce((totle, item) => {
                return totle + item.price * item.num;
            }, 0);
        }
    }
}
export default cart;
