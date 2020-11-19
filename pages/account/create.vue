<template>
  <div class="create-account text-gray-900 xs:w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <h3 class="account-page-label text-center">
      Join Roseland
    </h3>

    <div class="shadow-tiny rounded border border-gray-200">
      <!-- N A M E -->
      <el-input
        v-model="name"
        class="account-input"
        placeholder="Name"
      />

      <!-- E M A I L -->
      <el-input
        v-model="email"
        class="account-input"
        placeholder="Email"
      />

      <!-- P A S S W O R D -->
      <el-input
        v-model="password"
        class="account-input"
        show-password
        placeholder="Password"
      />

      <!-- V E R I F Y  P A S S W O R D -->
      <el-input
        v-model="verifyPassword"
        class="account-input"
        show-password
        placeholder="Verify password"
      />
    </div>

    <!-- N E X T  B U T T O N -->
    <el-button
      type="text"
      class="mt-4 bg-red-250 text-white w-full hover:bg-red-250 hover:text-white"
      @click="$router.push({ name: 'account-add-plan' })"
    >
      Next
    </el-button>

    <p class="text-xs text-center mt-4">
      Already have an account?
      <span class="font-bold text-blue-850 cursor-pointer">Sign In</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'create-account'
})
export default class CreateAccount extends Vue {
  // L A Y O U T
  layout () {
    return 'account'
  }

  /* DATA */
  name = ''
  email = ''
  password = ''
  verifyPassword = ''
}
</script>

<style lang="scss">
  .create-account {
    @apply absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
