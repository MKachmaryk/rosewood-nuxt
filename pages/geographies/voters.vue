<template>
  <div class="voters">
    <div class="flex items-center mb-4">
      <p class="text-lg font-bold mb-1">
        Voters
      </p>
      <div class="flex flex-wrap">
        <!-- F I L T E R  I T E M S  A G E -->
        <SelectItemsListModule
          v-if="ageFilterItems.length"
          :items="ageFilterItems"
          :show-count="false"
          list-direction="wrap"
          select-list-item-classes="ml-4 mb-1"
          @item-click="onAgeFilterClick"
        />

        <!-- F I L T E R  I T E M S  C A M P A I G N  C O N T R I B U T I O N S -->
        <SelectItemsListModule
          v-if="campaignContributionsFilterItems.length"
          :items="campaignContributionsFilterItems"
          :show-count="false"
          list-direction="wrap"
          select-list-item-classes="ml-4 mb-1"
          @item-click="onCampaignContributionsFilterClick"
        />

        <!-- F I L T E R  I T E M S  S U S P E C T  R E G I S T R A T I O N -->
        <SelectItemsListModule
          v-if="suspectRegistrationFilterItems.length"
          :items="suspectRegistrationFilterItems"
          :show-count="false"
          list-direction="wrap"
          select-list-item-classes="ml-4"
          @item-click="onSuspectRegistrationFilterClick"
        />
      </div>
    </div>

    <!-- V O T E R S  L I S T -->
    <div class="border rounded border-gray-300">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="'cursor-pointer h-10'"
      >
        <!-- N A M E  C O L U M N -->
        <el-table-column
          v-if="!isGeographies"
          prop="name"
          label="Name"
          min-width="200"
        >
          <!-- N A M E  C O L U M N  H E A D E R -->
          <template #header="{ column }">
            <div class="flex items-center text-black">
              <span>{{ column.label }}</span>
              <span class="flex items-center justify-center w-4.5 h-4.5 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold" />
              </span>
            </div>
          </template>
        </el-table-column>

        <!-- D E V E L O P M E N T  C O L U M N -->
        <el-table-column
          v-else
          prop="development"
          min-width="250"
        >
          <!-- D E V E L O P M E N T  C O L U M N  H E A D E R -->
          <template #header>
            <div class="my-px">
              <SelectModule
                v-model="selectedDevelopment"
                class="w-45"
                popper-class="w-45 truncate"
                :options="developmentSelectorOptionsList"
                placeholder="Placeholder"
              />
            </div>
          </template>
        </el-table-column>

        <!-- A D D R E S S  C O L U M N -->
        <el-table-column
          prop="address"
          label="Address"
          min-width="180"
        >
          <!-- A D D R E S S  C O L U M N  H E A D E R -->
          <template #header="{ column }">
            <div class="flex items-center text-black">
              <span>{{ column.label }}</span>
              <span class="flex items-center justify-center w-4.5 h-4.5 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold" />
              </span>
            </div>
          </template>
        </el-table-column>

        <!-- A G E  C O L U M N -->
        <el-table-column
          v-if="!isGeographies"
          prop="age"
          label="Age"
          min-width="100"
        >
          <!-- A G E  C O L U M N  H E A D E R -->
          <template #header="{ column }">
            <div class="flex items-center text-black table-label">
              <span>{{ column.label }}</span>
              <span class="flex items-center p-1 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border w-4.5 h-4.5 relative shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold transform rotate-90 absolute arrow-left" />
                <i class="el-icon-bottom font-bold transform -rotate-90 absolute arrow-right" />
              </span>
            </div>
          </template>
        </el-table-column>

        <!-- U N I T S  C O L U M N -->
        <el-table-column
          v-else
          prop="units"
          label="Units"
          min-width="100"
        >
          <template #header="{ column }">
            <div class="flex items-center text-black table-label">
              <span>{{ column.label }}</span>
              <span class="flex items-center p-1 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border w-4.5 h-4.5 relative shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold transform rotate-90 absolute arrow-left" />
                <i class="el-icon-bottom font-bold transform -rotate-90 absolute arrow-right" />
              </span>
            </div>
          </template>
        </el-table-column>

        <!-- V O T E R  H I S T O R I E S  C O L U M N -->
        <el-table-column
          v-if="!isGeographies"
          prop="voterHistories"
          label="Voter History"
          min-width="180"
        >
          <!-- V O T E R  H I S T O R I E S  H E A D E R -->
          <template #header="{ column }">
            <div class="flex items-center text-black">
              <!-- L A B E L -->
              <span>{{ column.label }}</span>

              <!-- T O O L  T I P -->
              <el-tooltip
                effect="light"
                placement="bottom"
                :visible-arrow="false"
                :popper-class="'px-4 pb-2 pt-2 shadow-tiny'"
              >
                <div slot="content">
                  <!-- V O T E R  I N F O  G E N E R A L -->
                  <p class="font-bold">
                    General Elections
                  </p>
                  <p class="my-2">
                    2018, 2016
                  </p>

                  <!-- G E N E R A L  E L E C T I O N S  L I S T -->
                  <div
                    v-for="(general, generalElectionIndex) in generalVoterHistoryInfo.generalElections"
                    :key="`voter-general-info-${generalElectionIndex}`"
                    class="flex mt-2 items-center"
                  >
                    <div
                      class="w-4.5 h-4.5 flex justify-center items-center mr-2 text-white rounded-sm uppercase"
                      :class="general.colorClass"
                    >
                      {{ general.name }}
                    </div>
                    <span>General - {{ general.description }}</span>
                  </div>

                  <!-- D I V I D E R -->
                  <div class="border-b border-gray-300 my-4" />

                  <!-- V O T E R  I N F O  P R I M A R I E S -->
                  <p class="font-bold">
                    Primaries
                  </p>
                  <p class="my-2">
                    2018, 2016
                  </p>

                  <!-- P R I M A R I E S  L I S T -->
                  <div
                    v-for="(primary, primaryIndex) in generalVoterHistoryInfo.primaries"
                    :key="`voter-primary-info-${primaryIndex}`"
                    class="flex mb-2 items-center"
                  >
                    <div
                      class="w-4.5 h-4.5 flex justify-center items-center mr-2 text-white rounded-full uppercase"
                      :class="primary.colorClass"
                    >
                      {{ primary.name }}
                    </div>
                    <span>Primary - {{ primary.description }}</span>
                  </div>
                </div>

                <!-- V O T E R  H I S T O R I E S  I N F O  I C O N -->
                <span class="rounded-full ml-2 cursor-pointer shadow-tiny text-base">
                  <i class="el-icon-info flex items-center justify-center info-icon" />
                </span>
              </el-tooltip>
            </div>
          </template>

          <!-- V O T E R  H I S T O R I E S  C O N T E N T -->
          <template #default="{ row }">
            <div class="flex items-center">
              <!-- V O T E R  H I S T O R Y  G E N E R A L  E L E C T I O N S -->
              <div
                v-for="(generalElection, generalElectionIndex) in row.voterHistories.generalElections"
                :key="`voter-general-history-${generalElectionIndex}`"
                class="w-4.5 h-4.5 flex justify-center items-center ml-1 text-white uppercase rounded-sm"
                :class="generalElection.colorClass"
              >
                {{ generalElection.name }}
              </div>

              <!-- D I V I D E R -->
              <span class="text-lg text-gray-300 mx-1">|</span>

              <!-- V O T E R  H I S T O R Y  P R I M A R I E S -->
              <div
                v-for="(primaryElection, primaryIndex) in row.voterHistories.primaries"
                :key="`voter-primary-history-${primaryIndex}`"
                class="w-4.5 h-4.5 flex justify-center items-center mr-1 text-white uppercase rounded-full"
                :class="primaryElection.colorClass"
              >
                {{ primaryElection.name }}
              </div>
            </div>
          </template>
        </el-table-column>

        <!-- R E G I S T E R E D  V O T E R S  C O L U M N -->
        <el-table-column
          v-else
          prop="registeredVoters"
          label="Registered Voters"
          min-width="180"
        >
          <template #header="{ column }">
            <div class="flex items-center text-black table-label">
              <span>{{ column.label }}</span>
              <span class="flex items-center p-1 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border w-4.5 h-4.5 relative shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold transform rotate-90 absolute arrow-left" />
                <i class="el-icon-bottom font-bold transform -rotate-90 absolute arrow-right" />
              </span>
            </div>
          </template>
        </el-table-column>

        <!-- C A M P A I G N  D O N A T I O N S  C O L U M N -->
        <el-table-column
          v-if="!isGeographies"
          prop="campaignDonations"
          label="Campaign Donations"
          min-width="220"
        >
          <!-- C A M P A I G N  D O N A T I O N S  C O L U M N  H E A D E R -->
          <template #header="{ column }">
            <div class="flex items-center text-black">
              <!-- L A B E L -->
              <span>{{ column.label }}</span>

              <!-- A R R O W  I C O N -->
              <span class="flex items-center justify-center w-4.5 h-4.5 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold" />
              </span>

              <!-- T O O L  T I P -->
              <el-tooltip
                class="item"
                effect="light"
                placement="bottom"
                :visible-arrow="false"
                :popper-class="'p-4 shadow-tiny'"
              >
                <div slot="content">
                  <!-- C A M P A I G N  D O N A T I O N S  I N F O  L A B E L-->
                  <p class="font-bold capitalize text-center">
                    Campaign donation score
                  </p>

                  <!-- C A M P A I G N  D O N A T I O N S  I N F O  L I S T -->
                  <div
                    v-for="(campaignDonation, campaignDonationIndex) in campaignDonationsGeneralInfo"
                    :key="`campaign-donation-info-${campaignDonationIndex}`"
                    class="flex mt-2 items-center"
                  >
                    <div
                      class="w-4.5 h-4.5 flex justify-center items-center mr-2 text-white rounded-full uppercase"
                      :class="campaignDonation.colorClass"
                    >
                      {{ campaignDonation.name }}
                    </div>
                    <span>{{ campaignDonation.description }}</span>
                  </div>
                </div>

                <!-- C A M P A I G N  D O N A T I O N S  I N F O  I C O N -->
                <span class="rounded-full ml-2 cursor-pointer shadow-tiny text-base">
                  <i class="el-icon-info flex items-center justify-center info-icon" />
                </span>
              </el-tooltip>
            </div>
          </template>

          <!-- C A M P A I G N  D O N A T I O N S  C O N T E N T -->
          <template #default="{ row }">
            <div class="flex items-center">
              <div
                class="w-4.5 h-4.5 flex justify-center items-center mr-2 text-white uppercase rounded-full"
                :class="row.campaignDonations.colorClass"
              />
              <span>{{ row.campaignDonations.amount ? '$' : '-' }} {{ row.campaignDonations.amount }}</span>
            </div>
          </template>
        </el-table-column>

        <!-- P O L I T I C A L  A F F I L I A T I O N  C O L U M N -->
        <el-table-column
          v-else
          prop="politicalAffiliation"
          label="Political Affiliation"
          min-width="220"
        >
          <template #header="{ column }">
            <div class="flex items-center text-black table-label">
              <span>{{ column.label }}</span>
              <span class="flex items-center p-1 bg-gray-100 rounded-full ml-2 text-xs cursor-pointer border w-4.5 h-4.5 relative shadow-tiny border-gray-250">
                <i class="el-icon-bottom font-bold transform rotate-90 absolute arrow-left" />
                <i class="el-icon-bottom font-bold transform -rotate-90 absolute arrow-right" />
              </span>
            </div>
          </template>
          <template #default="{ row }">
            <div class="flex">
              <!-- P O L I T I C A L  A F F I L I A T I O N  D E M O C R A T S -->
              <span class="text-blue-600">
                {{ row.politicalAffiliation.democrats }}%
              </span>

              <!-- D I V I D E R -->
              <span class="mx-1">-</span>

              <!-- P O L I T I C A L  A F F I L I A T I O N  R E P U B L I C A N S -->
              <span class="text-danger">
                {{ row.politicalAffiliation.republicans }}%
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import SelectItemsListModule from '~/components/Geographies/SelectItemsListModule.vue'
import SelectModule from '@/components/form-controls/SelectModule.vue'

