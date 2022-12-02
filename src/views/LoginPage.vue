<template>
    <div class="container">
        <div class="row">
            <div class="col-11 justify-content-center">
                <div id="login" class="flex-item border">
                    <h3 class="pt-3"> User log-in</h3>
                </div>
                <form @submit="login" class="form-group pt-2 pl-2 pr-2">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="email" v-model="userName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" v-model="password" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-secondary">Log in</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    props: ["homeURL"],

    data() {
        return {
            userName: null,
            password: null,
        };
    },

    methods: {
        async login(e) {
            e.preventDefault();
            const newSession = {
                username: this.userName,
                password: this.password
            };
            await axios.post(`${this.homeURL}/user/login`, newSession)
            .then (()=>{
                this.$router.replace("/");
                swal({
                    text: "User logged in successfully!",
                    icon: "success"
                });
            }).catch((err) =>{
                        console.log(err);
                });
        }
    }
}
 
</script>