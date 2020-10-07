<template>
  <div>
    <!-- L A B E L  N A M E -->
    <h2
      v-if="labelName"
      class="rosewood-sidebar-subitem-label mb-2"
    >
      {{ labelName }}
    </h2>

    <!-- I T E M S  L I S T -->
    <div class="flex" :class="`flex-${listDirection}`">
      <div
        v-for="(item, index) in items"
        :key="`item-index-${index}`"
        class="flex items-center cursor-pointer relative"
        :class="selectListItemClasses"
        @click="onItemClick(item)"
      >
        <!-- C H E C K M A R K  I C O N -->
        <i
          v-if="item.selected"
          class="icon-checkmark el-icon-error"
        />

        <div
          class="flex justify-between w-full ml-5 text-xs"
          :class="{ 'font-bold': item.selected }"
        >
          <span class="capitalize">{{ item.interval }}</span>
          <span v-if="showCount">({{ Number(item.count).toLocaleString() }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { FilterItem } from '~/interfaces'

@Component({
  name: 'select-items-list-module'
})
export default class SelectItemsList extends Vue {
  @Prop() items!: FilterItem[]
  @Prop() labelName?: string
  @Prop({ default: 'col' }) listDirection?: string
  @Prop({ default: true }) showCount?: boolean
  @Prop() selectListItemClasses?: string

  /* METHODS */
  onItemClick (item: FilterItem) {
    item.selected = !item.selected
    const selectedItems = this.items.filter(item => item.selected)
    this.$emit('item-click', selectedItems)
  }
}
</script>
