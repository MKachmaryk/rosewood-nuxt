<template>
  <el-container direction="vertical" class="app flex-col">
    <app-header
      :is-sidebar-opened.sync="isSidebarOpened"
      :is-mobile-screen="isMobileScreen"
    />

    <el-container class="flex-col md:flex-row">
      <!-- S I D E B A R -->
      <app-sidebar
        :opened="isSidebarOpened"
        :is-mobile-screen="isMobileScreen"
      />

      <!-- M A I N  C O N T E N T -->
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

@Component({
  name: 'index',

  // C O M P O N E N T S
  components: {
    AppHeader,
    AppSidebar
  }
})
export default class Index extends Vue {
  /* DATA */
  isSidebarOpened = false

  head () {
    return {
      title: 'rosewood'
    }
  }

  /* HOOKS */
  mounted () {
    if (!this.isMobileScreen) {
      this.isSidebarOpened = true
    }
  }

  /* WATCHERS */
  @Watch('$mq')
  on$mqChanged (newVal: string) {
    this.isSidebarOpened = !(newVal === 'xs' || newVal === 'sm')
  }

  /* COMPUTED */
  get isMobileScreen () {
    return ['xs', 'sm'].includes(this.$mq)
  }
}
</script>

<style lang="scss">
  .app {
    min-height: 100vh;
    background-color: theme('colors.gray.100');

    .slide-enter-active,
    .slide-leave-active {
      transition: transform 0.6s ease;
    }

    .slide-enter,
    .slide-leave-to {
      transform: translateX(-100%);
      transition: all 400ms ease-in 0s;
    }

    .el-main {
      @apply p-0;
    }
  }
</style>
