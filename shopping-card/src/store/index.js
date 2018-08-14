// 组装模块并导出store的地方
import Vue from 'vue';
import Vuex from 'vuex';
import cart from './module/cart'
import product from './module/product'

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        cart,
        product
    }
});

export default store;
