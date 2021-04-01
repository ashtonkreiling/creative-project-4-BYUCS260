import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Feed from '../views/Feed.vue'
import ForgotPassword from '../views/Forgot-Password.vue'
import Groups from '../views/Groups.vue'
import Profile from '../views/Profile.vue'
import Projects from '../views/Projects.vue'
import SignUp from '../views/Sign-Up.vue'
import Petitions from '../views/Petitions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/petitions',
    name: 'Petitions',
    component: Petitions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
