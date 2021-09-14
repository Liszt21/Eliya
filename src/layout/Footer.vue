<script lang="ts">
import {
  GithubOutlined,
  WechatOutlined,
  TwitterOutlined,
  MailOutlined
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";

interface Icon {
  name: string;
  link?: string;
  text?: string;
}

interface Link {
  name: string;
  target: string;
  description?: string;
}

export default defineComponent({
  components: {
    GithubOutlined,
    WechatOutlined,
    TwitterOutlined,
    MailOutlined
  },
  setup() {
    const links: Link[] = [
      {
        name: "Aliya",
        target: "https://github.com/Liszt21/Aliya",
        description: "个人助理"
      },
      {
        name: "Sliya",
        target: "https://github.com/Liszt21/Sliya",
        description: "RestApi 后端"
      },
      {
        name: "Quiss",
        target: "https://github.com/Liszt21/Quiss",
        description: "AI for screeps"
      },
      {
        name: "Glorg",
        target: "https://glorg.liszt.space",
        description: "个人博客"
      }
    ];
    const icons: Icon[] = [
      {
        name: "GithubOutlined",
        link: "https://github.com/Liszt21/Sliya"
      },
      {
        name: "TwitterOutlined",
        link: "https://twitter.com/liszt157"
      },
      {
        name: "WechatOutlined",
        text: "Liszt157"
      },
      {
        name: "MailOutlined",
        text: "1832666492@qq.com"
      }
    ];

    const onClickIcon = (icon: Icon) => {
      if (icon.text) {
        const transfer = document.createElement("input");
        document.body.appendChild(transfer);
        transfer.value = icon.text;
        transfer.focus();
        transfer.select();
        // TODO change copy method
        if (document.execCommand) {
          document.execCommand("copy");
        }
        transfer.blur();
        document.body.removeChild(transfer);
      }
    };
    return {
      links,
      icons,
      onClickIcon
    };
  }
});
</script>

<template lang="pug">
div.footer-links
  a-popover.footer-links-item(v-for="(link, index) in links" :key="index" placement="top")
    template(#content) {{link.description}}
    a(:href="link.target") {{link.name}}
a-divider
div.footer-bottom
  a-row.footer-bottom-icons
    a-col(v-for="(icon, index) in icons" :key="index" :xs="{span: 6}" :sm="{span: 4}" :md="{span: 2}" :lg="{span: 1}")
      a(:href="icon.link")
        component(:is="icon.name" @click="onClickIcon(icon)")
  div(:span="12") Eliya @2021 Created by Liszt21
</template>

<style lang="less" scoped>
a {
  color: black;
}
.footer {
  &-links {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    &-item {
      margin: 0 5px;
    }
  }
  &-bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    &-icons {
      min-width: 100px;
      flex-grow: 1;
    }
  }
}
</style>
