import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $mq: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }
}
