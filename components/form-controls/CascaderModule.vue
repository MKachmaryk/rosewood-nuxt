<template>
  <el-cascader
    v-model="selectedOptions"
    :options="options"
    :popper-append-to-body="false"
    placeholder="Please select some geo"
    @change="onCascaderChange"
    @visible-change="visibleChange"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'cascader-module'
})
export default class CascaderModule extends Vue {
  @Prop() options!: any[]
  @Prop() value!: string[]

  /* DATA */
  selectedOptions = []

  /* METHODS */
  onCascaderChange (selectedValue: string[]) {
    this.$emit('input', selectedValue)
  }

  visibleChange (isVisible: boolean) {
    if (isVisible) {
      const elCascader = document.querySelector('.el-cascader') as HTMLElement
      const elCascaderDropdown = document.querySelector('.el-cascader__dropdown') as HTMLElement
      elCascaderDropdown.style.width = elCascader.offsetWidth + 'px'
    }
  }
}
</script>
