<template>
  <div>
    <h1>Hellow, this is TestCard</h1>
    <div v-for="todo in todos" :key="todo.id">
      <TodoCard :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoCard from '../components/TodoCard'
  export default {
    name: 'TestCard',
    components: {
      TodoCard
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Buy Monitor',
            completed: true
          },
          {
            id: 2,
            title: 'TWo chapter of Eloquent JS',
            completed: false
          }
      ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>