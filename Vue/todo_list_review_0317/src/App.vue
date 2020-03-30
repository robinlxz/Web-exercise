<template>
  <div id="app">
    <h1>Hello world</h1>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
  export default {
    components: {
      TodoList
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Watch pacific ream 2',
            completed: false
          }
        ]
      }
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
  margin-top: 60px;
}
</style>