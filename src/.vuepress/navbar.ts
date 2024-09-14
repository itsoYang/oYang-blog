import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    prefix: "/frontend/",
    children:[
      {
        text: "vue",
        prefix: "vue/",
        children: [
          {text: "vue-hello", link: "vue-hello"}
        ]
      }
    ]
  },
  {
    text: "后端",
    prefix: "/backend/",
    children:[
      {
        text: "Java",
        prefix: "Java/",
        children: [
          {text: "java-hello", link: "java-hello"}
        ]
      }
    ]
  },
  {
    text: "数据库",
    prefix: "/database/",
    children:[
      {
        text: "MySql",
        prefix: "MySql/",
        children: [
          {text: "mysql-hello", link: "mysql-hello"}
        ]
      }
    ]
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
