<template>
  <div id="homeview">
    <div id="background-con" class="page-holder bg-cover">

      <div class="container py-5">
        <header class="text-black py-4">
          <h2 class="mb-4 rounded" id="welcome-text">Welcome to Akatsuki gamez</h2>
        <p class="lead mb-0 bg-dark p-1 rounded" > 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo
          luptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </header>
       
      </div>
      <br/>
   
    </div>
    <div class="container">
        <div class ="row">
          <div class="col-11 text-center">
            <h3 class="pt-4">All categories</h3>
          </div>
        </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="i in this.size" :key="i" class="col-md-6 col-xl-3 col-12 pt-4 justify-content-around">
          <CateBox  :category="category[i-1]"/>
        
        </div>
      </div>
      <v-row>
        <v-col cols="6" sm="4" v-for="(val, i) in merchandise" :key="i" :class="val.class">
          <v-hover v-slot:default="{hover}">
            <v-card height="300" align="center" flat outlined tile>
              
              <v-img :src="val.image" width="200" height="200" contain></v-img>
              <v-card-text class="mt-n4">
                <strong :class="hover ? 'red--text' : 'black--text'">{{val.title}}</strong>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CateBox from '@/components/manager/CateBox.vue';



export default {
  name: "HomeView",
  components: { CateBox },
  props: ["category"],

  data() {

    

    return {
      size: 0,
      merchandise: [
        {
          class: 'pa-0',
          image: 'chair1.png.jpg',
          title: 'DeadPool chair',
          price: 'C$ 200.00',
        },

        {
          class: 'pa-0',
          image: 'chair2.pn.jpg',
          title: 'Batman chair',
          price: 'C$ 250.00',
        },

        {
        class: 'pa-0',
        image: 'ps5.png.jpg',
        title: 'PS5 digital E',
        price: 'C$ 650.00',
        },

        {
        class: 'pa-0',
        image: 'ps5Disk.png',
        title: 'PS5 disk D',
        price: 'C$ 750.00',
        },

        {
        class: 'pa-0',
        image: 'desk1.png.jpg',
        title: 'Viper desk',
        price: 'C$ 150.00',
        },

        {
        class: 'pa-0',
        image: 'desk2.png.jpg',
        title: 'Logger desk',
        price: 'C$ 350.00',
        },

        {
        class: 'pa-0',
        image: 'spida.png.jpg',
        title: 'PS5 spider man Ed',
        price: 'C$ 750.00',
        },

        {
        class: 'pa-0',
        image: 'xboxw.png.jpg',
        title: 'white Xbox 1 S',
        price: 'C$ 650.00',
      },

      {
        class: 'pa-0',
        image: 'whitecontroller.png.jpg',
        title: 'white ps5 controller',
        price: 'C$ 650.00',
      },




      ]
    }
    

  },
  mounted() {
    this.size = this.category.length;
    this.size = Math.min(6, this.category.length);
  }

};
</script>

<style scoped>
.page-holder{
  min-height: 80vh;
}
  .index{
    z-index: 9999;
  }

  #background-con {
    background: url("../../public/akalogo.png");
  }
  .bg-cover {
    background-size: cover !important;
  }
  #welcome-text{
    font-weight: 500;
    text-align: center;
    text-decoration-color: aqua;
  }
</style>
