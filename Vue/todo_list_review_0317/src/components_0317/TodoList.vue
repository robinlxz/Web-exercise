<template>
  <div>
    <h1>This is Todo List component</h1>  
    <!-- <h2>{{ events }}</h2> -->
    <div v-for="todo in events" :key="todo.id">
      <TodoCard :todo="todo" @delete-todo="deleteTodo" />
    </div>
    <AddTodo @add-todo="addTodo"/>
    
  </div>  
</template>


<script>
import TodoCard from './TodoCard'
import AddTodo from './AddTodo'
export default {
  components: {
    TodoCard,
    AddTodo
  },
  props: {
    events: {
      required: true,
      type: Array
    }
  },
  methods: {
    addTodo(newTodoObject) {
      this.$emit('add-todo', newTodoObject);
    },
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    }
  }
}
</script>


<style scoped>

</style>