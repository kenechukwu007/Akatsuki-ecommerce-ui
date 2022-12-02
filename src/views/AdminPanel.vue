<template>
    <div id="container">
        <div class="row">
            <router-link :to="{name:'Category'}">
            <button class="btn btn-secondary btn-lg">Category</button>
            </router-link>
            <br />
            <br />
            <router-link :to="{name:'ProductPage'}">
                <button class="btn btn-secondary btn-lg">Products</button>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {

    name: 'AdminPanel',
   
}
</script>
<style>
#row{
    padding-top: 20px;
    margin-top: 20px;
    text-align: center;
}

</style>