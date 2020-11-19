<template>
  <div class="account">
    <div class="w-full sm:w-full lg:w-1/2 h-full p-4">
      <!-- R O S E L A N D  L O G O -->
      <el-image
        :src="require('@/assets/images/roseland-logo-black.png')"
        class="account__logo"
      />

      <el-steps
        v-if="!$route.name.includes('account-create')"
        :active="activeStep"
        class="mt-16 mb-12"
      >
        <!-- S T E P  1 -->
        <el-step title="Account">
          <div
            slot="icon"
            :style="{ backgroundImage: 'url(' + require(`@/assets/images/account.png`) + ')'}"
            class="bg-contain bg-no-repeat bg-center w-8 h-8"
          />
        </el-step>

        <!-- S T E P  2 -->
        <el-step>
          <div
            slot="icon"
            :style="[ activeStep === 1 ?
              { backgroundImage: 'url(' + require(`@/assets/images/account-plan-in-progress.png`) + ')'} :
              { backgroundImage: 'url(' + require(`@/assets/images/account-plan.png`) + ')'}
            ]"
            class="bg-contain bg-no-repeat bg-center w-8 h-8"
          />
          <span slot="title" class="ml-4">Plan</span>
        </el-step>

        <!-- S T E P  3 -->
        <el-step title="Payment">
          <div
            slot="icon"
            :style="{ backgroundImage: 'url(' + require(`@/assets/images/account-payment.png`) + ')'}"
            class="bg-contain bg-no-repeat bg-center w-8 h-8"
          />
        </el-step>
      </el-steps>

      <!-- A U T H  M A I N  C O N T E N T -->
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  name: 'account'
})
export default class Auth extends Vue {
  activeStep = 2

  /* WATCHERS */
  @Watch('$route', { immediate: true, deep: true })
  onRouteChanged (route: any) {
    switch (route.name) {
      case 'account-create':
        this.activeStep = 0
        return
      case 'account-add-plan':
        this.activeStep = 1
        return
      case 'account-payment':
        this.activeStep = 2
    }
  }
}
</script>

<style lang="scss">
</style>
