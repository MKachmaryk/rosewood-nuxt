<template>
  <el-select
    class="select-module"
    :value="value"
    :placeholder="placeholder"
    popper-class="-mt-4"
    :popper-append-to-body="popperAppendToBody"
    @change="$emit('input', $event)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'select-module'
})
export default class SelectModule extends Vue {
  @Prop() placeholder?: string
  @Prop() value!: string
  @Prop() options!: { label: string, value: string }[]
  @Prop({ default: true }) popperAppendToBody?: boolean
}
</script>

<style lang="scss">
</style>