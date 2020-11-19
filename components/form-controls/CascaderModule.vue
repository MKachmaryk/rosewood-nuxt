<template>
  <el-cascader
    ref="elCascader"
    :value="value"
    :options="options"
    :placeholder="placeholder"
    @input="onCascaderChange"
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
  @Prop({ default: 'placeholder' }) placeholder?: string

  /* METHODS */
  onCascaderChange (selectedValue: string[]) {
    this.$emit('input', selectedValue)
  }

  visibleChange (isVisible: boolean) {
    if (isVisible) {
      this.$nextTick(() => {
        if (this.value.length === 0) {
          (this.$refs.elCascader as any).focusFirstNode()
        }

        const elCascader = document.querySelector('.el-cascader div.is-focus') as HTMLElement
        const elCascaderDropdowns = document.querySelectorAll('.el-cascader__dropdown') as NodeList

        elCascaderDropdowns.forEach((dropdown) => {
          (dropdown as HTMLElement).style.width = elCascader.offsetWidth + 'px'
        })
      })
    }
  }
}
</script>

<style lang="scss">
  .el-popper.el-cascader {
    &__dropdown {
      @apply rounded-lg shadow-tiny border-gray-250 -mt-14.25;
      .popper__arrow {
        @apply hidden;
      }
      .el-cascader-panel {
        @apply block;
        .el-cascader-menu {
          @apply border-r-0 border-b border-gray-250;
          .el-cascader-node {
            @apply text-s text-gray-900;
            &-node {
              &__label {
                @apply px-0;
              }
            }
          }
          &:last-child {
            @apply border-b-0;
          }

          i {
            @apply hidden;
          }
        }
      }
    }
  };
</style>
