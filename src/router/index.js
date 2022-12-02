import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCategory from '../views/CatManager/CreateCategory.vue'
import CategoryPage from '../views/CatManager/CategoryPage.vue'
import AdminPanel from '../views/AdminPanel.vue'
import ProductPage from '../views/ProductManager/ProductPage.vue'
import CreateProduct from '../views/ProductManager/CreateProduct.vue'
import EditCategory from '../views/CatManager/EditCategory.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/admin/category/create',
    name: 'CreateCategory',
    component: CreateCategory
  },

  {
    path: '/admin/category',
    name: 'Category',
    component: CategoryPage
  },

  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel
  },

  {
    path: '/admin/product',
    name: 'ProductPage',
    component: ProductPage
  },

  {
    path: '/admin/product/create',
    name: 'CreateProduct',
    component: CreateProduct
  },

  {
    path: '/admit/category/:id',
    name: 'EditCategory',
    component: EditCategory
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router