import { votersModule } from '@/store'

import { FilterItem } from '@/interfaces'

@Component({
  name: 'voters.vue',
  components: {
    SelectItemsListModule,
    SelectModule
  }
})
export default class index extends Vue {
  /* DATA */
  generalVoterHistoryInfo = {
    generalElections: [
      {
        name: 'v',
        colorClass: 'bg-success',
        description: 'Voted'
      },
      {
        name: '',
        colorClass: 'bg-gray-600',
        description: 'Did Not Vote'
      }
    ],
    primaries: [
      {
        name: 'r',
        colorClass: 'bg-danger',
        description: 'Voted Republican'
      },
      {
        name: 'd',
        colorClass: 'bg-blue-600',
        description: 'Voted Democrat'
      },
      {
        name: '3',
        colorClass: 'bg-warming',
        description: 'Voted 3rd Party'
      },
      {
        name: '',
        colorClass: 'bg-gray-600',
        description: 'Did Not Vote'
      }
    ]
  }

  campaignDonationsGeneralInfo = [
    {
      colorClass: 'bg-danger',
      description: 'Donates to Republicans'
    },
    {
      colorClass: 'bg-blue-600',
      description: 'Donates to Democrats'
    },
    {
      colorClass: 'bg-gray-600',
      description: 'Donations are Non-Partisan'
    }
  ]

