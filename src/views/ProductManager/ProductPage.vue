
<template>
    <div class="container">
        <div class="row ">
            <div class="col-12 text-center">

                <h5>All Products</h5>
            <router-link :to="{name: 'CreateProduct'}"><button class="btn btn-secondary">Create Product</button></router-link>
            </div>
            
        </div>
        <div class="row">
            <div v-for="prod of products" :key="prod.id" class="col-md-5 col-xl-3 col-12 d-flex" >
                <ProductCard :products="prod" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from "../../components/ProductCard.vue";

export default {
    name: "ProductPage",
    components: {ProductCard},
    props: ["products"]
    
}
</script>

<style>
#container{
    padding-top: 30px;
    margin-top: 20px;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
}

</style>