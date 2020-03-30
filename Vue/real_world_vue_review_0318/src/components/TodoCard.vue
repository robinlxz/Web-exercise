<template>
  <div>
    <p>-------</p>
    <h2
      :class="{crossed: todo.completed}"
      @click="updateCompleteStatus"
    >
      <input type="checkbox" :checked="todo.completed"> 
      {{ todo.title }}
      <button class="deleteBtn" @click="$emit('delete-todo', todo.id)">X</button>
    </h2>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      updateCompleteStatus() {
        this.todo.completed = !this.todo.completed;
      }
    }
  }

  
</script>

<style scoped>
  .crossed {
    text-decoration-line: line-through;
  }
  .deleteBtn {
    /* background-color: red; */
    color: red;
  }
</style>