  tableData = [
    {
      development: 'Condo Development 001',
      address: 'some dummy address',
      name: 'Allan, Alexendar',
      age: 29,
      voterHistories: {
        generalElections: [
          {
            name: 'v',
            colorClass: 'bg-success'
          },
          {
            name: '',
            colorClass: 'bg-gray-600'
          }
        ],
        primaries: [
          {
            name: 'r',
            colorClass: 'bg-danger'
          },
          {
            name: 'd',
            colorClass: 'bg-blue-600'
          }
        ]
      },
      campaignDonations: {
        colorClass: 'bg-danger',
        amount: '10000'
      },
      units: 34,
      registeredVoters: 43,
      politicalAffiliation: {
        democrats: 79,
        republicans: 21
      }
    },
    {
      development: 'Condo Development 002',
      address: 'some dummy address',
      name: 'Allan, Alexendar',
      age: 20,
      voterHistories: {
        generalElections: [
          {
            name: 'v',
            colorClass: 'bg-success'
          },
          {
            name: '',
            colorClass: 'bg-gray-600'
          }
        ],
        primaries: [
          {
            name: 'r',
            colorClass: 'bg-danger'
          },
          {
            name: 'r',
            colorClass: 'bg-danger'
          }
        ]
      },
      campaignDonations: {
        colorClass: 'bg-blue-600',
        amount: '100000'
      },
      units: 34,
      registeredVoters: 43,
      politicalAffiliation: {
        democrats: 79,
        republicans: 21
      }
    },
    {
      development: 'Condo Development 003',
      address: 'some dummy address',
      name: 'Allan, Alexendar',
      age: 23,
      voterHistories: {
        generalElections: [
          {
            name: 'v',
            colorClass: 'bg-success'
          },
          {
            name: '',
            colorClass: 'bg-gray-600'
          }
        ],
        primaries: [
          {
            name: '3',
            colorClass: 'bg-warming'
          },
          {
            name: 'd',
            colorClass: 'bg-blue-600'
          }
        ]
      },
      campaignDonations: {
        colorClass: '',
        amount: ''
      },
      units: 34,
      registeredVoters: 43,
      politicalAffiliation: {
        democrats: 79,
        republicans: 21
      }
    },
    {
      development: 'Condo Development 004',
      address: 'some dummy address',
      name: 'Allan, Alexendar',
      age: 49,
      voterHistories: {
        generalElections: [
          {
            name: 'v',
            colorClass: 'bg-success'
          },
          {
            name: '',
            colorClass: 'bg-gray-600'
          }
        ],
        primaries: [
          {
            name: '',
            colorClass: 'bg-gray-600'
          },
          {
            name: 'd',
            colorClass: 'bg-blue-600'
          }
        ]
      },
      campaignDonations: {
        colorClass: 'bg-blue-600',
        amount: '100'
      },
      units: 34,
      registeredVoters: 43,
      politicalAffiliation: {
        democrats: 79,
        republicans: 21
      }
    }
  ]

