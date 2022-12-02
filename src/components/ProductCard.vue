<template>
    <div class="card w-100 h-100">
        <div>
            <img class="card-img-top" :src="product.imageURL" alt="Card image cap" />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
                {{product.description}}
            </p>
            <button class="btn btn-secondary">Delete</button>
        </div>
    </div> 
</template> 
<script>
    export default {
        name: "ProductCard",
        props:["product"]
    }

</script>