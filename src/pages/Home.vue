<template>
    <SideBar>
      <Todo :number=number @clicked-submit="handleSubmitParent"></Todo>
      <div>name: {{name}}</div>
      <div v-bind="objectOfAttrs">Test objectOfAttrs</div>
      <button @click="increment">{{ count }}</button>
    </SideBar>
  </template>
  
  <script>
  import Todo from '../components/Todo.vue';
  import SideBar from '../components/SideBar.vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
      Todo,
      SideBar
    },
    data: () => {
      return {
        name: '',
        number: 200,
        count: 0,
        objectOfAttrs: {
          id: 'container',
          class: 'wrapper'
        },
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
    created() {
      console.log(`the component is now created.`)
    },
    mounted() {
      console.log(`the component is now mounted.`);
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
  