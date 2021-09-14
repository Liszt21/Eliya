import { App } from "vue";
import { Menu, Layout, Breadcrumb, BackTop, Divider, Button, Space, Row, Col, Popover } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

export default {
    install(Vue: App) {
        Vue.use(Menu).use(Layout).use(Breadcrumb).use(BackTop).use(Divider).use(Button).use(Space).use(Row).use(Col).use(Popover);
    }
}