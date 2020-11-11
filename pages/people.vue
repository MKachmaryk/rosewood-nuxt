<template>
  <div>
    <div
      class="bg-white flex items-center shadow-tiny z-10 relative"
    >
      <p
        class="text-2xl ml-6 mr-4 md:my-2 my-2 font-medium text-gray-900"
      >
        John A. Smith
      </p>
      <span
        class="w-6 h-6 rounded-full bg-danger"
      />
    </div>

    <div class="m-6">
      <!-- G E N E R A L  I N F O -->
      <h2 class="text-lg font-bold mb-1 text-gray-900">
        General
      </h2>
      <div class="bg-white border border-gray-250 rounded px-4 py-2 shadow-tiny">
        <div
          v-for="(generalInfoItem, i) in generalInfo"
          :key="`general-info-${i}`"
          class="flex items-center mb-2"
        >
          <!-- G E N E R A L  I N F O  T I T L E -->
          <span class="md:w-48 w-32 text-sm text-gray-650">
            {{ generalInfoItem.title }}
          </span>

          <div class="flex items-center">
            <!-- P R E F I X  C L A S S -->
            <span
              v-if="generalInfoItem.prefixClass"
              class="mr-1  w-4 h-4 rounded-full"
              :class="generalInfoItem.prefixClass"
            />

            <!-- P R E F I X  I C O N -->
            <div
              v-if="generalInfoItem.prefixIconName"
              class="p-1 mr-1 border border-gray-250 rounded-full shadow-tiny"
            >
              <div
                :style="{ backgroundImage: 'url(' + require(`@/assets/images/${generalInfoItem.prefixIconName}.png`) + ')'}"
                class="bg-contain bg-no-repeat bg-center w-4 h-4"
              />
            </div>

            <span class="text-sm text-gray-900">
              {{ generalInfoItem.value }}
            </span>

            <!-- G E N E R A L  I N F O  T O O L T I P -->
            <el-tooltip
              v-if="generalInfoItem.info"
              effect="light"
              placement="bottom-start"
              :visible-arrow="false"
              popper-class="shadow-tiny text-gray-900"
            >
              <div
                slot="content"
                class="px-3 py-4"
              >
                <h3 class="text-sm font-bold uppercase">
                  {{ generalInfoItem.info.label }}
                </h3>

                <p class="text-sm my-4">
                  {{ generalInfoItem.info.description }}
                </p>

                <div
                  v-for="(item, infoDescIndex) in generalInfoItem.info.infoDescriptions"
                  :key="`info-description-${infoDescIndex}`"
                  class="flex items-center mb-2"
                >
                  <div class="w-32 md:w-40 flex items-center">
                    <div
                      class="p-1 mr-2 border border-gray-250 rounded-full shadow-tiny"
                    >
                      <div
                        :style="{ backgroundImage: 'url(' + require(`@/assets/images/${item.titlePrefixIcon}.png`) + ')'}"
                        class="bg-contain bg-no-repeat bg-center w-4 h-4"
                      />
                    </div>

                    <span class="font-bold">{{ item.title }}</span>
                  </div>

                  <span>{{ item.description }}</span>
                </div>
              </div>

              <!-- G E N E R A L  I N F O -->
              <span class="rounded-full ml-2 cursor-pointer shadow-tiny text-base">
                <i class="el-icon-info flex items-center justify-center info-icon" />
              </span>
            </el-tooltip>
          </div>
        </div>
      </div>

      <!-- E M P L O Y M E N T  -->
      <h2 class="text-lg font-bold mb-1 text-gray-900 mt-8">
        Employment
      </h2>

      <div class="border rounded border-gray-300 shadow-tiny">
        <el-table
          :data="employmentTableData"
          style="width: 100%"
          row-class-name="cursor-pointer h-10"
        >
          <!-- E M P L O Y E R  C O L U M N -->
          <el-table-column
            prop="employer"
            label="Employer"
            min-width="150"
          />

          <!-- A D D R E S S  C O L U M N -->
          <el-table-column
            prop="address"
            label="Address"
            min-width="220"
          />

          <!-- J O B  T I T L E -->
          <el-table-column
            prop="jobTitle"
            label="Job Title"
            min-width="120"
          />

          <!-- D A T E -->
          <el-table-column
            prop="date"
            label="Date"
            min-width="100"
          />

          <!-- A C T I O N S -->
          <el-table-column align="right">
            <template>
              <el-tooltip
                class="item"
                effect="light"
                placement="top"
                popper-class="shadow"
              >
                <div slot="content" class="flex flex-col items-start">
                  <!-- E D I T B U T T O N -->
                  <el-button
                    type="text"
                    class="w-full text-gray-900 text-xs py-1 px-2 hover:bg-gray-250 hover:text-gray-900 action-button-margin"
                  >
                    Edit
                  </el-button>

                  <!-- D E L E T E  B U T T O N -->
                  <el-button
                    type="text"
                    class="w-full text-gray-900 text-xs py-1 px-2 hover:bg-gray-250 hover:text-gray-900 action-button-margin"
                  >
                    Delete
                  </el-button>
                </div>

                <!-- A C T I O N S  I C O N -->
                <span class="px-px rounded-full border border-transparent hover:shadow-tiny hover:border-solid hover:border-gray-300 hover:bg-white">
                  <i class="el-icon-more" />
                </span>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'people'
})
export default class People extends Vue {
  employmentTableData = [
    {
      employer: 'Organization Name',
      address: '67483 Washington Ave, Wilmingtonville, IL',
      jobTitle: 'Job Title',
      date: 'date'
    },
    {
      employer: 'Organization Name',
      address: '67483 Washington Ave, Wilmingtonville, IL',
      jobTitle: 'Job Title',
      date: 'date'
    },
    {
      employer: 'Organization Name',
      address: '67483 Washington Ave, Wilmingtonville, IL',
      jobTitle: 'Job Title',
      date: 'date'
    },
    {
      employer: 'Organization Name',
      address: '67483 Washington Ave, Wilmingtonville, IL',
      jobTitle: 'Job Title',
      date: 'date'
    }
  ]

