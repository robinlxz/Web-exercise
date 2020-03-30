<template>
  <div>
    <!-- {{todos}} -->
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Todo from './Todo'
  export default {
    components: {
      Todo
    },
    props: {
      todos: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>