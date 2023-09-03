import { createRouter, createWebHistory} from "vue-router";
import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';
import Posts from './pages/posts.vue';
import SinglePost from './pages/SinglePost.vue';
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,

        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs,

        },
        {
            path: '/posts',
            name: 'posts.index',
            component: Posts,

        },
        {
            path: '/posts/show',
            name: 'posts.show',
            component: SinglePost,

        },
        
    ]
})

export { router};