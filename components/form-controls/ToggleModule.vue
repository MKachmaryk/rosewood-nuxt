<template>
  <el-switch
    class="toggle"
    active-color="#fff"
    inactive-color="#fff"
    :active-text="activeText"
    :inactive-text="inactiveText"
    :value="value"
    @change="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'toggle'
})
export default class Toggle extends Vue {
  @Prop() value!: boolean
  @Prop() activeText?: string
  @Prop() inactiveText?: string

  /* METHODS */
}
</script>

<style lang="scss">
</style>
