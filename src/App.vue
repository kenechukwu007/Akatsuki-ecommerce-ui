<template>
  <div id="nav">
    <div class="container">
      <TheNavbar />   
      <router-view v-uf="category && products"
      :homeURL="homeURL" :category="category" :products="products">
      </router-view>
    </div>
   
    <TheFooter />
  </div>
  
  
</template>


<script>
import axios from "axios";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";


export default {
  components: { TheNavbar, TheFooter },

  data() {
    return {
      homeURL: "https://akatsuki-api.azurewebsites.net",
      products: null,
      category: null
    }

  },
  methods: {
    async getData() {
      await axios.get(this.homeURL + "/category/list/")
      .then(res =>{
        this.category = res.data
      }).catch((err) => console.log('err', err));

      // this makes a request to the api to retrieve products
      await axios.get(this.homeURL + "/product/")
      .then(res =>{
        this.products = res.data
      }).catch((err) => console.log('err', err));
    }
    
  },
  mounted() {
    this.getData();
  },

};

</script>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:aquamarine;


}

#nav{
  padding: 30px;
}
</style>