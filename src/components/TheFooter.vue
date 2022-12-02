<template>
    <div class="container">
        <footer>
            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <ul style="list-style-type: none">
                            <li class="text-light font-weigh-bold pb-2">
                                Subscribe for our news letter for latest deals
                            </li>
                            <li><a class="footer-link font-weight-light" href="#">About Us</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Careers</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <ul style="list-style-type: none">
                            <li class="text-light font-weigh-bold pb-2">
                                Terms and Use
                            </li>
                            <li><a class="footer-link font-weight-light" href="#">Terms & Agreement</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Privacy Policy</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Exertnal Links</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <ul style="list-style-type: none">
                            <li class="text-light font-weigh-bold pb-2">
                                Connect with our team
                            </li>
                            <li><a class="footer-link font-weight-light" href="#">More info</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Deals & Coupons</a></li>
                            <li><a class="footer-link font-weight-light" href="#">Partners</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    </div>
   <!-- <v-footer dark padless>
    <v-card flat tile class="black white--text py-12 px-5" width="100%">
        <v-row>
            <v-cols cols="12" sm="4">
                <v-card-text class="pt-0">
                    <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
                        <v-icon size="30px">
                            {{icon}}
                        </v-icon>
                    </v-btn>
                </v-card-text>
            </v-cols>
        </v-row>
    </v-card> 
   </v-footer> -->
</template>

<script>
export default{

    // data:() => ({
    //     icons: [
    //         'mdi-twitter',
    //         'mdi-facebook',
    //         'mdi-instagram'
    //     ]
    // })
}

</script>
<style>
    footer {
        background-color: darkseagreen;
        font-size: 18px;
        margin-top: 100px;
    }
    a {
        text-decoration: none;
    }
    .footer-link {
        color:aliceblue;
    }

    li {
        padding-bottom: 9px;
    }

</style>