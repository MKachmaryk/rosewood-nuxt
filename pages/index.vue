<template>
  <div>
    pages
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'index',

  // M I D D L E W A R E
  middleware ({ redirect }) {
    return redirect({ name: 'geographies-voters' })
  }
})
export default class Index extends Vue {
}
</script>

<style>
</style>
