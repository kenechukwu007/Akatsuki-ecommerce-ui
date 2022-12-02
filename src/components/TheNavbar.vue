<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <!--   click logo to home screen from any page Logo-->
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <img id="logo" src="../../public/logo.png" height="70px" />
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      <router-link :to="{ name: 'Admin' }"> Admin </router-link>
    </div>
  </nav>
    <!-- <v-app-bar app color="#EFF02" dark>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-divider vertical class="ml-1 mr-3"></v-divider>

        <v-btn icon>
            <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-toolbar-title>
            <span class="caption">Choose</span><br>Category
        </v-toolbar-title>
        <v-divider vertical class="ml-5"></v-divider>

        <div style="position:absolute; margin-left:auto; margin-right:auto; left:0; right:0; text-align: center;">
            <h4>Akatsuki-Gamez</h4>
        </div>
        
        <v-spacer></v-spacer>
        <v-divider vertical></v-divider>
        <router-link :to="{name:'AdminPanel'}">Admin</router-link>

        <v-divider vertical></v-divider>
        <v-btn icon class="mx-1">
            <v-badge color="#94D0EF" content="0">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>

    </v-app-bar> -->
</template>

<script>


export default {
    name: "TheNavbar",
   
}

</script>

<style>
.v-toolbar__title{
    font-size: 1rem !important;
}
.v-badge__badge{
    font-size: 12px !important;
    height: 20px !important;
    min-width: 20px !important;
}

</style>