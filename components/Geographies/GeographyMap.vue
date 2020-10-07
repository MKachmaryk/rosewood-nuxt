<template>
  <div class="relative geography-map shadow-tiny">
    <div
      class="geography-map__img bg-cover"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/map-img.jpg') + ')' }"
    />

    <!-- E L E C T I O N  I N F O -->
    <div class="absolute h-full sm:w-1/2 lg:w-1/3 xl:w-1/4 top-0 left-0 bg-white border-r p-6 text-s text-gray-900">
      <!-- 2 0 1 6 G E N E R A L E L E C T I O N -->
      <h2 class="capitalize font-bold">
        2016 general election
      </h2>

      <div
        v-for="(candidate, i) in prevGeneralElection"
        :key="`prev-general-election-${i}`"
        class="flex items-center justify-between mt-2"
      >
        <div class="flex items-center justify-between">
          <!-- C A N D I D A T E  I C O N -->
          <el-image
            :src="require(`@/assets/images/${candidate.icon}.png`)"
            class="w-5"
          />

          <!-- C A N D I D A T E  N A M E -->
          <span class="ml-2 w-24 capitalize">{{ candidate.candidateName }}</span>
        </div>
        <span>{{ candidate.voters ? Number(candidate.voters).toLocaleString() : '-' }}</span>
        <span class="font-bold">{{ candidate.percent ? candidate.percent : '-' }}%</span>
      </div>

      <!-- 2 0 2 0  G E N E R A L  E L E C T I O N -->
      <h2 class="capitalize font-bold mt-6">
        2020 general election
      </h2>

      <div
        v-for="(candidate, i) in generalElection"
        :key="`general-election-${i}`"
        class="flex items-center justify-between mt-2"
      >
        <div class="flex items-center justify-between">
          <!-- C A N D I D A T E  I C O N -->
          <el-image
            :src="require(`@/assets/images/${candidate.icon}.png`)"
            class="w-5"
          />

          <!-- C A N D I D A T E  N A M E -->
          <span class="ml-2 w-24 capitalize">{{ candidate.candidateName }}</span>
        </div>
        <span>{{ candidate.voters ? Number(candidate.voters).toLocaleString() : '-' }}</span>
        <span class="font-bold">{{ candidate.percent ? candidate.percent : '-' }}%</span>
      </div>
    </div>

    <el-breadcrumb
      separator="/"
      class="absolute hidden rounded-full px-6 breadcrumbs flex items-center shadow-tiny"
    >
      <el-breadcrumb-item>Texas</el-breadcrumb-item>
      <el-breadcrumb-item>Travis Country</el-breadcrumb-item>
      <el-breadcrumb-item>City of Austin</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'geography-map'
})
export default class GeographyMap extends Vue {
  /* DATA */
  prevGeneralElection = [
    {
      icon: 'democratic_party_icon',
      candidateName: 'hilary clinton',
      voters: 308260,
      percent: 66
    },
    {
      icon: 'republican_party_icon',
      candidateName: 'donald trump',
      voters: 127209,
      percent: 27
    }
  ]

  generalElection = [
    {
      icon: 'democratic_party_icon',
      candidateName: 'joe biden',
      voters: null,
      percent: null
    },
    {
      icon: 'republican_party_icon',
      candidateName: 'donald trump',
      voters: null,
      percent: null
    }
  ]
}
</script>

<style lang="scss">
  .geography-map {
    &__img {
      height: 300px
    }

    .el-breadcrumb {
      background-color: theme('colors.blue.200');
      top: theme('spacing.6');
      left: theme('spacing.6');
      height: 18px;
      &__item {
        font-size: theme('fontSize.s');
      }
      &__inner {
        color: theme('colors.white');
      }
      &__separator {
        color: theme('colors.white');
      }
    }
  }
</style>
