import { App } from "vue";
import { Menu, Layout, Breadcrumb } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

export default {
    install(Vue: App) {
        Vue.use(Menu).use(Layout).use(Breadcrumb)
    }
}