  selectedDevelopment = ''

  developmentSelectorOptionsList = [
    {
      label: 'by Condo Development',
      value: 'condo dev'
    },
    {
      label: 'by Some Development',
      value: 'some dev 1'
    },
    {
      label: 'by Some Development',
      value: 'some dev 2'
    },
    {
      label: 'by Some Development',
      value: 'some dev 3'
    }
  ]

  /* COMPUTED */
  get ageFilterItems () {
    return votersModule.ageFilterItems || []
  }

  get campaignContributionsFilterItems () {
    return votersModule.campaignContributionsFilterItems || []
  }

  get suspectRegistrationFilterItems () {
    return votersModule.suspectRegistrationFilterItems || []
  }

  get isGeographies () {
    return votersModule.isGeographies
  }

  /* METHODS */
  onAgeFilterClick (AgeFilterItems: FilterItem[]) {
    votersModule.setAgeFilterItems(AgeFilterItems)
  }

  onCampaignContributionsFilterClick (campaignContributionsFilterItems: FilterItem[]) {
    votersModule.setCampaignContributionsFilterItems(campaignContributionsFilterItems)
  }

  onSuspectRegistrationFilterClick (suspectRegistrationFilterItems: FilterItem[]) {
    votersModule.setSuspectRegistrationFilterItems(suspectRegistrationFilterItems)
  }
}
</script>

<style lang="scss">
  .voters {
    .el-table {
      @apply rounded;
      .arrow-left {
        @apply left-0;
      }
      .arrow-right {
        @apply right-0;
      }

      .info-icon {
        width: 14px;
        height: 14px;
      }
    }
  }
</style>
