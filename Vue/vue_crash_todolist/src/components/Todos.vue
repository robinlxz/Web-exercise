<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @delete-todo="deleteTodo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(todoID) {
      // this.todos = this.todos.filter((todo)=>{return todo.id!=todoID});
      this.$emit('app-delete-todo', todoID);
      // console.log(todoID, 'here in Todos.vue')
    }
  }
}
</script>

<style scoped>

</style>
