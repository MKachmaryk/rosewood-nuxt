import Vuex from 'vuex'
import Vue from 'vue'

import { getModule } from 'nuxt-property-decorator'

import VotersModule from '@/store/modules/voters.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    VotersModule
  }
})

export const votersModule = getModule(VotersModule, store)
