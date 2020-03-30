<template>
  <div :class="{done:todo.completed}" class="todo-item">
    <p @click="changeComplete">
      {{ todo.title }}
      <button class="del" @click="$emit('delete-todo', todo.id)">X</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TodoCard',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      changeComplete() {
        this.todo.completed = !this.todo.completed;
      }
    }
  }
</script>

<style scoped>
  .done {
    text-decoration-line: line-through;
  }
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>