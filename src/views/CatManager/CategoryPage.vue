<template>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3">Category list</h2>
                <router-link :to="{name: 'CreateCategory'}">
                    <button class="btn btn-secondary">Create Category</button>
                </router-link>
            </div>
        </div>
        <!--<div>{{category[0]}}</div>-->

        <div class="row">
            <div v-for="cate of category" :key="cate.id" class="col-xl-5 col-md-5 col-12 pt-3 d-flex">
                <CateBox :category="cate"></CateBox>
            </div>
       </div>
    </div>
</template>

<script>
import CateBox from '../../components/manager/CateBox.vue';

export default {
    name: "CategoryPage",
    props: ["category"],
    components: {CateBox},

   data() {
        return {
             homeUrl: "https://akatsuki-api.azurewebsites.net",
             
        };
   },
   methods: {
    // async getAllcategory() {
    //     await axios.get(`${this.homeUrl}/category/list`)
    //     .then(res => this.category= res.data)
    //     .catch(err => console.log(err))
    // }
   },

   mounted() {
    //this.getAllcategory();
   }
   
};

</script>

<style scoped></style>