<template>
  <div class="geographies">
    <div
      class="bg-white flex items-center shadow-tiny z-10 relative flex-col md:flex-row"
    >
      <p
        class="text-2xl md:ml-6 md:mr-16 md:my-2 mt-2 font-medium"
      >
        City of Austin
      </p>
      <div class="flex my-4 items-center geographies__links">
        <nuxt-link
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.routeName }"
          class="text-blue-200 px-3 text-s"
        >
          {{ route.name }}
        </nuxt-link>
      </div>
    </div>

    <!-- M A P -->
    <geography-map />

    <div class="m-6">
      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import GeographyMap from '~/components/Geographies/GeographyMap.vue'

@Component({
  name: 'geographies',
  components: {
    GeographyMap
  }
})
export default class Geographies extends Vue {
  routes = [
    {
      name: 'Voters',
      routeName: 'geographies-voters'
    },
    {
      name: 'Age',
      routeName: 'geographies-age'
    },
    {
      name: 'Real Estate',
      routeName: 'geographies-real-estate'
    },
    {
      name: 'Crime',
      routeName: 'geographies-crime'
    }
  ]
}
</script>

<style lang="scss">
  .geographies {
    &__links {
      @apply h-5;
      .nuxt-link-active {
        @apply bg-blue-200 text-white rounded-full mx-0 flex items-center shadow-tiny;
        height: 26px;
      }
    }
  }
</style>
