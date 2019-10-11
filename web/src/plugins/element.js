import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  Form,
  FormItem,
  Row,
  Col,
  Loading,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
