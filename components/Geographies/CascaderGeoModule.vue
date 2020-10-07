<template>
  <div>
    <!-- C H O S E N  G E O -->
    <div
      v-show="!selected"
      class="flex items-center justify-between py-4 cursor-pointer"
      @click="openCascaderModule"
    >
      <!-- C H E C K  M A R K -->
      <i
        class="icon-checkmark el-icon-error"
      />

      <span
        class="ml-5 text-s font-light capitalize w-20"
      >
        {{ value[0] }}
      </span>

      <span class="text-s font-light capitalize w-45">
        {{ value[1] }}
      </span>
    </div>

    <!-- C A S C A D E  M O D U L E -->
    <CascaderModule
      v-show="selected"
      ref="cascaderModule"
      class="w-full"
      :value="value"
      :options="options"
      @input="selectGeo($event)"
    />
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
  @Prop() selected!: boolean

  /* HOOKS */
  created () {
    if (process.client) {
      const self = this
      window.addEventListener('click', function (e) {
        // close dropdown when clicked outside
        if (!self.$el.contains((e as any).target)) {
          self.$emit('update:selected', false)
        }
      })
    }
  }

  /* COMPUTED */
  get isValueChosen () {
    return !!this.value.length
  }

  /* METHODS */
  selectGeo (selectedValue: string[]) {
    this.$emit('input', selectedValue)
    this.$emit('update:selected', !this.selected)
  }

  openCascaderModule () {
    this.$emit('update:selected', !this.selected)
    this.$nextTick(() => {
      this.$refs.cascaderModule.$children[0].$el.click()
    })
  }
}
</script>
