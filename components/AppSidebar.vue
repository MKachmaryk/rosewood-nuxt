<template>
  <el-aside
    :width="!isMobileScreen ? '280px' : '100%'"
    class="sidebar flex flex-col border-r border-gray-300"
    :class="[
      { 'sidebar--closed': !opened && !isMobileScreen },
      { 'block': opened && isMobileScreen },
      { 'hidden': !opened && isMobileScreen }
    ]"
  >
    <div class="md:flex-grow flex flex-col">
      <el-input
        v-model="search"
        class="sidebar__search border-b border-gray-300 flex items-center text-gray-900"
        :class="{ 'sidebar-input-mobile': isMobileScreen }"
      >
        <div slot="suffix" class="flex items-center h-full px-4">
          <el-image
            :src="require('@/assets/images/search-icon.png')"
            class="search-icon"
          />
        </div>
      </el-input>

      <el-menu
        :unique-opened="true"
        background-color="#f9f9f9"
        @open="onOpenSubMenuItemRoute"
        @close="onCloseSubMenuItemRoute"
      >
        <!-- P E O P L E  S U B  M E N U -->
        <el-submenu
          index="people"
          class="border-b border-gray-300"
        >
          <template slot="title">
            <div class="flex items-center justify-between">
              <span class="uppercase font-bold">People</span>

              <p
                v-if="openedSubMenuItem === 'people'"
                class="text-xs cursor-pointer text-purple-100 font-thin"
              >
                <i class="el-icon-arrow-left text-xs mr-0" />
                Back to Search
              </p>
            </div>
          </template>

          <div class="px-3.75 mt-2">
            <div class="flex justify-between text-xs mb-4">
              <span class="text-gray-900 font-bold">Employment</span>
              <span class="text-purple-100">(13)</span>
            </div>

            <div class="flex justify-between text-xs mb-4">
              <span class="text-gray-900 font-bold">Real Estate</span>
              <span class="text-purple-100">(6)</span>
            </div>

            <p class="text-purple-100 text-xs mb-4">
              Voter Registrations
            </p>

            <div class="flex justify-between text-xs mb-4">
              <span class="text-gray-900 font-bold">Voter History</span>
              <span class="text-purple-100">(14)</span>
            </div>

            <div class="flex justify-between text-xs mb-4">
              <span class="text-gray-900 font-bold">Campaign Contributions</span>
              <span class="text-purple-100">(3)</span>
            </div>
          </div>
        </el-submenu>

        <!-- O R G A N I Z A T I O N S  S U B  M E N U -->
        <el-submenu
          index="organizations"
          class="border-b border-gray-300"
        >
          <template slot="title">
            <span class="uppercase font-bold">Organizations</span>
          </template>
        </el-submenu>

        <!-- G E O G R A P H I E S  S U B  M E N U -->
        <el-submenu
          index="geographies"
          class="border-b border-gray-300"
        >
          <template slot="title">
            <div class="flex items-center justify-between">
              <span class="uppercase font-bold">geographies</span>

              <p
                v-if="openedSubMenuItem === 'geographies'"
                class="text-xs cursor-pointer text-purple-100 font-thin"
              >
                <i class="el-icon-arrow-left text-xs mr-0" />
                Back to Search
              </p>
            </div>
          </template>

          <h2 class="rosewood-sidebar-subitem-label mt-2">
            refine geo
          </h2>

          <!-- G E O  F I L T E R I N G  S T A T E -->
          <CascaderGeoModule
            v-for="(geoItem, i) in filteringGeoList"
            :key="`filtering-geo-item-${i}`"
            v-model="geoItem.selectedOptions"
            class="px-3.75"
            placeholder="Please select geo"
            :options="geoItem.options"
            :cascader-geo-item-index="i"
            :filtering-geo-list-length="filteringGeoList.length"
            :is-divider="filteringGeoList.length - 1 !== i"
            @item-click="addNewGeoItem"
          />

          <!-- T O G G L E  L A B E L -->
          <h2 class="rosewood-sidebar-subitem-label pb-2">
            view data by
          </h2>

          <!-- T O G G L E  P E R S O N  /  G E O G R A P H I E S -->
          <ToggleModule
            :value="isGeographies"
            class="px-3.75"
            active-text="Geographies"
            inactive-text="Person"
            @input="toggleChange"
          />

          <!-- A G E  L I S T -->
          <SelectItemsListModule
            class="mt-6"
            select-list-item-classes="px-3.75 mb-2"
            label-name="age"
            :items="ageList"
            @item-click="onAgeFilterClick"
          />

          <!-- C A M P A I G N  C O N T R I B U T I O N S  L I S T -->
          <SelectItemsListModule
            class="mt-6"
            select-list-item-classes="px-3.75 mb-2"
            label-name="campaign contributions"
            :items="campaignContributions"
            @item-click="onCampaignContributionsFilterClick"
          />

          <!-- S U S P E C T  R E G I S T R A T I O N  L I S T -->
          <SelectItemsListModule
            class="mt-6"
            select-list-item-classes="px-3.75 mb-2"
            label-name="suspect registration"
            :items="suspectRegistrationList"
            @item-click="onSuspectRegistrationFilterClick"
          />
        </el-submenu>
      </el-menu>

      <!-- M E N U  I T E M S -->
      <!--      <nuxt-link-->
      <!--        v-for="menuItem in menuItems"-->
      <!--        :key="menuItem.name"-->
      <!--        :to="{ name: menuItem.routeName }"-->
      <!--        class="uppercase px-3.75 py-4 font-bold border-b border-gray-300 text-sm text-gray-900"-->
      <!--        exact-->
      <!--      >-->
      <!--        {{ menuItem.name }}-->
      <!--      </nuxt-link>-->

      <!-- G E O G R A P H I E S  L I N K -->
      <!--      <div-->
      <!--        class="flex items-center justify-between px-3.75 py-4"-->
      <!--      >-->
      <!--        <nuxt-link-->
      <!--          class="uppercase font-bold text-sm text-gray-900"-->
      <!--          :to="{ name: 'geographies' }"-->
      <!--        >-->
      <!--          geographies-->
      <!--        </nuxt-link>-->

      <!--        <p class="text-xs cursor-pointer text-purple-100 font-thin">-->
      <!--          <i class="el-icon-arrow-left text-xs mr-0" />-->
      <!--          Back to Search-->
      <!--        </p>-->
      <!--      </div>-->

      <!--      <h2 class="rosewood-sidebar-subitem-label mt-2">-->
      <!--        refine geo-->
      <!--      </h2>-->

      <!-- G E O  F I L T E R I N G  S T A T E -->
      <!--      <SelectGeoModule-->
      <!--        v-model="state.chosen"-->
      <!--        :options-list="state.list"-->
      <!--        :selected.sync="state.selected"-->
      <!--        geo-place="state"-->
      <!--        placeholder="Select State"-->
      <!--      />-->

      <!-- G E O  F I L T E R I N G  C O U N T Y -->
      <!--      <SelectGeoModule-->
      <!--        v-model="county.chosen"-->
      <!--        :options-list="county.list"-->
      <!--        :selected.sync="county.selected"-->
      <!--        geo-place="county"-->
      <!--        placeholder="Select County"-->
      <!--      />-->

      <!-- G E O  F I L T E R I N G  C I T Y -->
      <!--      <SelectGeoModule-->
      <!--        v-model="city.chosen"-->
      <!--        :options-list="city.list"-->
      <!--        :selected.sync="city.selected"-->
      <!--        :is-divider="true"-->
      <!--        class="mb-4"-->
      <!--        geo-place="city"-->
      <!--        placeholder="Select City"-->
      <!--      />-->

      <!-- G E O  F I L T E R I N G  S T A T E -->
      <!--      <CascaderGeoModule-->
      <!--        v-for="(geoItem, i) in filteringGeoList"-->
      <!--        :key="`filtering-geo-item-${i}`"-->
      <!--        v-model="geoItem.selectedOptions"-->
      <!--        class="px-3.75"-->
      <!--        placeholder="Please select geo"-->
      <!--        :options="geoItem.options"-->
      <!--        :cascader-geo-item-index="i"-->
      <!--        :filtering-geo-list-length="filteringGeoList.length"-->
      <!--        :is-divider="filteringGeoList.length - 1 !== i"-->
      <!--        @item-click="addNewGeoItem"-->
      <!--      />-->

      <!-- T O G G L E  L A B E L -->
      <!--      <h2 class="rosewood-sidebar-subitem-label pb-2">-->
      <!--        view data by-->
      <!--      </h2>-->

      <!-- T O G G L E  P E R S O N  /  G E O G R A P H I E S -->
      <!--      <ToggleModule-->
      <!--        :value="isGeographies"-->
      <!--        class="px-3.75"-->
      <!--        active-text="Geographies"-->
      <!--        inactive-text="Person"-->
      <!--        @input="toggleChange"-->
      <!--      />-->

      <!-- A G E  L I S T -->
      <!--      <SelectItemsListModule-->
      <!--        class="mt-6"-->
      <!--        select-list-item-classes="px-3.75 mb-2"-->
      <!--        label-name="age"-->
      <!--        :items="ageList"-->
      <!--        @item-click="onAgeFilterClick"-->
      <!--      />-->

      <!-- C A M P A I G N  C O N T R I B U T I O N S  L I S T -->
      <!--      <SelectItemsListModule-->
      <!--        class="mt-6"-->
      <!--        select-list-item-classes="px-3.75 mb-2"-->
      <!--        label-name="campaign contributions"-->
      <!--        :items="campaignContributions"-->
      <!--        @item-click="onCampaignContributionsFilterClick"-->
      <!--      />-->

      <!-- S U S P E C T  R E G I S T R A T I O N  L I S T -->
      <!--      <SelectItemsListModule-->
      <!--        class="mt-6 border-b border-gray-300 pb-4 mb-6"-->
      <!--        select-list-item-classes="px-3.75 mb-2"-->
      <!--        label-name="suspect registration"-->
      <!--        :items="suspectRegistrationList"-->
      <!--        @item-click="onSuspectRegistrationFilterClick"-->
      <!--      />-->
    </div>

    <!-- R O S E L A N D  L O G O -->
    <div
      v-if="!isMobileScreen"
      class="flex justify-center mt-6"
    >
      <el-image
        class="cursor-pointer mb-5"
        :src="require('@/assets/images/roseland-logo-black.png')"
        @click="$router.push({ name: 'index' })"
      />
    </div>
  </el-aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import { ElMenu } from 'element-ui/types/menu'

