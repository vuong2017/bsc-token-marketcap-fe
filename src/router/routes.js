// routes
import auth from '@/pages/login/router'
import wallet from '@/pages/wallet/router'
import NotFoundPage from '@/pages/NotFound.vue'

export const routes = [
  ...auth,
  ...wallet,
  {
    path: '*',
    component: NotFoundPage,
    meta: { title: 'Not found' }
  }
]
