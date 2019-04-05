import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'
Vue.use(Router)
import Home from '../views/home'
import MPhone from '../views/mphone'
import PageOne from '../views/page_one'

import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_four'
import PageFive from '../views/page_five'
import Shop from '../views/shop'
import Item from '../views/item'
import Cart from '../views/cart'
import Checkout from '../views/checkout'
import Payment from '../views/payment'
import Account from '../views/account'
import Order from '../views/account/Order'
import Address from '../views/account/address'
export default new Router({
  mode: 'history',
  routes: [
 	{
		path : '/',component: Home
	},
	{
		path : '/Home',component: Home
	},
	{
		path : '/MPhone',component: MPhone
	},
	{
		path : '/PageOne',component: PageOne
	},
	{
		path : '/PageTwo',component: PageTwo
	},
	{
		path : '/PageThree',component: PageThree
	},
	{
		path : '/PageFour',component: PageFour
	},
	{
		path : '/PageFive',component: PageFive
	},
 	{
		path : '/Shop',component: Shop
	},
	{
      path: '/cart',name: 'Cart',component: Cart
    },
	{
      path: '/item',name: 'Item',component: Item
    },
    {
      path: '/checkout',name: 'Checkout',component: Checkout
    },
    {
      path: '/payment',name: 'Payment',component: Payment
    },
    {
      path: '/account',
      children: [
        {
          path: '',
          name: 'Account',
          component: Order
        },
        {
          path: '/address',
          name: 'Address',
          component: Address
        }
      ],component: Account
    },
  ]
})
