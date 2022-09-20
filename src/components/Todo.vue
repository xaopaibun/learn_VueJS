<template>
    <div class="hello">
        <h1>number: {{ number }}</h1>
        <button @click="handleSubmit">Submit</button>
    </div>
</template>
  
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Todo',
    props: {
        number: Number
    },
    methods: {
        handleSubmit: function () {
            this.$emit('clicked-submit', 'Pham Jin')
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  