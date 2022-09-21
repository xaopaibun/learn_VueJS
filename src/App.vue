<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Todo :number=number @clicked-submit="handleSubmitParent"></Todo>
  <div>name: {{name}}</div>
  <h1>Data length: {{listProduct.length}}</h1>
  <a-table :dataSource="listProduct" :columns="columns">
    <template v-slot:image-column="image" >
      <td>
        <img :src="image" style="width: 50px; height: 50px" />
      </td>
    </template>
  </a-table>
</template>

<script>
import Todo from './components/Todo.vue';
import axios from 'axios';
import 'ant-design-vue/dist/antd.css';
export default {
  name: 'App',
  components: {
    Todo
  },
  data: () => {
    return {
      name: '',
      number: 200,
      listProduct: [],
      columns: [
          {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
          },
          {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            scopedSlots: { customRender: "image-column" },
          },
        ],
    }
  },
  methods: {
    handleSubmitParent: function (name) {
      this.name = name;
    }
  },
  mounted() {
    console.log(`the component is now mounted.`);
    (async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.listProduct = data;
    })()
  },
  created() {
    console.log(`the component is now created.`)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
