<template>
  <el-select
    ref="selectModule"
    :class="rounded ? 'select-module-rounded' : 'select-module'"
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
  @Prop({ default: '' }) popperClass?: string
  @Prop({ default: true }) rounded?: boolean

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
    return `-mt-4 ${this.popperClass} ${this.rounded ? 'popup-rounded' : ''}`
  }
}
</script>

<style lang="scss">
  .select-module.el-select {
    .el-input {
      &--suffix.is-focus .el-input__inner {
        @apply border-gray-250 rounded-b-none;
      }
      &--suffix {
        @apply text-s;
        .el-input__inner {
          @apply border-gray-250 shadow-tiny leading-none h-8;
        }
      }

      &__icon {
        @apply hidden;
      }
    }
  }

  .select-module-rounded.el-select {
    .el-input {
      &--suffix.is-focus .el-input__inner {
        @apply border-gray-250 rounded-xl rounded-b-none;
      }

      &--suffix {
        .el-input__inner {
          @apply rounded-full border-gray-250 shadow-tiny leading-none h-8;
        }
      }

      &__icon {
        @apply hidden;
      }
    }
  }

  // select dropdown
  .el-select-dropdown.el-popper {
    @apply mt-0;
    .popper {
      &__arrow {
        @apply hidden;
      }
    }
  }
  .el-select-dropdown {
    @apply border-gray-250 shadow-tiny rounded-t-none;
    &__list {
      @apply pb-3;
    }
    &__item {
      @apply text-s;
    }
  }

  .popup-rounded.el-select-dropdown {
    @apply border-gray-250 shadow-tiny rounded-xl rounded-t-none;
    &__list {
      @apply pb-3;
    }
    &__item {
      @apply text-s;
    }
  }
</style>