import ToggleModule from '@/components/form-controls/ToggleModule.vue'
import SelectModule from '@/components/form-controls/SelectModule.vue'
import SelectItemsListModule from '@/components/Geographies/SelectItemsListModule.vue'
import SelectGeoModule from '@/components/Geographies/SelectGeoModule.vue'
import CascaderGeoModule from '@/components/Geographies/CascaderGeoModule.vue'

import { votersModule } from '@/store'

import { FilterGeo, FilterItem } from '@/interfaces'

@Component({
  name: 'app-sidebar',
  components: {
    CascaderGeoModule,
    ToggleModule,
    SelectModule,
    SelectItemsListModule,
    SelectGeoModule
  }
})
export default class AppSidebar extends Vue {
  @Prop() opened!: boolean
  @Prop() isMobileScreen!: boolean

  $refs!: {
    menu: ElMenu
  }

  /* DATA */
  openedSubMenuItem = ''

  search = ''

  filteringGeoList: FilterGeo[] = [
    {
      selectedOptions: ['state', 'illinois'],
      options: [
        {
          value: 'state',
          label: 'State',
          children: [
            {
              value: 'illinois',
              label: 'Illinois'
            },
            {
              value: 'state-1-2',
              label: 'State 1 2'
            }
          ]
        },
        {
          value: 'st house',
          label: 'St House',
          children: [
            {
              value: 'il house 001',
              label: 'IL House 001'
            },
            {
              value: 'il house 002',
              label: 'IL House 002'
            },
            {
              value: 'il house 003',
              label: 'IL House 003'
            },
            {
              value: 'il house 004',
              label: 'IL House 004'
            },
            {
              value: 'il house 005',
              label: 'IL House 005'
            },
            {
              value: 'il house 006',
              label: 'IL House 006'
            }
          ]
        },
        {
          value: 'st senate',
          label: 'St Senate',
          children: [
            {
              value: 'il senate 001',
              label: 'IL Senate 001'
            },
            {
              value: 'il senate 002',
              label: 'IL Senate 002'
            },
            {
              value: 'il senate 003',
              label: 'IL Senate 003'
            },
            {
              value: 'il senate 004',
              label: 'IL Senate 004'
            },
            {
              value: 'il senate 005',
              label: 'IL Senate 005'
            },
            {
              value: 'il senate 006',
              label: 'IL Senate 006'
            }
          ]
        },
        {
          value: 'zip',
          label: 'Zip',
          children: [
            {
              value: '60001',
              label: '60001'
            },
            {
              value: '60002',
              label: '60002'
            },
            {
              value: '60003',
              label: '60003'
            },
            {
              value: '60004',
              label: '60004'
            },
            {
              value: '60005',
              label: '60005'
            },
            {
              value: '60006',
              label: '60006'
            }
          ]
        },
        {
          value: 'county',
          label: 'County',
          children: [
            {
              value: 'il county 001',
              label: 'IL County 001'
            },
            {
              value: 'il county 002',
              label: 'IL County 002'
            },
            {
              value: 'il county 003',
              label: 'IL County 003'
            },
            {
              value: 'il county 004',
              label: 'IL County 004'
            },
            {
              value: 'il county 005',
              label: 'IL County 005'
            },
            {
              value: 'il county 006',
              label: 'IL County 006'
            }
          ]
        }
      ]
    },
    {
      selectedOptions: [],
      options: [
        {
          value: 'state',
          label: 'State',
          children: [
            {
              value: 'illinois',
              label: 'Illinois'
            },
            {
              value: 'state-1-2',
              label: 'State 1 2'
            }
          ]
        },
        {
          value: 'st house',
          label: 'St House',
          children: [
            {
              value: 'il house 001',
              label: 'IL House 001'
            },
            {
              value: 'il house 002',
              label: 'IL House 002'
            },
            {
              value: 'il house 003',
              label: 'IL House 003'
            },
            {
              value: 'il house 004',
              label: 'IL House 004'
            },
            {
              value: 'il house 005',
              label: 'IL House 005'
            },
            {
              value: 'il house 006',
              label: 'IL House 006'
            }
          ]
        },
        {
          value: 'st senate',
          label: 'St Senate',
          children: [
            {
              value: 'il senate 001',
              label: 'IL Senate 001'
            },
            {
              value: 'il senate 002',
              label: 'IL Senate 002'
            },
            {
              value: 'il senate 003',
              label: 'IL Senate 003'
            },
            {
              value: 'il senate 004',
              label: 'IL Senate 004'
            },
            {
              value: 'il senate 005',
              label: 'IL Senate 005'
            },
            {
              value: 'il senate 006',
              label: 'IL Senate 006'
            }
          ]
        },
        {
          value: 'zip',
          label: 'Zip',
          children: [
            {
              value: '60001',
              label: '60001'
            },
            {
              value: '60002',
              label: '60002'
            },
            {
              value: '60003',
              label: '60003'
            },
            {
              value: '60004',
              label: '60004'
            },
            {
              value: '60005',
              label: '60005'
            },
            {
              value: '60006',
              label: '60006'
            }
          ]
        },
        {
          value: 'county',
          label: 'County',
          children: [
            {
              value: 'il county 001',
              label: 'IL County 001'
            },
            {
              value: 'il county 002',
              label: 'IL County 002'
            },
            {
              value: 'il county 003',
              label: 'IL County 003'
            },
            {
              value: 'il county 004',
              label: 'IL County 004'
            },
            {
              value: 'il county 005',
              label: 'IL County 005'
            },
            {
              value: 'il county 006',
              label: 'IL County 006'
            }
          ]
        }
      ]
    }
  ]

