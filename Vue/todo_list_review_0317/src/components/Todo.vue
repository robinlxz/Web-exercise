<template>
  <div>
    <h2 
      :class="{done: todo.completed}"
      @click="changeCompleteStatus"
    >***{{todo.title}}***</h2>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      changeCompleteStatus() {
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