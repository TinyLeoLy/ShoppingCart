<template>
    <div class="product-list">
        <h1>商品列表</h1>
        <ul>
            <li v-for="product in productList">
                <span>{{product.title}}</span>
                <span>{{'剩余件数：'+ product.total}}</span>
                <br/>
                <button @click="addProduct(product)">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ProductList",
        data() {
            return {}
        },
        computed:mapState({
            productList:state => state.product.all
        }),
        methods:{
            addProduct(product){
                this.$store.dispatch('cart/addProduct',product);
            }
        },
        created () {
            this.$store.commit({
                type:'product/getProduct'
            });
        }
    }
</script>

<style scoped>

</style>
