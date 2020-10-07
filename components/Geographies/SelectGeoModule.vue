<template>
  <div
    class="px-3.75 relative flex items-center h-12 cursor-pointer select-geo-module justify-between"
    @click="$emit('update:selected', !selected)"
  >
    <!-- C H E C K  M A R K -->
    <i
      v-if="value"
      class="icon-checkmark el-icon-error"
    />

    <span
      class="ml-5 text-s font-light capitalize w-20"
    >
      {{ geoPlace }}
    </span>

    <!-- G E O  P L A C E  S E L E C T O R -->
    <SelectModule
      v-show="selected"
      ref="selectModule"
      :value="value"
      :options="optionsList"
      :placeholder="placeholder"
      class="w-45"
      :popper-append-to-body="false"
      @input="selectGeo($event)"
    />

    <!-- C H O S E N  P L A C E -->
    <span
      v-show="!selected"
      class="capitalize truncate text-s font-bold text-gray-900 w-45 pl-4 select-geo-module__chosen"
      @click="openSelectModule"
    >
      {{ value }}
    </span>

    <!-- G E O  S E L E C T O R  M O D U L E  D I V I D E R -->
    <div
      v-if="isDivider"
      class="select-geo-module__divider"
    >
      <span
        v-for="item in 12"
        :key="item"
        class="w-px h-px block bg-gray-850 mb-px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SelectModule from '~/components/form-controls/SelectModule.vue'

@Component({
  name: 'select-geo',
  components: {
    SelectModule
  }
})
export default class SelectGeo extends Vue {
  $refs!: {
    selectModule: any
  }

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

  @Prop() optionsList!: any
  @Prop() placeholder?: string
  @Prop() geoPlace?: string
  @Prop() value!: string
  @Prop() selected!: boolean
  @Prop({ default: true }) isDivider!: boolean

  /* METHODS */
  selectGeo (selectedGeo: string) {
    this.$emit('input', selectedGeo)
    this.$emit('update:selected', false)
  }

  openSelectModule () {
    this.$refs.selectModule.$children[0].$el.click()
  }
}
</script>

<style lang="scss">
  .select-geo-module {
    &__chosen {
      &:hover {
        @apply border border-gray-250 border-solid bg-white rounded-full py-2 shadow-tiny leading-none flex items-center;
        padding-left: calc(theme('spacing.4') - theme('spacing.px'));
        height: theme('spacing.8');
      }
    }

    &__divider {
      @apply absolute;
      bottom: -12px;
      left: 50px;
    }

    .el-select-dropdown.el-popper {
      top: theme('spacing.8') !important;
    }
  }
</style>
