<template>
  <div class="text-blue-850">
    <!-- G E O -->
    <div class="md:flex">
      <div class="w-full md:w-52.5 md:mr-5">
        <h3 class="account-page-label">
          About geography pricing
        </h3>

        <p class="text-s">
          Roseland pricing is based on the geography access. The larger the geographic area, the larger the subsription
          fee. You may increase or narrow your geographic coverage at anytime from your profile.
        </p>
      </div>

      <div class="w-full md:w-82.5">
        <h3 class="account-page-label mt-8 md:mt-0">
          Select geography coverage
        </h3>

        <div class="bg-white shadow-tiny rounded">
          <!-- S E L E C T  S T A T E -->
          <div class="flex items-center border-b border-gray-250 px-6 py-4">
            <span class="w-20 text-indigo-500 text-sm font-bold">State</span>
            <account-select-module
              v-model="selectedState"
              :options="stateOptions"
              placeholder="Select state"
            />
          </div>

          <!-- S E L E C T  C O U N T Y -->
          <div class="flex items-center px-6 py-4">
            <span class="w-20 text-indigo-500 text-sm font-bold">County</span>
            <account-select-module
              v-model="selectedCounty"
              :options="countyOptions"
              placeholder="Select county"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- P L A N -->
    <div class="md:flex mt-8 md:mt-12">
      <div class="w-full md:w-52.5 md:mr-5">
        <h3 class="account-page-label">
          About basic plan
        </h3>

        <p class="text-s">
          Roseland Basic Plan gives you comprehensive real estate data for your coverage area, including visibiliy into
          who owns what and what their annual taxes are.
        </p>
      </div>

      <div class="w-full md:w-82.5">
        <h3 class="account-page-label mt-8 md:mt-0 capitalize">
          Roseland basic plan
        </h3>

        <div class="bg-white shadow-tiny rounded text-center mb-2">
          <h1 class="text-3xl py-4">
            <span class="font-extrabold">$19</span>
            <span class="font-light">/ mon</span>
            <span>*</span>
          </h1>

          <p class="capitalize text-sm  pb-4 border-b border-gray-250">
            15+ Millions Records
          </p>

          <p class="capitalize text-sm py-4 border-b border-gray-250">
            real estate ownership
          </p>

          <p class="capitalize text-sm  py-4 border-b border-gray-250">
            real estate transactions
          </p>

          <p class="capitalize text-sm  py-4">
            property taxes
          </p>
        </div>

        <span class="text-gray-600 text-xs">* Billed annually as $228</span>
      </div>
    </div>

    <!-- P O L I T I C S  P A C K A G E -->
    <div class="md:flex mt-8 md:mt-12">
      <div class="w-full md:w-52.5 md:mr-5">
        <h3 class="account-page-label">
          About politics package
        </h3>

        <p class="text-s">
          The politics package gives subscribers access to voter registration information, voting history and campaign
          contributions.
        </p>
      </div>

      <div class="w-full md:w-82.5">
        <h3 class="account-page-label mt-8 md:mt-0 capitalize">
          politics package
        </h3>

        <div class="bg-white shadow-tiny rounded text-center mb-2">
          <h1 class="text-3xl py-4">
            <span class="font-extrabold">$49</span>
            <span class="font-light">/ mon</span>
            <span>*</span>
          </h1>

          <p class="capitalize pb-4 text-sm  border-b border-gray-250">
            Individual voter history
          </p>

          <p class="capitalize py-4 text-sm  border-b border-gray-250">
            campaign contributions
          </p>

          <p class="capitalize py-4 text-sm  border-b border-gray-250">
            voter registrations
          </p>

          <p class="capitalize text-sm  py-4">
            suspect voter registrations
          </p>

          <toggle-module
            v-model="isAddPoliticsPackage"
            class="px-3.75 mb-4"
            active-text="Add Politics Package"
            :blue-icon="false"
          />
        </div>

        <span class="text-gray-600 text-xs">* Billed as $588</span>

        <el-button
          type="text"
          class="mt-6 bg-red-250 text-white w-full hover:bg-red-250 hover:text-white py-4"
          @click="$router.push({ name: 'account-payment' })"
        >
          Checkout
        </el-button>

        <p class="text-gray-300 text-xs pt-6 pb-12 text-center">
          Copyright &#169; 2018 Roseland
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AccountSelectModule from '@/components/account/AccountSelectModule.vue'
import ToggleModule from '@/components/form-controls/ToggleModule.vue'

@Component({
  name: 'add-plan',
  components: {
    AccountSelectModule,
    ToggleModule
  }
})
export default class AddPlan extends Vue {
  layout () {
    return 'account'
  }

  /* DATA */
  selectedState = ''
  selectedCounty = ''
  isAddPoliticsPackage = true

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

  countyOptions = [
    {
      label: 'Champaign',
      value: 'champaign'
    },
    {
      label: 'Cook',
      value: 'cook'
    }
  ]
}
</script>

<style lang="scss">
</style>
