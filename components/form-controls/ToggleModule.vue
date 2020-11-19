<template>
  <el-switch
    class="toggle"
    :class="blueIcon ? 'blue-icon': 'red-icon'"
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
  @Prop({ default: true }) blueIcon?: boolean

  /* METHODS */
}
</script>

<style lang="scss">
  //toggle
  .el-switch {
    .el-switch {
      &__label * {
        @apply text-s font-light;
      }

      &__core {
        box-shadow: inset 0 0 2px 0 rgba(0,0,0,.35);
        height: 22px;
        border-radius: 15px;

        &::after {
          top: 2px;
          left: 2px;
        }
      }
    }

    &__label.is-active {
      @apply text-gray-900;
    }
  }

  .el-switch.blue-icon .el-switch__core::after {
    @apply bg-blue-200;
  }

  .el-switch.red-icon.is-checked .el-switch__core::after {
    @apply bg-red-150;
  }

  .el-switch.red-icon {
    .el-switch {
      &__core::after {
        @apply bg-gray-300;
      }
      &__label {
        span {
          @apply text-sm font-bold;
        }
      }
    }
  }

  /*.el-switch.red-icon*/

  .el-switch.is-checked .el-switch__core::after {
    @apply -ml-4.5;
  }
</style>
