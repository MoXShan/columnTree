import Vue from 'vue'
import Router from 'vue-router'
import LabelTree from '@/components/LabelTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LabelTree',
      component: LabelTree
    }
  ]
})
