import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import {
  Aside,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Cascader,
  Container,
  Header,
  Input,
  Image,
  Main,
  Menu,
  MenuItem,
  Option,
  Select,
  Submenu,
  Switch,
  Table,
  TableColumn,
  Tooltip
} from 'element-ui'

export default () => {
  [
    Aside,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Cascader,
    Container,
    Header,
    Input,
    Image,
    Main,
    Menu,
    MenuItem,
    Option,
    Select,
    Submenu,
    Switch,
    Table,
    TableColumn,
    Tooltip
  ].forEach(component => Vue.use(component))

  locale.use(lang)
}
