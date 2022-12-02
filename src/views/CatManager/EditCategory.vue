<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-4">Update category</h3>
            </div>

        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-5">
                <form v-if="categories">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="categories.name" required/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="categories.description" required/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="categories.image" required/>
                    </div>
                    <button class="btn btn-secondary" @click="updateCategory">apply</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

    export default {
        data() {
            return {
                categories: null,
                id: null
            }
        },
        props: ["homeURL", "category"],
        methods: {
           async updateCategory() {
                delete this.categories["products"]
                await axios.post(`${this.homeURL}/category/update/${this.id}`, this.categories)
                .then(() => {
                    swal({
                        text: "Updated category successfully!",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err))

            }
            
        },
        mounted(){
            this.id = this.$route.params.id;
            this.categories = this.category.find(category=> category.id == this.id)
        }

    }
</script>