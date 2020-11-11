<template>
  <el-select
    ref="selectModule"
    class="select-module"
    :value="value"
    :placeholder="placeholder"
    :popper-class="popperClassModule"
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

import { ElSelect } from 'element-ui/types/select'

@Component({
  name: 'select-module'
})
export default class SelectModule extends Vue {
  $refs!: {
    selectModule: ElSelect
  }

  @Prop() placeholder?: string
  @Prop() value!: string
  @Prop() options!: { label: string, value: string }[]
  @Prop({ default: true }) popperAppendToBody?: boolean
  @Prop() popperClass?: string

  /* HOOKS */
  created () {
    if (process.client) {
      const self = this
      const eventListener = (e: any) => {
        if (!self.$el.contains((e as any).target)) {
          // close dropdown when clicked outside
          self.$refs.selectModule.blur()
        }
      }

      window.addEventListener('touchstart', eventListener)

      this.$once('hook:destroyed', () => {
        window.removeEventListener('touchstart', eventListener)
      })
    }
  }

  get popperClassModule () {
    return `-mt-4 ${this.popperClass}`
  }
}
</script>

<style lang="scss">
</style>