  state = {
    chosen: '',
    list: [
      {
        label: 'State 1',
        value: 'State 1'
      },
      {
        label: 'State 2',
        value: 'state 2'
      },
      {
        label: 'State 3',
        value: 'state 3'
      }
    ],
    selected: false
  }

  county = {
    chosen: '',
    list: [
      {
        label: 'County 1',
        value: 'county 1'
      },
      {
        label: 'County 2',
        value: 'country 2'
      },
      {
        label: 'County 3',
        value: 'county 3'
      }
    ],
    selected: false
  }

  city = {
    chosen: '',
    list: [
      {
        label: 'City 1',
        value: 'city 1'
      },
      {
        label: 'City 2',
        value: 'city 2'
      },
      {
        label: 'City 3',
        value: 'city 3'
      }
    ],
    selected: false
  }

  ageList = [
    {
      interval: '18 - 24',
      count: 180483,
      selected: false
    },
    {
      interval: '25 - 34',
      count: 209432,
      selected: false
    },
    {
      interval: '35 - 44',
      count: 222908,
      selected: false
    },
    {
      interval: '45 - 54',
      count: 308423,
      selected: false
    },
    {
      interval: '55 - 64',
      count: 178342,
      selected: false
    },
    {
      interval: '65+',
      count: 198425,
      selected: false
    }
  ]

