<template>
  <div>
    <h1>Hello, this is todo list</h1>
    <TodoCard 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
      @delete-todo="deleteTodo"
    />
    <AddTodo @submit-new-todo="addNewTodo"/>
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
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Mark complete with checkbox',
            completed: true
          },
          {
            id: 2,
            title: 'Delete todo',
            completed: true
          },
          {
            id: 3,
            title: 'Add new todo',
            completed: true
          }
      ]
      }
    },
    methods: {
      deleteTodo(id) {
        this.todos = this.todos.filter((todo)=>{return todo.id != id});
      },
      addNewTodo(newTodoObject) {
        this.todos.push(newTodoObject);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>