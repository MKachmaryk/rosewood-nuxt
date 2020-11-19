<template>
  <div>
    <div
      v-if="!!value"
      class="flex items-center h-8 pl-4"
    >
      <span class="text-sm text-indigo-500 mr-2 capitalize">{{ value }}</span>
      <i
        class="el-icon-close text-red-240 text-xs font-extrabold cursor-pointer"
        @click="selectGeo('')"
      />
    </div>

    <select-module
      v-else
      ref="selectModule"
      :value="value"
      :rounded="false"
      :options="options"
      :placeholder="placeholder"
      @input="selectGeo($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import SelectModule from '@/components/form-controls/SelectModule.vue'

@Component({
  name: 'account-select-module',
  components: {
    SelectModule
  }
})
export default class AccountSelectModule extends Vue {
  $refs!: {
    selectModule: any
  }

  @Prop() options!: any
  @Prop() placeholder?: string
  @Prop() value!: string

  /* METHODS */
  selectGeo (selectedGeo: string) {
    this.$emit('input', selectedGeo)
  }

  openSelectModule () {
    this.$refs.selectModule.$children[0].$el.click()
  }
}
</script>
