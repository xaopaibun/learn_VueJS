<template>
    <SideBar>
      <h1 class="text-status">IsProduct: {{publishedListProduct}}</h1>
      <a-table :dataSource="listProduct" :columns="columns" v-if="listProduct">
        <template v-slot:image-column="image" >
            <img :src="image" />
        </template>
      </a-table>
    </SideBar>
    <router-view />
  </template>
  
  <script>
  import { nextTick } from 'vue';
  import axios from 'axios';
  import SideBar from '../components/SideBar.vue';

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Product',
    components: {
      SideBar
    },
    data: () => {
      return {
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
    updated() {
      console.log(`the component is update.`);
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .text-status {
    color: gray;
  }
  </style>
  