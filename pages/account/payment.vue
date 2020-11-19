<template>
  <div class="md:flex">
    <!-- P A Y M E N T  D E T A I L S -->
    <div class="w-full md:w-82.5 md:mr-5">
      <h3 class="account-page-label mt-8 md:mt-0 capitalize">
        Payment details
      </h3>

      <div class="shadow-tiny rounded">
        <!-- N A M E -->
        <el-input
          v-model="name"
          class="account-input"
          placeholder="Name"
        />

        <!-- B I L L I N G  A D R E S S -->
        <el-input
          v-model="billingAddress"
          class="account-input"
          placeholder="Billing Address"
        />

        <!-- C I T Y -->
        <el-input
          v-model="city"
          class="account-input"
          placeholder="City"
        />

        <!-- S T A T E -->
        <div class="border-b border-gray-200 bg-white h-12 flex items-center justify-between px-4">
          <span class="text-xs font-bold">State</span>
          <account-select-module
            v-model="state"
            :options="stateOptions"
            placeholder="Select State"
          />
        </div>

        <!-- Z I P -->
        <el-input
          v-model="zip"
          class="account-input"
          placeholder="Zip"
        />

        <!-- C A R D  N U M B E R -->
        <div class="border-b border-gray-200 relative">
          <el-input
            v-model="cardNumber"
            class="account-input border-none"
            placeholder="Card Number"
          />

          <div
            v-if="!cardNumber"
            class="absolute w-32 h-6 bg-contain bg-no-repeat bg-center top-0 right-0 mt-3 mr-4"
            :style="{ backgroundImage: 'url(' + require(`@/assets/images/cards.png`) + ')'}"
          />
        </div>

        <!-- E X P I R A T I O N -->
        <el-input
          v-model="expiration"
          class="account-input"
          placeholder="Expiration"
        />

        <!-- C S V -->
        <el-input
          v-model="csv"
          class="account-input"
          placeholder="CSV"
        />
      </div>

      <p class="text-xs mt-2">
        All fields required
      </p>

      <p class="text-green-650 text-xs mt-4">
        <i class="el-icon-lock" />
        This is a secure Transaction
      </p>

      <!-- D E S K T O P  P A Y  B U T T O N  B L O C K -->
      <div class="hidden md:block">
        <el-button
          type="text"
          class="my-4 bg-red-250 text-white w-full hover:bg-red-250 hover:text-white py-4 uppercase"
          @click="$router.push({ name: 'geographies-voters' })"
        >
          pay $816
        </el-button>

        <p class="text-xs">
          By completing your order you agree to our
          <span class="font-bold">Privacy Policy</span>
          and
          <span class="font-bold">Terms of Use.</span>
        </p>
      </div>
    </div>

    <!-- Y O U R  O R D E R -->
    <div class="w-full md:w-52.5">
      <h3 class="account-page-label mt-8 md:mt-0 capitalize">
        Your order
      </h3>
      <div class="capitalize text-sm rounded bg-gray-250">
        <div class="px-6 order-detail-height border-b border-gray-300 flex items-center justify-between">
          <span>roseland basic</span>
          <span class="w-10">$228</span>
        </div>
        <div class="px-6 order-detail-height border-b border-gray-300 flex items-center justify-between">
          <span>politics update</span>
          <span class="w-10">$588</span>
        </div>
        <div class="px-6 order-detail-height border-b border-gray-300 flex items-center justify-between">
          <span>taxes included</span>
          <span class="w-10">$0</span>
        </div>
        <div class="px-6 order-detail-height flex items-center justify-between font-bold">
          <span>grand total</span>
          <span class="w-10">$816</span>
        </div>
      </div>
    </div>

    <!-- M O B I L E  P A Y  B U T T O N  B L O C K -->
    <div class="md:hidden pb-6 pt-4">
      <el-button
        type="text"
        class="my-4 bg-red-250 text-white w-full hover:bg-red-250 hover:text-white py-4 uppercase"
        @click="$router.push({ name: 'geographies-voters' })"
      >
        pay $816
      </el-button>

      <p class="text-xs">
        By completing your order you agree to our
        <span class="font-bold">Privacy Policy</span>
        and
        <span class="font-bold">Terms of Use.</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AccountSelectModule from '@/components/account/AccountSelectModule.vue'

@Component({
  name: 'payment',
  components: {
    AccountSelectModule
  }
})
export default class Payment extends Vue {
  layout () {
    return 'account'
  }

  /* DATA */
  name = ''
  billingAddress = ''
  city = ''
  state = ''
  zip = ''
  cardNumber = ''
  expiration = ''
  csv = ''

  stateOptions = [
    {
      label: 'Illinois',
      value: 'illinois'
    },
    {
      label: 'Hawaii',
      value: 'hawaii'
    }
  ]
}
</script>

<style lang="scss">
  .order-detail-height {
    height: calc(theme('spacing.12') + theme('spacing.px'));
  }
</style>
