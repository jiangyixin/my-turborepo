import React from 'react'

export default [
  {
    path: '/',
    component: React.lazy(
      /* webpackChunkName:"home" */ () => import('./pages/Home')
    ),
  },
  {
    path: '/about',
    component: React.lazy(
      /* webpackChunkName:"about" */ () => import('./pages/About')
    ),
  },
  {
    path: '/users',
    component: React.lazy(
      /* webpackChunkName:"users" */ () => import('./pages/Users')
    ),
  },
]