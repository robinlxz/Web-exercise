<template>
  <div >
    <h2 :class="{done: todo.completed}" @click="finishTodo">
      <input type="checkbox"  :checked="todo.completed">
      //{{ todo.title }}//
      <button @click="$emit('delete-todo', todo.id)">X</button>
    </h2>
    
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    finishTodo() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration-line: line-through;
}
</style>