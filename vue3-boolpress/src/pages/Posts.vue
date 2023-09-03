<template lang="">
    <div>
        <h1>
            Posts
        </h1>
    </div>
</template>
<script>
import axios from 'axios';
import SinglePost from '../components/SinglePost.vue';
export default {
    name: 'Posts',
    components: {
        singlePost
    },
    data(){
        return {
            posts: [],
            apiUrl : 'https://127.0.0.1:8000/api/posts'
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
<style lang="">
    
</style>