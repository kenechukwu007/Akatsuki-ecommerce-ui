<template>
    <div class="container">
        <div class="row">
            <div class="col-11 text-center pt-4">
                <!-- logo here-->
            </div>
        </div>
        <div class="row">
            <div class="col-11 text-center pt-4">
                <div id="register-con" class="flex-item-border">
                    <h3 class="pt-3 pl-3">Create User Account</h3>
                    <form  @submit="register" class="pt-3 pl-3 pr-4">
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" v-model="firstName" required />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" v-model="lastName" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <input type="email" class="form-control" v-model="userName" required />
                        </div>
                        <div class="form-group">
                            <label for="Username">Password</label>
                            <input type="text" class="form-control" v-model="password" required />
                        </div>
                        <div class="form-group">
                            <label for="Username ">Confirm Password</label>
                            <input type="text" class="form-control" v-model="confirmPass" required />
                        </div>
                        <button class="btn btn-secondary" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

import axios from 'axios';
import swal from 'sweetalert';

    export default{

        name: "RegisterPage",
        props: ["homeURL"],

        data() {
            return {

                firstName: null,
                lastName: null,
                userName: null,
                password: null,
                confirmPass: null,
            };
        },

        methods: {
            async register(e) {
                e.preventDefault();
                if(this.password === this.confirmPass){
                    const appUser = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        password: this.password,
                        verifyPassword: this.confirmPass
                        
                    
                    };

                    await axios.post(`${this.homeURL}/user/register`, appUser)
                    .then(()=>{
                        this.$router.replace("/");
                        swal({
                            text: "Account has been created successfully!",
                            icon: "success"
                        });
                    }).catch((err) =>{
                        console.log(err);
                    });
                //     const homeUrl = "https://akatsuki-api.azurewebsites.net";
                //    await axios({
                //             method: 'post',
                //             url: `${homeUrl}/user/register`,
                //             data: JSON.stringify(appUser),
                //             headers: {
                //                 'Content-type': 'application/json'
                //             }
                //     })

                } else {
                    // show error
                    swal({
                        text: "the passwords don't match, try again",
                        icon: "error"
                    });
                }

            },
        },

    };

</script>

<style scoped>
.btn-secondary {
    background-color: black;
}

</style>