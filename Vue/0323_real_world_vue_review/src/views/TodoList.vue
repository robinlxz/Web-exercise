<template>
  <div>
    <h1>This is TodoList View</h1>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo"
    @delete-todo="deleteTodo"
    />
    <AddTodo @add-new-todo="addTodo"/>
  </div>
</template>

<script>
import TodoCard from '../components/TodoCard'
import AddTodo from '../components/AddTodo'
  export default {
    name: 'TodoList',
    components: {
      TodoCard,
      AddTodo
    },
    // to call from api later
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Read Kant',
            completed: false
          },
          {
            id: 2,
            title: 'Play piano',
            completed: true
          }
        ]
      }
    },
    methods: {
      addTodo(newTodo) {
        this.todos.push(newTodo);
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo=>todo.id!=id);
      }
    }
  }
</script>

<style scoped>

</style>