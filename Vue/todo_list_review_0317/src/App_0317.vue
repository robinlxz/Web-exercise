<template>
  <div id="app">    
    <TodoList :events="events" @add-todo="addTodo" @delete-todo="deleteTodoRoot"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Review Vue todo list',
          completed: false
        },
        {
          id: 2,
          title: 'Buy monitor',
          completed: false
        },
        {
          id: 3,
          title: 'Morning meeting',
          completed: true
        }
      ]
    }
  },
  methods: {
    addTodo(newTodoObject) {
      this.events.push(newTodoObject);
    },
    deleteTodoRoot(id) {
      this.events = this.events.filter((item) => {return item.id!==id})
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
