import Vue from 'vue'
import VueMq from 'vue-mq'

// Javascript media queries
Vue.use(VueMq, {
  breakpoints: {
    xs: 575,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: Infinity
  }
})