  campaignContributions = [
    {
      interval: '$1 - $99',
      count: 180321,
      selected: false
    },
    {
      interval: '$100 - $499',
      count: 30321,
      selected: false
    },
    {
      interval: '$500 - $999',
      count: 20321,
      selected: false
    },
    {
      interval: '$1000 - $4999',
      count: 1321,
      selected: false
    },
    {
      interval: '$5000 - $9999',
      count: 1214,
      selected: false
    },
    {
      interval: '$10000+',
      count: 18021,
      selected: false
    }
  ]

  suspectRegistrationList = [
    {
      interval: 'age',
      count: 1353,
      selected: false
    },
    {
      interval: 'birth date',
      count: 271,
      selected: false
    },
    {
      interval: 'deceased',
      count: 665,
      selected: false
    },
    {
      interval: 'no unit number',
      count: 90,
      selected: false
    },
    {
      interval: 'occupancy',
      count: 1516,
      selected: false
    },
    {
      interval: 'address',
      count: 10,
      selected: false
    },
    {
      interval: 'non-residential',
      count: 150,
      selected: false
    }
  ]

  /* COMPUTED */
  get isGeographies () {
    return votersModule.isGeographies
  }

  /* METHODS */
  onAgeFilterClick (ageFilterItems: FilterItem[]) {
    votersModule.setAgeFilterItems(ageFilterItems)
  }

