<template>
    <div>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{{ name: link.route }}">
                        {{ link.name }}
                        
                    </router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            links: [
                {
                    route: 'homepage',
                    name: 'Homepage'

                },
                {
                    route: 'about',
                    name: 'About Us'

                },
                {
                    route: 'posts.index',
                    name: 'Posts'
                },
               
            ]
        }
    },
}

</script>

<style lang="scss">
nav {
    width:100%;
    padding: 1rem 3rem;
    background-color: grey;
    color: black;
    ul{
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 3rem;
        list-style-type: none;

        li{
            margin-right: 2rem;
        }

    }
}

</style>