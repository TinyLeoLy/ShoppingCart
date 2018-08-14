<template>
    <div class="shopping-cart">
        <h1>我的购物车</h1>
        <ul>
            <li v-for="shops in shoppingList">
                <span>{{shops.title}}</span>
                <span>{{ ' ￥ '+ shops.price +' x ️'+shops.num}}</span>
                <br>
                <button @click="removeProduct(shops)">移除</button>
            </li>
        </ul>
        <p>{{'总金额：'+total}}</p>
        <button>提交订单</button>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        name: "ShoppingCart",
        data() {
            return {}
        },
        computed: {
            ...mapGetters('cart', {
                shoppingList: 'cartProduct',
                total: 'cartTotol'
            })
        },
        methods: {
            removeProduct(product) {
                this.$store.dispatch('cart/removeProduct', product);
            }
        }
    }
</script>

<style scoped>

</style>
