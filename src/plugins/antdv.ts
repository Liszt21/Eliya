import { App } from "vue";
import { Menu, Layout, Breadcrumb, BackTop, Divider, Button, Space, Row, Col, Popover, Input } from "ant-design-vue";

export default {
  install(Vue: App) {
    Vue.use(Menu)
      .use(Layout)
      .use(Breadcrumb)
      .use(BackTop)
      .use(Divider)
      .use(Button)
      .use(Space)
      .use(Row).use(Col)
      .use(Popover)
      .use(Input);
  }
}