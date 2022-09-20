<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Todo :number=number @clicked-submit="handleSubmitParent"></Todo>
  <div>name: {{name}}</div>
  <div v-for="item in datas" v-bind:key=item.id>
    {{item.class}}
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  },
  data: () => {
    return {
      name: '',
      number: 200,
      datas: [
        {
          id: '1',
          class: 'D13CNPM6'
        },
        {
          id: '2',
          class: 'D13CNPM7'
        }
      ]
    }
  },
  methods: {
    handleSubmitParent: function (name) {
      this.name = name;
    }
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