  /* COMPUTED */
  get generalInfo () {
    return [
      {
        title: 'Dob',
        value: 'July 28, 1978'
      },
      {
        title: 'Age',
        value: '41'
      },
      {
        title: 'Place of Birth',
        value: 'Chicago, IL'
      },
      {
        title: 'Hometown',
        value: 'Riverside, IL'
      },
      {
        title: 'Primary Address',
        value: '912 West Adams St, Riverside, IL 60546'
      },
      {
        title: 'Political Affiliation',
        value: 'Hard Republican',
        prefixClass: 'bg-danger',
        info: []
      },
      {
        title: 'Suspect Voter',
        value: 'Occupancy',
        prefixIconName: 'occupancy',
        info: {
          label: 'suspect registration',
          description: 'Voter registrations are marked as suspect for a variety of reasons:',
          infoDescriptions: [
            {
              titlePrefixIcon: 'age',
              title: 'Age',
              description: 'Newly registered voters over the age of 80'
            },
            {
              titlePrefixIcon: 'birth_date',
              title: 'Birth Date',
              description: 'Registered birthdate doesn\'t exist'
            },
            {
              titlePrefixIcon: 'deceased',
              title: 'Deceased',
              description: 'Voter is believed to be deceased'
            },
            {
              titlePrefixIcon: 'no_unit',
              title: 'No Unit Number',
              description: 'No unit number is provided in registration at multi-family property type'
            },
            {
              titlePrefixIcon: 'occupancy',
              title: 'Occupancy',
              description: 'Number of registered voters at the address disproportionate to size'
            },
            {
              titlePrefixIcon: 'address',
              title: 'Address',
              description: 'Address doesn\'t exist'
            },
            {
              titlePrefixIcon: 'non_residential',
              title: 'Non-Residential',
              description: 'Registered address is non-residential'
            }
          ]
        }
      }
    ]
  }
}
</script>

<style scoped>
  .action-button-margin {
    margin: 0 !important;
  }
</style>
