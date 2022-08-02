// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// routes
import auth from '@/pages/login/router'
import wallet from '@/pages/wallet/router'
// single pages
import newsPage from '@/pages/news/NewsPage.vue'
import notFoundPage from '@/pages/NotFound.vue'

import { routePropResolver } from './util'

export const routes = [
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
  ...wallet,
  {
    path: '*',
    component: notFoundPage,
    meta: { title: 'Not found' }
  }
]