  onCampaignContributionsFilterClick (campaignContributionsFilterItems: FilterItem[]) {
    votersModule.setCampaignContributionsFilterItems(campaignContributionsFilterItems)
  }

  onSuspectRegistrationFilterClick (suspectRegistrationFilterItems: FilterItem[]) {
    votersModule.setSuspectRegistrationFilterItems(suspectRegistrationFilterItems)
  }

  toggleChange (isGeography: boolean) {
    votersModule.setGeography(isGeography)
  }

  addNewGeoItem (newGeoItem: FilterGeo) {
    this.filteringGeoList.push(newGeoItem)
  }

  onOpenSubMenuItemRoute (routeName: string) {
    this.openedSubMenuItem = routeName
    this.$router.push({ name: routeName })
  }

  onCloseSubMenuItemRoute () {
    this.openedSubMenuItem = ''
  }

  /* HOOKS */
  created () {
    // this.state.chosen = this.state.list[0].value
    // this.county.chosen = this.county.list[0].value
    // this.city.chosen = this.city.list[0].value
  }
}
</script>

<style lang="scss">
  .sidebar {
    margin-left: 0;
    transition: margin-left .2s ease;
    will-change: margin-left;

    .sidebar__search.el-input {
      height: 53px !important;
      input {
        @apply border-none mr-4;
        background-color: transparent;
      }

      &--suffix {
        .search-icon {
          @apply w-4 h-4;
        }
      }
    }

    .sidebar-input-mobile {
      input {
        @apply px-6;
      }
    }

    .el-menu {
      @apply border-r-0;
    }

    .el-image {
      width: 90px;
    }

    i.el-icon-arrow-left {
      @apply mr-0 text-xs;
    }

    &--closed {
      margin-left: -280px;
    }
  }
</style>
