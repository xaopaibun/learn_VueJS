<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Todo :number=number @clicked-submit="handleSubmitParent"></Todo>
  <div>name: {{name}}</div>
  <div v-bind="objectOfAttrs">Test objectOfAttrs</div>
  <button @click="increment" >{{ count }}</button>
  <h1 class="text-status">IsProduct: {{publishedListProduct}}</h1>
  <a-table :dataSource="listProduct" :columns="columns" v-if="listProduct">
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
import { nextTick } from 'vue';
export default {
  name: 'App',
  components: {
    Todo
  },
  data: () => {
    return {
      name: '',
      number: 200,
      count: 0,
      listProduct: [],
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      },
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
    handleSubmitParent(name) {
      this.name = name;
    },
    increment() {
      this.count++
    },
  },
  computed: {
    publishedListProduct() {
      return this.listProduct.length > 0 ? 'Yes' : 'No'
    },
  },
  created() {
    console.log(`the component is now created.`)
  },
  mounted() {
    console.log(`the component is now mounted.`);
    (async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.listProduct = data;
    })()
    nextTick(() => {
      console.log('I will be displayed once the next DOM update cycle is complete');
      // access updated DOM
    })
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
.text-status{
  color: gray;
}
</style>
