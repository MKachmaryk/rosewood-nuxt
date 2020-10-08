export interface FilterItem {
  interval: string,
  count: number,
  selected: boolean
}

interface Option {
  value: string
  label: string
}

export interface FilterGeo {
  selectedOptions: string[]
  options: CascaderOption[]
}

export interface CascaderOption extends Option{
  children: Option[]
}
