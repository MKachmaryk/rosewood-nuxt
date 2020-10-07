<template>
  <el-header
    class="header shadow flex items-center"
    :class="isMobileScreen ? 'justify-center' : 'justify-between' "
  >
    <div
      class="flex items-center"
      :class="{
        'header__logo': !isMobileScreen,
        'justify-between': isSidebarOpened
      }"
    >
      <!-- I F  D E S K T O P  S C R E E N -->
      <el-image
        v-if="!isMobileScreen"
        class="cursor-pointer header__logo-image"
        :class="{'header__logo-image--collapsed': !isSidebarOpened }"
        :src="require('@/assets/images/roseland-logo.png')"
        @click="$router.push({ name: 'index' })"
      />

      <div
        class="hamburger cursor-pointer"
        :class="{ 'hamburger--mobile': isMobileScreen }"
        @click="closeOpenSidebar"
      >
        <span class="hamburger__line" />
        <span class="hamburger__line" />
        <span class="hamburger__line" />
      </div>
    </div>

    <!-- I F  M O B I L E  S C R E E N -->
    <el-image
      v-if="isMobileScreen"
      class="cursor-pointer header__logo-image"
      :src="require('@/assets/images/roseland-logo.png')"
      @click="$router.push({ name: 'index' })"
    />
    <span v-if="isMobileScreen" />
  </el-header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'app-header'
})
export default class AppHeader extends Vue {
  @Prop() isSidebarOpened!: boolean
  @Prop() isMobileScreen!: boolean

  /* METHODS */
  closeOpenSidebar () {
    this.$emit('update:is-sidebar-opened', !this.isSidebarOpened)
  }
}
</script>

<style lang="scss">
  .header {
    background-color: theme('colors.indigo.dye');

    &__logo {
      width: 240px;

      &-image {
        width: 112px;
        transition: width .2s ease;
        will-change: width;

        &--collapsed {
          width: 0;
        }
      }
    }

    .hamburger {
      &__line {
        @apply block bg-white my-1;
        width: 18px;
        height: 2px;
      }
    }
    .hamburger--mobile {
      @apply absolute;
      left: theme('spacing.6');
    }
  }
</style>
