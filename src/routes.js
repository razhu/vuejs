import User from './components/user/User.vue'
import Home from './components/Home.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserStart from './components/user/UserStart.vue'

export const routes = [
  {
    path: '/', component: Home
  },
    {
    path: '/user', component: User
  }
]