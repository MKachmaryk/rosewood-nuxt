<template>
  <div class="cascader-geo-module relative">
    <!-- C H O S E N  G E O -->
    <div
      class="flex items-center justify-between py-2 cursor-pointer rounded-lg cascader-geo-module__chosen-geo border border-transparent relative z-50"
      :class="isValueChosen ? 'hover:bg-white hover:shadow-tiny hover:border-solid hover:border hover:border-gray-250' : 'bg-white shadow-tiny border border-gray-250'"
      @click="openCascaderModule"
    >
      <template v-if="!isValueChosen">
        <p class="pl-5 text-s">
          {{ placeholder }}
        </p>
      </template>

      <template v-else>
        <!-- C H E C K  M A R K -->
        <i
          class="icon-checkmark el-icon-error"
        />

        <span
          class="ml-5 text-s font-light capitalize w-20"
        >
          {{ geoType }}
        </span>

        <span class="text-s capitalize w-45 pl-4 font-bold">
          {{ geoData }}
        </span>
      </template>
    </div>

    <!-- C A S C A D E  M O D U L E -->
    <CascaderModule
      ref="cascaderModule"
      class="w-full"
      :value="value"
      :options="options"
      @input="selectGeo"
    />

    <!-- C A S C A D E R  G E O  M O D U L E  D I V I D E R -->
    <div
      v-if="isDivider"
      class="cascader-geo-module__divider z-10"
    >
      <span
        v-for="item in 16"
        :key="item"
        class="w-px h-px block bg-gray-850 mb-px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import CascaderModule from '@/components/form-controls/CascaderModule.vue'

@Component({
  name: 'cascader-geo-module',

  components: {
    CascaderModule
  }
})
export default class CascaderGeoModule extends Vue {
  $refs!: {
    cascaderModule: any
  }

  @Prop() options!: any[]
  @Prop() value!: string[]
  @Prop({ default: false }) isDivider?: boolean
  @Prop({ default: 'placeholder' }) placeholder?: string
  @Prop() cascaderGeoItemIndex!: number
  @Prop() filteringGeoListLength!: number

  /* COMPUTED */
  get isValueChosen () {
    return !!this.value.length
  }

  get geoType () {
    return this.value[0]
  }

  get geoData () {
    return this.value[1]
  }

  /* METHODS */
  selectGeo (selectedValue: string[]) {
    this.$emit('input', selectedValue)

    // add new geo item
    if (this.cascaderGeoItemIndex === this.filteringGeoListLength - 1 && this.filteringGeoListLength !== 5) {
      const newGeoItem = {
        selectedOptions: [],
        options: this.options
      }
      this.$emit('item-click', newGeoItem)
    }
  }

  openCascaderModule () {
    this.$refs.cascaderModule.$children[0].$el.click()
  }
}
</script>

<style lang="scss">
  .cascader-geo-module {
    &__chosen-geo {
      &:hover {
        i {
          @apply hidden;
        }
      }
    }

    &__divider {
      @apply absolute bottom-0;
      left: 48px;
      bottom: -4px;
    }
  }
</style>
