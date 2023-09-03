<template>
    <h1>
        Main
    </h1>
    <div class="single-post" v-for= "post in posts">
        <h2 >
            {{ posts.title }}
        </h2>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data(){
        return {
            posts:[],
            apiUrl: 'http//127.0.0.1:8000/api/posts',
        }

    },
    methods: {
        getPosts(){
            axios.get(this.apiUrl, {
    params: {

      
    }
  })
  .then((response)=> {
    console.log(response.data.results.data);
    this.posts = response.data.results.data;
  })
  .catch(function (error) {
    console.log(error);
  });  

        }
    },

    created(){
        this.getPosts();
    }
}

</script>

<style lang="scss">

</style>