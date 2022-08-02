// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// routes
import auth from '../pages/login/router'
// single pages
import homePage from '../pages/Home.vue'
import newsPage from '../pages/news/NewsPage.vue'
import notFoundPage from '../pages/NotFound.vue'

import { routePropResolver } from './util'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: 'Home' }
  },
  {
    path: '/news',
    name: 'news',
    component: newsPage,
    meta: { title: 'News' },
    props: routePropResolver
  },
  {
    path: '/profile',
    component: profilePage,
    meta: { isAuth: true, title: 'Profile' },
    children: [
      {
        path: '',
        name: 'profile',
        component: profilePostsPage
      }
    ]
  },
  ...auth,
  {
    path: '*',
    component: notFoundPage,
    meta: { title: 'Not found' }
  }
]
