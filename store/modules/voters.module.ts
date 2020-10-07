import { Module, VuexMutation, VuexAction, VuexModule } from 'nuxt-property-decorator'
import { FilterItem } from '@/interfaces'

@Module({ name: 'VotersModule' })
export default class VotersModule extends VuexModule {
  isGeographies = false
  ageFilterItems: FilterItem[] = []
  campaignContributionsFilterItems: FilterItem[] = []
  suspectRegistrationFilterItems: FilterItem[] = []

  @VuexMutation
  SET_AGE_FILTER_ITEMS (ageFilterItems: FilterItem[]) {
    this.ageFilterItems = ageFilterItems
  }

  @VuexMutation
  SET_CAMPAIGN_CONTRIBUTIONS_FILTER_ITEMS (campaignContributionsFilterItems: FilterItem[]) {
    this.campaignContributionsFilterItems = campaignContributionsFilterItems
  }

  @VuexMutation
  SET_SUSPECT_REGISTRATION_FILTER_ITEMS (suspectRegistrationFilterItems: FilterItem[]) {
    this.suspectRegistrationFilterItems = suspectRegistrationFilterItems
  }

  @VuexMutation
  SET_GEOGRAPHY (isGeographies: boolean) {
    this.isGeographies = isGeographies
  }

  @VuexAction({ commit: 'SET_AGE_FILTER_ITEMS' })
  setAgeFilterItems (ageFilterItems: FilterItem[]) {
    return ageFilterItems
  }

  @VuexAction({ commit: 'SET_CAMPAIGN_CONTRIBUTIONS_FILTER_ITEMS' })
  setCampaignContributionsFilterItems (campaignContributionsFilterItems: FilterItem[]) {
    return campaignContributionsFilterItems
  }

  @VuexAction({ commit: 'SET_SUSPECT_REGISTRATION_FILTER_ITEMS' })
  setSuspectRegistrationFilterItems (suspectRegistrationFilterItems: FilterItem[]) {
    return suspectRegistrationFilterItems
  }

  @VuexAction({ commit: 'SET_GEOGRAPHY' })
  setGeography (isGeographies: boolean) {
    return isGeographies
  }
}
